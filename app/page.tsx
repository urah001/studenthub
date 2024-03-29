import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import AboutPage from "@/components/AboutSchhub";
import { Button } from "@/components @/app /ui/button";

export default async function Index() {
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
        <main className="flex-1 flex flex-col">
          <h2 className="text-foreground text-4xl mb-4">New to schoolhub ?</h2>
          {isSupabaseConnected && <AboutPage />}
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-xl">
            <AuthButton />
          </div>
          {/*<ConnectSupabaseSteps />}*/}
        </main>
      </div>
    </div>
  );
}
