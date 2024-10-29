{
  /*
 this page is used to get supabase user object and to export it as supabase / supabaseserver so i can read and get properties and methods from my supabase directly
 */
}
import { createClient } from "@/utils/supabase/server";

import { SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supbaseSecretKey = process.env.SUPABASE_SECRET_KEY;

export const createSupabase = () => {
  const supabase = createClient();

  const supabaseServer = new SupabaseClient(
    supabaseUrl as string,
    supbaseSecretKey as string
  );

  return { supabase, supabaseServer };
};
