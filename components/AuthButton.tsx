"use server";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components @/app /ui/button";
import { getCurrentUser } from "@/lib/data";

const AuthButton = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const getCurrent = await getCurrentUser();
  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center flex-col ">
      <div className="text-sm">{user.email}</div>

      <form action={signOut}>
        <Button
          variant={"outline"}
          className="py-2 px-4 rounded-md no-underline bg-btn-background primary hover:bg-btn-background-hover"
        >
          Logout
        </Button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="rounded-md border-[#ccc] bg-[#020617] text-sm font-medium text-white transition-colors hover:bg-[#0c1130] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:ring-offset-2"
    >
      <Button variant={"outline"}>Login</Button>
    </Link>
  );
};
export default AuthButton;
