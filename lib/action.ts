"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { useForm } from "react-hook-form";
import { date, z } from "zod";
import { randomUUID } from "crypto";
import { createSupabase } from "@/app/gist";
import { db } from "./db";
import { gists } from "./db/schema";
//$@custechICT
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

const { supabase, supabaseServer } = createSupabase();
export async function handleSubmitGist(
  formData: FormData
  // values: z.infer<typeof FormSchema>
) {
  //const supabase = createClient();
  const gist = formData.get("gist");
  if (!gist) return;

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const metadata = user;
  const date = new Date().toISOString();

  const rawFormData = {
    id: randomUUID(),
    text: gist.toString(),
    profile_id: metadata?.id,
    created_at: date,
    updated_at: date,
  };

  revalidatePath("/");

  try {
    await supabase.from("gists").insert(rawFormData);
    {/*const res = await db.insert(gists).values({
      id: randomUUID(),
      text: gist.toString(),
      profile_id: metadata?.id,
    });*/}
  } catch (error) {
    return {
      message: "database error : failed to create gist",
    };
    //toast.error(" gist not sent ");
  }
}

export async function handleSubmitComment(formData: FormData) {
  const comment = formData.get("comment");
  if (!comment) return;

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const metadata = user;
  const date = new Date().toISOString();

  const rawFormData = {
    id: randomUUID(),
    text: comment,
    profile_id: metadata?.id,
    created_at: date,
    updated_at: date,
    is_reply: true,
    reply_id: randomUUID(),
  };
  revalidatePath("/");

  try {
    console.log(rawFormData);
    await supabase.from("gists_replies").insert(rawFormData);
  } catch (error) {
    return {
      message: "database error : failed to create gist",
    };
    //toast.error(" gist not sent ");
  }
}

// function createClient() {
//   throw new Error("Function not implemented.");
// }
