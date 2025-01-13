"use server";

import { createSupabase } from "../app/gist";
import { createClient } from "@/utils/supabase/server";

/*
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supbaseSecretKey = process.env.SUPABASE_SECRET_KEY;
const supabase = createClient(
  supabaseUrl as string,
  supbaseSecretKey as string
);*/

export async function getCurrentUser() {
  const supabase = createClient();
  //const { supabase, supabaseServer } = createSupabase();
  const { data: user, error } = await supabase.auth.getUser();
  if (error) {
    console.error("location: lib/data.ts","Error fetching user:", error);
    return null;
  }
  return user;
}
