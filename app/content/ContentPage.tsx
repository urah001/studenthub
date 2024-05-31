// if need b it was timeStampz

{
  /*



  remeber tweet_hashtag == gist_hashtag
  remeber tweet == gist


  */
}
import React from "react";
import { createClient } from "@/utils/supabase/server";
//import "../globals.css";
import {
  Bag,
  BagCheck,
  BagX,
  Chat,
  ChatLeft,
  Dot,
  Gear,
  Google,
  Hash,
  Heart,
  House,
  Lightbulb,
  Magnet,
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
    return toast(error.message);
  }

  // console.log("gist-----", gists![0].profiles, "error====", error);
  // console.log("metadata===", metadata);
  return (
    <>
      {/* navigation */}

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
          {gists?.map((gists) => (
            <div
              key={gists.id}
              className="border-t-[0.5px] p-2 py-2 px-6 border-b-[0.5px] flex space-x-4 overflow-hidden"
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
                  <div className="rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
                    <ThreeDots />
                  </div>
                </div>

                {/* media (comment and image) */}
                <div className="text-white text-sm">
                  <h1> {gists.text}</h1>
                </div>

                {/* <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl"></div> */}
                {/*activity icon , like, comment , repost, share */}
                <div className="flex items-center justify-start space-x-40 mt-2 w-full ">
                  {/*love reaction*/}
                  <div className="rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
                    <Heart size={20} />
                  </div>
                  {/*message*/}
                  <div className="rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
                    <Chat size={20} />
                  </div>
                  {/*repost*/}
                  <div className="rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
                    <FaRetweet size={20} />
                  </div>
                  {/*share or send */}
                  <div className="rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
                    <Send size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      {/*<Explore />*/}
    </>
  );
}

export default ContentPage;
