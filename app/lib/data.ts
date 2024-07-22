"use server";

import { createSupabase } from "../gist";

/*
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supbaseSecretKey = process.env.SUPABASE_SECRET_KEY;
const supabase = createClient(
  supabaseUrl as string,
  supbaseSecretKey as string
);*/
const { supabase, supabaseServer } = createSupabase();

export async function getCurrentUser() {
  const { data: user, error } = await supabase.auth.getUser();
  if (error) {
    console.error("Error fetching user:", error);
    return null;
  }
  return user;
}
