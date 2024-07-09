"use server";
import { randomUUID } from "crypto";
import { supabase, supabaseServer } from ".";
import { revalidatePath } from "next/cache";

export const likeGist = async (gistId: string, userId: string) => {
  const user = supabase.auth.getUser();
  const { data, error } = await supabaseServer.from("likes").insert({
    id: randomUUID(),
    gist_id: gistId,
    user_id: (await user).data.user?.id,
  });
  console.log({ "like data:": data, "like error": error });
  revalidatePath("/");
};

export const unLikeGist = async (gistId: string, userId: string) => {
  const { data, error } = await supabaseServer
    .from("likes")
    .delete()
    .eq("user_id", userId)
    .eq("gist_id", gistId);

  revalidatePath("/");
  console.log("unlike data :", data, "unlike error :", error);
};
