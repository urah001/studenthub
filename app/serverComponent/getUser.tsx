import React from "react";
import { createClient } from "@/utils/supabase/server";
export async function GetUser() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  let metaData = user?.user_metadata;
  return <>@{metaData.username}</>;
}
