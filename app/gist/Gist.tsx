"use server";

import { Chat, Dot, Heart, Send, ThreeDots } from "react-bootstrap-icons";
import { FaRetweet } from "react-icons/fa";
import dayjs, { Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { getLikeCount, GistType, isLiked } from "./queries";
import LikeBtn from "./likeGist";
import { createSupabase } from ".";

dayjs.extend(relativeTime);

type Gistprops = {
  gist: GistType;
  currentUserId: string | undefined;
};

export const Gist = async ({ gist, currentUserId }: Gistprops) => {
  const { supabase, supabaseServer } = createSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const getGistLikesCount = await getLikeCount(gist.id);

  const isUserHasLiked = await isLiked({
    gistId: gist.id,
    userId: currentUserId,
  });

  //console.log(isUserHasLiked);
  //console.log("gist id", gist.id, "current user id", user?.id);

  return (
    <div>
      <div
        key={gist.id}
        className="border-t-[0.1px] p-2 py-2 px-6 border-b-[0.1px] flex space-x-4 overflow-hidden"
      >
        <div>
          <div className="w-10 h-10 bg-slate-200 rounded-full" />
        </div>
        {/* post container */}
        <div className="flex flex-col ">
          {/***
           * *
                account info username and name
                *
              ***/}
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center space-x-1">
              <div className="font-bold">{gist.profiles.full_name ?? " "} </div>
              <div className="text-gray-500">@{gist.profiles.username}</div>
              <div>
                <Dot />
              </div>
              <div className="text-gray-500">
                {dayjs(gist.created_at).fromNow()}
              </div>
            </div>
            <div className="rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
              <ThreeDots />
            </div>
          </div>

          {/* media (comment and image) */}
          <div className="text-white text-sm">
            <div className="whitespace-pre-wrap break-words ">
              {""}
              {gist.text}
            </div>
          </div>

          {/*activity icon , like, comment , 
          repost, share */}
          <div className="flex items-center justify-start space-x-40 mt-2 w-full ">
            {/*
            --
            love reaction
            --
            */}
            <LikeBtn
              gistId={gist.id}
              userId={currentUserId}
              likesCount={getGistLikesCount.count}
              isUserHasLiked={isUserHasLiked}
            />
            {/*
            --
            message
            --
            */}
            <div className="rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
              <Chat size={20} />
            </div>
            {/*
            --
            repost
            --
            */}
            <div className="rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
              <FaRetweet size={20} />
            </div>
            {/*
            --
            share or send 
            --
            */}
            <div className="rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
              <Send size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
