"use server";
import { Database } from "@/types/supabase";
import { supabase } from ".";
import { SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supbaseSecretKey = process.env.SUPABASE_SECRET_KEY;

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
  //const supabaseServer = new SupabaseClient(supabaseUrl, supbaseSecretKey);
  const res = await supabase
    .from("likes")
    .select("id", { count: "exact" })
    .eq("gist_id", gistId);

  return res;
};
