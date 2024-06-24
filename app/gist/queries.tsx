"use server";
import { Database } from "@/types/supabase";
import { supabase, supabaseServer } from ".";

export type GistType = Database["public"]["Tables"]["gists"]["Row"] & {
  profiles: Pick<
    Database["public"]["Tables"]["profiles"]["Row"],
    "full_name" | "username"
  > & {
    id: string;
  };
};

export const getGist = async () => {
  const user = await supabase.auth.getUser();

  return await supabase
    .from("gists")
    .select(
      `*,
      profiles
      (
        full_name,
    username
  )
  `
    )
    .returns<GistType[]>();
};

export const getLikeCount = async (gistId: string) => {
  const res = await supabaseServer
    .from("likes")
    .select("id", { count: "exact" })
    .eq("gist_id", gistId);

  return res;
};

export const isLiked = async ({
  gistId,
  userId,
}: {
  gistId: string;
  userId?: string;
}) => {
  if (!userId) return false;
  const { data, error } = await supabaseServer
    .from("likes")
    .select("id")
    .eq("user_id", userId)
    .eq("gist_id", gistId)
    .single();
  // if (error) {
  //   console.log("error check , checking like status: ", error);
  // }
  //console.log(userId);
  return Boolean(data?.id);
};
