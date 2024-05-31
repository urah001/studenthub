import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import Navigation from "@/components/Navigation";
import ContentPage from "@/app/content/ContentPage";
import Explore from "@/components/Explore";
//import Navigation from "@/components/Navigation";

export default async function ProtectedPage() {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-background text-foreground">
      <div className="xl:max-w-[95vw] w-full h-full flex relative">
        {/* <main className="flex-1 flex flex-row max-w-screen-xl w-full h-full relative "> */}
        <Navigation />
        <ContentPage />
        <Explore />
        {/* </main> */}
      </div>
    </div>
  );
}
