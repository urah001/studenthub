import { Database } from "@/types/supabase";
import { createClient } from "@/utils/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supbaseSecretKey = process.env.SUPABASE_SECRET_KEY;

export const supabase = createClient();

export const supabaseServer = new SupabaseClient(
  supabaseUrl as string,
  supbaseSecretKey as string
);
