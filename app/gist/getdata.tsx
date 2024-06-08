import { dataType } from "./meta";
import { createClient } from "@/utils/supabase/server";

type Gistprops = {
  data: dataType;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supbaseSecretKey = process.env.SUPABASE_SECRET_KEY;
export const getUserData = async () => {
  const supabaseUser = createClient();
  const user = await supabaseUser.auth.getUser();
  // console.log(user.data.user?.id);
};
