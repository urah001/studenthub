"use server";
import React from "react";
import MyForm from "@/app/gistSubmit/create-form";
import dayjs, { Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Gist } from "../gist/Gist";
import { getGist } from "../gist/queries";
/*here*/ import { createSupabase } from "../gist";
import { getCurrentUser } from "../lib/data";
import { redirect } from "next/navigation";
import {
  Book,
  Chat,
  Gear,
  Hash,
  House,
  Lightbulb,
  Search,
} from "react-bootstrap-icons";

dayjs.extend(relativeTime);
const Navigation_Item = [
  /*
  {
    title: "",
    icon: FaSchool,
  },
  */
  {
    title: "home",
    icon: House,
  },
  {
    title: "search",
    icon: Search,
  },
  {
    title: "learn",
    icon: Lightbulb,
  },
  {
    title: "study",
    icon: Book,
  },

  /*{
    title: "explore",
    icon: Hash,
  },
  {
    icon: Gear,
    title: "setting",
  },*/
];

async function ContentPage() {
  const { supabase, supabaseServer } = createSupabase();
  const getCurrent = await getCurrentUser();
  const res = await getGist(getCurrent?.user.id);

  if (getCurrent?.user.id === undefined) {
    return redirect("/protected");
  }
  return (
    <>
      {/*main content */}
      <main className="flex-1 bg-[#0c1130] p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto pb-20">
        <h1 className="text-xl font-bold p-2 backdrop-blur-sm sticky top-0">
          Home
        </h1>

        <div className="border-t-[0.1px] py-2 px-6 border-b-[0.1px] flex space-x-4 overflow-hidden bg-[#020617] rounded-lg shadow-lg p-4 mt-4 border-none">
          <div className="w-11 h-11 bg-slate-400 rounded-full flex-none"></div>
          {/* post space and post */}
          <MyForm />
        </div>

        <div className="flex flex-col w-full">
          {res?.error && <div>Review your network and try again</div>}

          {res?.data &&
            res.data.map((gist, i) => (
              <Gist
                key={gist.id}
                gist={gist}
                currentUserId={getCurrent?.user.id}
              />
            ))}
        </div>

        {/* mobile navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#0c1130] p-2 flex flex-row justify-between items-center w-full sm:hidden z-50">
          {Navigation_Item.map((item) => (
            <div key={item.title} className="cursor-pointer flex-1 text-center">
              <item.icon size={24} className="mx-auto hover:text-[#ea580c]" />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default ContentPage;
