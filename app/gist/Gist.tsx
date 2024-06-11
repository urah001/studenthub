"use server";

import { Chat, Dot, Heart, Send, ThreeDots } from "react-bootstrap-icons";
import { FaRetweet } from "react-icons/fa";
import dayjs, { Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { getLikeCount, GistType } from "./queries";

import LikeBtn from "./likeGist";

dayjs.extend(relativeTime);

type Gistprops = {
  gists: GistType;
};

export const Gist = ({ gists }: Gistprops) => {
  const getGistLikesCount = getLikeCount(gists.id);
  console.log(getGistLikesCount);

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
          <div className="text-white text-lm">
            <div className="whitespace-pre-wrap break-words ">
              {""}
              {gists.text}
            </div>
          </div>

          {/*activity icon , like, comment , repost, share */}
          <div className="flex items-center justify-start space-x-40 mt-2 w-full ">
            {/*love reaction*/}
            <LikeBtn gistId={gists.id} />
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
