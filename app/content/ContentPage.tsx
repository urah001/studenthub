import React from "react";
import { createClient } from "@/utils/supabase/server";

import {
  Bag,
  BagCheck,
  BagX,
  Chat,
  ChatLeft,
  ChatText,
  Dot,
  Gear,
  Google,
  Hash,
  Heart,
  House,
  Lightbulb,
  Magnet,
  Messenger,
  Save,
  Search,
  SearchHeart,
  Send,
  Share,
  ThreeDots,
} from "react-bootstrap-icons";
import { FaRetweet } from "react-icons/fa";
import MyForm from "@/app/gistSubmit/create-form";
import { Database } from "@/types/supabase";
import { toast } from "sonner";
import dayjs, { Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { revalidateTag } from "next/cache";
dayjs.extend(relativeTime);

async function ContentPage() {
  const supabase = createClient();
  const { data: user } = await supabase.auth.getUser();
  let metadata = user?.user?.user_metadata;
  const { data: gists, error } = await supabase
    .from("gists")
    .select(
      `*,
  profiles
  (
    full_name,
    username
  )
  `
    )
    .returns<
      (Database["public"]["Tables"]["gists"]["Row"] & {
        profiles: Pick<
          Database["public"]["Tables"]["profiles"]["Row"],
          "full_name" | "username"
        >;
      })[]
    >();
  if (error) {
    return error;
  }

  console.log("gist-----", gists![0].profiles, "error====", error);
  console.log(revalidateTag);

  return (
    <>
      <div className="w-full h-full bg-background text-foreground flex justify-center items-center ">
        <div className="max-w-screen-xl w-full h-full flex relative">
          {/* navigation */}

          {/*main content */}
          <main className="ml-[25%] flex w-full max-w-[80%] min-h-screen h-full flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
            <h1 className="text-xl font-bold p-1 mt-2 backdrop-blur sticky top-0">
              Home
            </h1>

            <div className=" px-4 border-b-[0.5px] flex items-stretch py-4 space-x-2 border-t-[0.5px] border-gray-600 relative"></div>

            <div className="rounded-full bg-slate-400 w-10 h-10 flex-none ml-6"></div>
            {/* post space and post */}
            <MyForm />
            <div className=" flex flex-col">
              {gists?.map((gists) => (
                <div
                  key={gists.id}
                  className="border-t-[0.5px] py-2 px-6 border-b-[0.5px] flex space-x-4"
                >
                  <div>
                    <div className="w-10 h-10 bg-slate-200 rounded-full" />
                  </div>
                  {/* post container */}
                  <div className="flex flex-col ">
                    {/*account info username and name*/}
                    <div className="flex items-center w-full justify-between">
                      <div className="flex items-center space-x-1">
                        <div className="font-bold">
                          {/* full_name */}
                          {gists.profiles.full_name ?? " "}{" "}
                        </div>
                        <div className="text-gray-500">
                          @{gists.profiles.username}
                        </div>
                        <div>
                          <Dot />
                        </div>
                        <div className="text-gray-500">
                          {dayjs(gists.created_at).fromNow()}
                        </div>
                      </div>
                      <div className=" rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
                        <ThreeDots />
                      </div>
                    </div>

                    {/* media (comment and image) */}
                    <div className="text-white text-sm">
                      <h1> {gists.text}</h1>
                    </div>

                    {/* <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl"></div> */}
                    {/*activity icon , like, comment , repost, share */}
                    <div className="flex  items-center justify-evenly space-x-28 mt-2 w-full ">
                      {/*love reaction*/}
                      <div className="rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
                        <Heart size={20} />
                      </div>
                      {/*message*/}
                      <div className="rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
                        <ChatText size={20} />
                      </div>
                      {/*repost*/}
                      <div className="rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
                        <FaRetweet size={20} />
                      </div>
                      {/*share or send */}
                      <div className="rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
                        <Send size={20} />
                      </div>
                      {/* saved for future */}
                      <div className="rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
                        <Save size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
          {/*<Explore />*/}
        </div>
      </div>
    </>
  );
}

export default ContentPage;
