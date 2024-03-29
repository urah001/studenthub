import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import Main from "@/components/MiddlePage";
import Navigation from "@/components/Navigation";
//import Navigation from "@/components/Navigation";

export default async function ProtectedPage() {
  const supabase = createClient();

  /*const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }*/

  return (
    <div className="flex-1 w-full flex flex-col bg-background">
      {/*} <div className="w-full h-full">
        <nav className="w-full flex justify-center h-8">
          <div className="w-full max-w-2xl flex justify-between items-center  text-sm  right-0">
            <AuthButton />
          </div>
        </nav>
  </div>*/}

      <div className="animate-in flex-1 flex flex-col max-w-4xl px-3">
        <main className="flex-1 flex flex-col ">
          <Navigation />
          <Main />
        </main>
      </div>
    </div>
  );
}
/*
faizah <mash>
  <khadija>}</khadija>
</mash>
*/
