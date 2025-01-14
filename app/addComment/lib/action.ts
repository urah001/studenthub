"use server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { randomUUID } from "crypto";
import { createSupabase } from "@/app/gist";
import { error } from "console";
import { createClient } from "@/utils/supabase/server";
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

//const { supabase, supabaseServer } = createSupabase();
const supabase = createClient();

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
    text: comment.toString(),
    profile_id: metadata?.id,
    created_at: date,
    updated_at: date,
  };
  
  try {
      await supabase.from("giss").insert(rawFormData);
      revalidatePath("/");
      console.log("location: lib/action.ts", rawFormData);
    } catch (error) {
    return {
      message: "database error : failed to create comment",
    };
    //toast.error(" gist not sent ");
  }
}

// function createClient() {
//   throw new Error("Function not implemented.");
// }
