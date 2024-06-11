"use client";

import React, { useTransition } from "react";
import { likeGist } from "./mutation";
import { Heart } from "react-bootstrap-icons";

type LikeGistprops = {
  gistId: string;
};

export const LikeBtn = ({ gistId }: LikeGistprops) => {
  let [isLikePending, startTransition] = useTransition();
  return (
    <button
      disabled={isLikePending}
      onClick={() => {
        startTransition(() => likeGist(gistId));
      }}
      className="rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer"
    >
      <Heart size={20} />
    </button>
  );
};

export default LikeBtn;
