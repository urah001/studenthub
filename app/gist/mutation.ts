"use server";
import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { createSupabase } from ".";
import { db } from "@/lib/db";
import { likes } from "@/lib/db/schema";

const { supabase, supabaseServer } = createSupabase();
export const likeGist = async (gistId: string, userId: any) => {
  const id = randomUUID();
  const res = await db
    .insert(likes)
    .values({
      id,
      gistId,
      userId,
    })
    .catch((err) => {
      console.log("like error", err);
    });
  {
    /*console.log({
    "like data:": res,
    "like error": error.toString(),
    "gist id ": gistId,
    userId: userId,
  });*/
  }
  console.log("location: app/gist/mutation.tsx",res);
  revalidatePath("/");
};

export const unLikeGist = async (
  gistId: string,
  userId: string | undefined
) => {
  const { data, error } = await supabaseServer
    .from("likes")
    .delete()
    .eq("user_id", userId)
    .eq("gist_id", gistId);

  revalidatePath("/");
  console.log({
    "unlike data ": data,
    "unlike error ": error,
    "gist id ": gistId,
  });
};

export async function addComment(postId: string, text: string) {
  const { data, error } = await supabaseServer
    .from("replies")
    .insert([{ gist_id: postId, text }]);
  return { data, error };
}
