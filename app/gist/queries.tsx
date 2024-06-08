"use server";
import { Database } from "@/types/supabase";
import { supabase } from ".";

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
  const res = await supabase
    .from("likes")
    .select("count(*)")
    .eq("gistId", gistId);
  console.table(res);
  return res;
};
