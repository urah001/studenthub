"use server";
import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { createSupabase } from ".";

const { supabase, supabaseServer } = createSupabase();
export const likeGist = async (gistId: string, userId: string | undefined) => {
  const user = supabase.auth.getUser();

  const { data, error } = await supabaseServer.from("likes").insert({
    id: randomUUID(),
    gist_id: gistId,
    user_id: (await user).data.user?.id,
  });
  console.log({ "like data:": data, "like error": error, "gist id ": gistId });
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
    .from("comments")
    .insert([{ gist_id: postId, text }]);
  return { data, error };
}
