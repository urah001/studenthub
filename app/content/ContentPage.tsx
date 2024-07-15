"use server";
import React from "react";
import MyForm from "@/app/gistSubmit/create-form";
import dayjs, { Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Gist } from "../gist/Gist";
import { getGist } from "../gist/queries";
import { supabase, supabaseServer } from "../gist";
dayjs.extend(relativeTime);

async function ContentPage() {
  const res = await getGist();
  const {
    data: { user },
  } = await supabase.auth.getUser();
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
        <div className=" flex flex-col w-full">
          {res?.error && <div>review your network and try again </div>}

          {res?.data &&
            res.data.map((gist, i) => (
              <Gist key={gist.id} gist={gist} currentUserId={user!.id} />
            ))}
        </div>
      </main>
    </>
  );
}

export default ContentPage;
