import { createClient } from "@/utils/supabase/server";
import { Database } from "@/types/supabase";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supbaseSecretKey = process.env.SUPABASE_SECRET_KEY;

export type GistType = Database["public"]["Tables"]["gists"]["Row"] & {
  profiles: Pick<
    Database["public"]["Tables"]["profiles"]["Row"],
    "full_name" | "username"
  >;
};

export const getGist = async () => {
  if (supabaseUrl && supbaseSecretKey) {
    const supabase = createClient();
    //const supabase = new SupabaseClient(supabaseUrl, supbaseSecretKey);
    // const { data: user } = await supabase.auth.getUser();
    // let metadata = user?.user?.user_metadata;
    return await supabase
      .from("gists")
      .select(
        `*,
  profiles
  (
    full_name,
    username
  )
  `
      )
      .returns<GistType[]>();
  }
};
