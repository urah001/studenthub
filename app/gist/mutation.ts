"use server";
import { randomUUID } from "crypto";
import { metaData, supabase, supabaseServer } from ".";
import { revalidatePath } from "next/cache";

//import { revalidatePath } from "next/cache";

export const likeGist = async (gistId: string) => {
  const { data, error } = await supabase.from("likes").insert({
    id: randomUUID(),
    gist_id: gistId,
    user_id: (await metaData).data.user!.id,
  });
  console.log({ data, error });
  revalidatePath("/");
};

export const unLikeGist = async (gistId: string) => {
  const { data, error } = await supabaseServer
    .from("likes")
    .delete()
    .eq("user_id", (await metaData).data.user!.id)
    .eq("gist_id", gistId);

  revalidatePath("/");
  console.log("data :", data, "error :", error);
};
