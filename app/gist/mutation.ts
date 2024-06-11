"use server";
import { randomUUID } from "crypto";
import { supabase } from ".";

export const likeGist = async (gistId: string) => {
  const metaData = await supabase.auth.getUser();
  const { data, error } = await supabase.from("likes").insert({
    id: randomUUID(),
    gist_id: gistId,
    user_id: metaData.data.user?.id,
  });
  //console.log({ data, error });
};
