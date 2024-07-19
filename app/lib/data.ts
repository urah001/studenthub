// utils/supabase/fetchUserId.ts
import { createSupabase } from "../gist";

export const fetchUserId = async () => {
  const { supabase } = createSupabase();
  const { data, error } = await supabase.auth.getUser();

  return data?.user?.id;
};
