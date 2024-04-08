import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import Navigation from "@/components/Navigation";
import ContentPage from "@/components/ContentPage";
import Explore from "@/components/Explore";
//import Navigation from "@/components/Navigation";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col bg-background">
      {/*} <div className="w-full h-full">
        <nav className="w-full flex justify-center h-8">
          <div className="w-full max-w-2xl flex justify-between items-center  text-sm  right-0">
            <AuthButton />
          </div>
        </nav>
  </div>*/}

      <div className="animate-in flex-1 flex flex-row max-w-[100] px-3 h-full bg-background text-foreground justify-center items-center relative">
        <main className="flex-1 flex flex-row max-w-screen-xl w-full h-full relative ">
          <p>creating nav branch</p>
          <Navigation />
          <ContentPage />
          <Explore />
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
