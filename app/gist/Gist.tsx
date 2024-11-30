"use server";
import { Dot, Send, ThreeDots } from "react-bootstrap-icons";
import dayjs, { Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { getLikeCount, GistType, isLiked } from "./queries";
import LikeBtn from "./likeBtn";
import { MessageCircleIcon, RetweetIcon } from "@/components @/icon";
import Link from "next/link";
import { gist, Profile, profiles, profilesRelations } from "@/lib/db/schema";

dayjs.extend(relativeTime);

type Gistprops = {
  //gist: GistType;
  gist: {
    userProfile: Profile;
    gistDetails: gist;
  };
  currentUserId: string | undefined;
};

export const Gist = async ({ gist, currentUserId }: Gistprops) => {
  const getGistLikesCount = await getLikeCount(gist.gistDetails.id);
 // console.log("gist", gist);
  console.log(getGistLikesCount.count);
  const isUserHasLiked = await isLiked({
    gistId: gist.gistDetails.id,
    userId: currentUserId,
  });

  {
    /* 
    use chess algorithm for the post sorting
    for example  the best move after certain move is played
    */
  }
  //console.log("userid-gist", currentUserId, "gistid-gist", gist.id);
  return (
    <div>
      <div
        key={gist.gistDetails.id}
        className="border-t-[0.1px] py-2 px-6 border-b-[0.1px] flex space-x-4 overflow-hidden bg-[#020617] rounded-lg shadow-lg p-4 mt-4 border-none"
      >
        <div>
          <div className="w-10 h-10 bg-slate-200 rounded-full" />
        </div>
        {/* post container */}
        <div className="flex flex-col w-full">
          {/***
         * *
         account info username and name
         *
         ***/}
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center space-x-1">
              {/* remeber to fix this  */}
              <div className="font-bold">{gist.userProfile.fullName}</div>
              {/* user name */}
              <div className="text-gray-500">@{gist.userProfile.username}</div>
              {/* dot after name */}
              <div>
                <Dot />
              </div>
              <div className="text-gray-500">
                {dayjs(gist.userProfile.createdAt).fromNow()}
              </div>
            </div>
            <div className="rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
              <ThreeDots className="w-4 h-4 md:w-6 md:h-6" />
            </div>
          </div>

          {/* media (comment and image) */}
          <div className="text-white text-sm">
            <Link href={`/post/${gist.gistDetails.id}`}>
              <div className="whitespace-pre-wrap break-words">{gist.gistDetails.text}</div>
            </Link>
          </div>

          {/* icons: like, comment, repost, share */}
          <div className="flex items-center justify-between mt-2 w-full">
            {/*
          --
          love reaction
          --
          */}
            <LikeBtn
              gistId={gist.gistDetails.id}
              userId={currentUserId}
              likesCount={getGistLikesCount.count}
              isUserHasLiked={isUserHasLiked}
            />
            {/*
          --
          comment 
          --
          */}
            <div className="rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
              <MessageCircleIcon size={20} className="w-4 h-4 md:w-6 md:h-6" />
            </div>
            {/*
          --
          repost
          --
          */}
            <div className="rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
              <RetweetIcon size={20} className="w-4 h-4 md:w-6 md:h-6" />
            </div>
            {/*
          --
          share or send
          --
          */}
            <div className="rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
              <Send size={20} className="w-4 h-4 md:w-6 md:h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
