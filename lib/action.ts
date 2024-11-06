"use server";
import { revalidatePath, revalidateTag } from "next/cache";

import { date, z } from "zod";
import { randomUUID } from "crypto";
import { createSupabase } from "../app/gist";
import { db } from "./db";
import { gists } from "./db/schema";
import { getCurrentUser } from "./data";

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

export async function handleSubmitGist(formData: FormData) {
  const { supabase } = createSupabase();
  const gist = formData.get("gist");
  if (!gist) return;

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();
  // const metadata = user;
  // const date = new Date().toISOString();

  const rawFormData = {
    id: randomUUID(),
    text: gist,
    profile_id: getCurrentUser, //check here for optimization
    created_at: date,
    updated_at: date,
  };

  revalidatePath("/");

  try {
    // await db
    //   .insert(gists)
    //   .values({
    //     gist_id: randomUUID(),
    //     text: gist.toString(),
    //     profileId: getCurrentUser, //check here for optimization
    //   })
    //   .returning().catch(()=>{
    // err = "something went wrong "
    // });
    await supabase.from("gists").insert(rawFormData);
  } catch (error) {
    return {
      message: "database error : failed to create gist",
    };
    //toast.error(" gist not sent ");
  }
}
