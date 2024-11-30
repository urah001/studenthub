"use server";
import React from "react";
import MyForm from "@/app/gistSubmit/create-form";
import dayjs, { Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Gist } from "../gist/Gist";
import { getGist } from "../gist/queries";
/*here*/ import { createSupabase } from "../gist";
import { getCurrentUser } from "../../lib/data";
import MobileNav from "@/components/MobileNav";
import FloatingActionButton from "@/components/FAB";

dayjs.extend(relativeTime);
async function ContentPage() {
  const getCurrent = await getCurrentUser();
  const res = await getGist();

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
          {/* input */}
          <MyForm />
        </div>

        <div className="flex flex-col w-full">
          {/* {res?.error && <div>Review your network and try again</div>} */}
          {res.data?.map(({ gists, profiles, likes }) => (
            <Gist
              key={gists.id}
              gist={{
                gistDetails: {
                  ...gists,
                },
                userProfile: {
                  ...profiles,
                },
              }}
              currentUserId={getCurrent?.user.id}
            />
          ))}
        </div>

        <FloatingActionButton />
        <MobileNav />
        <MobileNav />
      </main>
    </>
  );
}

export default ContentPage;
