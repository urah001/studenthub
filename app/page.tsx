import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import AboutPage from "@/components/AboutSchhub";
import { Button } from "@/components @/app /ui/button";
import SignInAuthBtn from "./SignUp/SignUp-AuthBtn";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

export default async function Index() {
  //create supabase client

  //collect the user data from the created client and check if they are authenticated

  /*  
  
  
  */

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

  return (
    <div className="flex-1 w-full flex flex-col gap-10 items-center bg-slate-950 ">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-xl flex justify-between items-center absolute left-0 p-1 text-sm">
          {/*  <DeployButton />*/}
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col max-w-4xl px-3 ">
        <main className="flex-1added flex flex-col">
          <h2 className="text-foreground text-2xl mb-4">New to schoolhub ?</h2>
          {isSupabaseConnected && <AboutPage />}
          <div className="w-full flex flex-row max-w-4xl justify-between items-center p-3 text-xl">
            <AuthButton /> or <SignInAuthBtn />
          </div>
          {/*<ConnectSupabaseSteps />}*/}
        </main>
      </div>
    </div>
  );
}
