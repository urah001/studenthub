"use server";
import { Database } from "@/types/supabase";
import { createSupabase } from ".";
import { pool } from "@/lib/db";
import { getCurrentUser } from "../lib/data";
import { Query } from "pg";
import { error } from "console";

export type GistType = Database["public"]["Tables"]["gists"]["Row"] & {
  profiles: Pick<
    Database["public"]["Tables"]["profiles"]["Row"],
    "full_name" | "username"
  > & {
    id: string;
  };
};

const query = `SELECT gists.*, COUNT(likes.id) AS likes_count, EXISTS( SELECT 1 FROM likes WHERE likes.gist_id = gists.id AND likes.user_id = $1 ) AS user_has_liked FROM gists LEFT JOIN likes ON gists.id = likes.gist_id GROUP BY gists.id ORDER BY gists.created_at DESC`;
export const getGist = async (currentUserId?: string) => {
  const { supabase, supabaseServer } = createSupabase();

  pool.query(query, [currentUserId], (error, result) => {
    if (error) {
      console.log(" error executing query: ", error);
      return;
    }
    //process the query result
    console.log("query result: ", result.rows);
  });

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
  userId: string | undefined;
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
