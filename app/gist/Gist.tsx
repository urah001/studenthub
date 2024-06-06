import React from "react";
import { createClient } from "@/utils/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";
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
import { toast } from "sonner";
import dayjs, { Dayjs } from "dayjs";
import { Database } from "@/types/supabase";
import relativeTime from "dayjs/plugin/relativeTime";
import { GistType } from "./getGist";
dayjs.extend(relativeTime);

type Gistprops = {
  gists: GistType;
};

//3.22

export const Gist = ({ gists }: Gistprops) => {
  return (
    <div>
      <div
        key={gists.id}
        className="border-t-[0.5px] p-2 py-2 px-6 border-b-[0.5px] flex space-x-4 overflow-hidden"
      >
        <div>
          <div className="w-10 h-10 bg-slate-200 rounded-full" />
        </div>
        {/* post container */}
        <div className="flex flex-col ">
          {/****
                account info username and name
              ***/}
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center space-x-1">
              <div className="font-bold">
                {gists.profiles.full_name ?? " "}{" "}
              </div>
              <div className="text-gray-500">@{gists.profiles.username}</div>
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
    </div>
  );
};
