"use server";
import { Database } from "@/types/supabase";
import { createSupabase } from ".";
import { revalidatePath } from "next/cache";
import { pool } from "@/lib";
import { db } from "@/lib/db";
import { gists, gistsReplies, likes, profiles, replies } from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";

export type GistType = Database["public"]["Tables"]["gists"]["Row"] & {
  username: string;
  full_name: string;
};

export const getGist = async (currentUserId?: string) => {
  try {
    let err = "";
    const res = await db
      .select()
      .from(gists)
      .leftJoin(likes, eq(gists.id, likes.gistId))
      .innerJoin(profiles, eq(gists.profileId, profiles.id))
      .orderBy(desc(gists.createdAt))
      .limit(5)
      .catch(() => {
        err = "something went wrong while fetching all the gist";
      });
   // console.log("location: app/gist/queries.tsx", res);
    //revalidatePath("/");
    //console.log("response");

    return { data: res, error: err };
    // return { data: res.rows };
  } catch (error) {
  //  console.log("location: app/gist/queries.tsx", error)
    return { error };
  }
};
{
  /*export const getComment = async (postId?: string) => {
  try {
    let err = "";
    const res = await db
      .select()
      .from(gistsReplies)
      .innerJoin(gists, eq(gistsReplies.replyId, gists.id)) // Join to filter replies for a specific post
      .leftJoin(likes, eq(gistsReplies.id, likes.gistId)) // Join for likes data
      .innerJoin(profiles, eq(gistsReplies.profileId, profiles.id)) // Join for profile data
      .where(eq(gists.id, postId)) // Filter by the specific post ID
      .orderBy(desc(gistsReplies.createdAt)) // Order by creation date
      .limit(5)
      .catch(() => {
        err = "something went wrong while fetching all the gist";
      });
    //revalidatePath("/");
    //console.log("response");

    return { data: res, error: err };
    // return { data: res.rows };
  } catch (error) {
    console.log(error);
    return { error };
  }
};*/
}

/*export const getComment = async (postId: string) => {
  const { supabaseServer } = createSupabase();
  const { data, error } = await supabaseServer
    .from("gists_replies")
    .select("*")
    .eq("gist_id", postId)
    .order("created_at", { ascending: true });
  return { data, error };
}

*/

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


//get comment

export type commetType = Database["public"]["Tables"]["gists"]["Row"] & {
  username: string;
  full_name: string;
};

export const getComment = async (currentUserId?: string) => {
  try {
    let err = "";
    const res = await db
      .select()
      .from(gistsReplies)
      .leftJoin(likes, eq(gists.id, likes.gistId))
      .innerJoin(profiles, eq(gists.profileId, profiles.id))
      .orderBy(desc(gists.createdAt))
      .limit(5)
      .catch(() => {
        err = "something went wrong while fetching all the gist";
      });
   // console.log("location: app/gist/queries.tsx", res);
    //revalidatePath("/");
    //console.log("response");

    return { data: res, error: err };
    // return { data: res.rows };
  } catch (error) {
  //  console.log("location: app/gist/queries.tsx", error)
    return { error };
  }
  }
