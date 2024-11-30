"use client";

import React, { useState, useTransition } from "react";
import { likeGist, unLikeGist } from "./mutation";
import { HeartIcon } from "@/components @/icon";

type LikeGistprops = {
  gistId: string;
  userId: string | undefined;
  likesCount: number | null;
  isUserHasLiked: boolean;
};

export const LikeBtn = ({
  gistId,
  userId,
  likesCount,
  isUserHasLiked,
}: LikeGistprops) => {
  let [isLikePending, startTransition] = useTransition();

  return (
    <button
      disabled={isLikePending}
      onClick={() => {
        startTransition(() =>
          isUserHasLiked ? unLikeGist(gistId, userId) : likeGist(gistId, userId)
        );
      }}
      className="rounded-full flex items-center space-x-2 hover:bg-white/20 transition duration-200 p-1 cursor-pointer"
    >
      {isUserHasLiked ? (
        <HeartIcon className="w-5 h-5 text-[#ea580c]" />
      ) : (
        <HeartIcon className="w-5 h-5" />
      )}
      <span>{likesCount ?? 0}</span>
    </button>
  );
};

export default LikeBtn;
