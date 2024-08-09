import AuthButton from "../../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import AboutPage from "@/components/AboutSchhub";
import SignInAuthBtn from "../SignUp/SignUp-AuthBtn";
import { redirect } from "next/navigation";

export default async function Index() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };
  //create supabase client

  //collect the user data from the created client and check if they are authenticated

  /*  this is the main middle branch  */

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return user ? (
    redirect("/protected")
  ) : (
    <div className="flex-1 w-full flex flex-col gap-10 items-center bg-slate-950 ">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16"></nav>

      <div className="animate-in flex-1 flex flex-col max-w-4xl px-3 ">
        <main className="flex-1added flex flex-col">
          <h2 className="text-foreground text-2xl mb-4">New to schoolhub ?</h2>
          {/* bring the about page */}
          {isSupabaseConnected && <AboutPage />}
          <div className="w-full flex flex-row max-w-4xl justify-between items-center p-3 text-xl">
            {/* login and signin btn  */}
            <AuthButton /> or <SignInAuthBtn />
          </div>
        </main>
      </div>
    </div>
  );
}
