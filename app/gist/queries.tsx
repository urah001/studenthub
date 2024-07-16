"use server";
import { Database } from "@/types/supabase";
import { createSupabase } from ".";

export type GistType = Database["public"]["Tables"]["gists"]["Row"] & {
  profiles: Pick<
    Database["public"]["Tables"]["profiles"]["Row"],
    "full_name" | "username"
  > & {
    id: string;
  };
};

export const getGist = async () => {
  const { supabase, supabaseServer } = createSupabase();
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
  const { supabase, supabaseServer } = createSupabase();
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
  userId: string;
}) => {
  if (!userId) return false;
  const { supabase, supabaseServer } = createSupabase();
  const { data, error } = await supabaseServer
    .from("likes")
    .select("id")
    .eq("user_id", userId)
    .eq("gist_id", gistId)
    .single();
  return Boolean(data?.id);
};
