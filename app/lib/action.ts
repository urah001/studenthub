"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { useForm } from "react-hook-form";
import { date, z } from "zod";
import { randomUUID } from "crypto";
import { createSupabase } from "../gist";

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
  //const supabase = createClient();
  const { supabase, supabaseServer } = createSupabase();
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
}
function createClient() {
  throw new Error("Function not implemented.");
}
