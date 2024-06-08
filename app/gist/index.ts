import { createClient } from "@/utils/supabase/server";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supbaseSecretKey = process.env.SUPABASE_SECRET_KEY;

export const supabase = createClient();
