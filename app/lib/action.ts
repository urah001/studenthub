"use server";
import { createClient } from "@/utils/supabase/server";
import { createBrowserClient } from "@supabase/ssr";
import { revalidatePath, revalidateTag } from "next/cache";
import { useForm } from "react-hook-form";
import { date, z } from "zod";

import { randomUUID } from "crypto";
import { toast } from "sonner";

const FormSchema = z.object({
  title: z
    .string()
    .min(10, {
      message: "content to small",
    })
    .max(500, {
      message: " content exceeded character limit",
    }),
});

export async function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof FormSchema>>({
    // resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
    },
  });
}

export async function handleSubmitGist(
  formData: FormData
  // values: z.infer<typeof FormSchema>
) {
  const supabase = createClient();
  //const supabase = createBrowserClient<Database>;

  const gist = formData.get("gist");
  if (!gist) return;

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const metadata = user;
  const date = new Date().toISOString();

  const rawFormData = {
    id: randomUUID(),
    text: gist,
    profile_id: metadata?.id,
    created_at: date,
    updated_at: date,
  };

  revalidatePath("/");

  try {
    await supabase.from("gists").insert(rawFormData);
  } catch (error) {
    return {
      message: "database error : failed to create gist",
    };
    //toast.error(" gist not sent ");
  }

  //  console.log("raw---data ", rawFormData, "user---metadata", metadata?.id);

  //const { title } = gist.parse({});
  //const getUser = new FormData();
  // getUser.append("username", metadata.username);

  // Test it out:
  //console.log(rawFormData, user);
  //revalidatePath("/explore");
}
