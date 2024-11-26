"use server";
import { Database } from "@/types/supabase";
import { createSupabase } from ".";
import { revalidatePath } from "next/cache";
import { pool } from "@/lib";

export type GistType = Database["public"]["Tables"]["gists"]["Row"] & {
  username: string;
  full_name: string;
};


export const getGist = async (currentUserId?: string) => {
  const query = `
    SELECT
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
      profiles ON gists.profile_id = profiles.id -- Link profiles to the gist's creator
    GROUP BY
      gists.id, profiles.username, profiles.full_name
    ORDER BY
      gists.created_at DESC;
  `;
  
  try {
    const res = await pool.query(query, [currentUserId]);
    revalidatePath("/");
    return { data: res.rows };
  } catch (error) {
    console.log(error);
    return { error };
  }
};



// const query = `SELECT
//     gists.*,
//     profiles.username,
//     profiles.full_name,
//     COUNT(likes.id) AS likes_count,
//     EXISTS(
//         SELECT 1
//         FROM likes
//         WHERE likes.gist_id = gists.id
//         AND likes.user_id = $1
//     ) AS user_has_liked
// FROM
//     gists
// LEFT JOIN
//     likes ON gists.id = likes.gist_id
// LEFT JOIN
//     profiles ON gists.profile_id = profiles.id -- Link profiles to the gist's creator
// GROUP BY
//     gists.id, profiles.username, profiles.full_name
// ORDER BY
//     gists.created_at DESC;

// `;
// export const getGist = async (currentUserId?: string) => {
  
//   try {
//     const res = await pool.query(query, [currentUserId]);
//     revalidatePath("/");
//     console.log(res.rows);
//     return { data: res.rows };
//   } catch (error) {
//     console.log(error);
//   }
// };

//supabaseserver is used to get little role level authorisation so pls leave it alone
export const getLikeCount = async (gistId: string) => {
  const { supabaseServer } = createSupabase();
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
  const { supabaseServer } = createSupabase();
  const { data, error } = await supabaseServer
    .from("likes")
    .select("id")
    .eq("user_id", userId)
    .eq("gist_id", gistId)
    .single();
  return Boolean(data?.id);
};


export async function getComments(postId: string) {
  const { supabaseServer } = createSupabase();
  const { data, error } = await supabaseServer
    .from("gists_replies")
    .select("*")
    .eq("gist_id", postId)
    .order("created_at", { ascending: true });
  return { data, error };
}
