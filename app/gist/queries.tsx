"use server";
import { Database } from "@/types/supabase";
import { createSupabase } from ".";
import { pool } from "@/lib/db";

export type GistType = Database["public"]["Tables"]["gists"]["Row"] & {
  profiles: Pick<
    Database["public"]["Tables"]["profiles"]["Row"],
    "full_name" | "username"
  > & {
    id: string;
  };
};

const query = `SELECT 
    gists.*, 
    profiles.username, 
    profiles.full_name, 
    COUNT(likes.id) AS likes_count, 
    EXISTS(
        SELECT 1 
        FROM likes 
        WHERE likes.gist_id = gists.id 
        AND likes.user_id = $1
    ) AS user_has_liked
FROM 
    gists
LEFT JOIN 
    likes ON gists.id = likes.gist_id
LEFT JOIN 
    profiles ON likes.user_id = profiles.id -- Correct join between gists and profiles
GROUP BY 
    gists.id, profiles.username, profiles.full_name
ORDER BY 
    gists.created_at DESC;
`;
export const getGist = async (currentUserId?: string) => {
  const { supabase, supabaseServer } = createSupabase();

  try {
    const res = await pool.query(query, [currentUserId]);
    console.log(res.rows);
    return { data: res.rows };
  } catch (error) {
    console.log(error);
  }
  // return await supabase
  //   .from("gists")
  //   .select(
  //     `*,
  //      profiles
  //      (
  //        full_name,
  //    username
  //  )
  //  `
  //   )
  //   .returns<GistType[]>();
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
