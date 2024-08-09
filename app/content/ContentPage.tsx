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
      <main className="flex w-full h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
        <h1 className="text-xl font-bold p-2  backdrop-blur sticky top-0">
          Home
        </h1>

        <div className=" border-t-[0.5px] px-4 border-b-[0.5px] flex item-stretch py-6 space-x-2  relative">
          <div className="w-11 h-11 bg-slate-400 rounded-full flex-none"></div>
          {/* post space and post */}
          <MyForm />
        </div>
        <div className="flex flex-col w-full pb-10">
          {res?.error && <div>review your network and try again </div>}

          {res?.data &&
            res.data.map((gist, i) => (
              <Gist
                key={gist.id}
                gist={gist}
                currentUserId={getCurrent?.user.id}
              />
            ))}
        </div>
        {/* mobile navigation  */}
        <div className="font-bold backdrop-blur bottom-0 fixed p-2 flex flex-row justify-between items-center w-full sm:hidden">
          {Navigation_Item.map((item) => (
            <div key={item.title} className="cursor-pointer">
              <item.icon size={20} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default ContentPage;
