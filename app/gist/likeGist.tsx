"use client";

import React, { useState, useTransition } from "react";
import { likeGist } from "./mutation";
import { Heart, HeartFill } from "react-bootstrap-icons";

type LikeGistprops = {
  gistId: string;
  likesCount: number | null;
  isUserHasLiked: boolean;
};

export const LikeBtn = ({
  gistId,
  likesCount,
  isUserHasLiked,
}: LikeGistprops) => {
  let [isLikePending, startTransition] = useTransition();
  //const [currentLikesCount, setCurrentLikesCount] = useState(likesCount ?? 0);
  return (
    <button
      disabled={isLikePending}
      onClick={() => {
        startTransition(() => likeGist(gistId));
      }}
      className="rounded-full flex items-center space-x-2 hover:bg-white/20 transition duration-200 p-1 cursor-pointer"
    >
      {isUserHasLiked ? (
        <HeartFill className="w-5 h-5 text-red-600" />
      ) : (
        <Heart className="w-5 h-5" />
      )}
      <span>{likesCount ?? 0}</span>
    </button>
  );
};

export default LikeBtn;
// "use client";

// import React, { useState, useTransition } from "react";
// import { likeGist } from "./mutation";
// import { Heart, HeartFill } from "react-bootstrap-icons";

// type LikeGistprops = {
//   gistId: string;
//   likesCount: number | null;
//   isUserHasLiked: boolean;
// };

// export const LikeBtn = ({
//   gistId,
//   likesCount,
//   isUserHasLiked,
// }: LikeGistprops) => {
//   const [currentLikesCount, setCurrentLikesCount] = useState(likesCount ?? 0);
//   let [isLikePending, startTransition] = useTransition();

//   const handleLike = async () => {
//     startTransition(async () => {
//       await likeGist(gistId);
//       setCurrentLikesCount(currentLikesCount + 1);
//     });
//   };

//   return (
//     <button
//       disabled={isLikePending}
//       onClick={handleLike}
//       className="rounded-full flex items-center space-x-2 hover:bg-white/20 transition duration-200 p-1 cursor-pointer"
//     >
//       {isUserHasLiked ? (
//         <HeartFill className="w-5 h-5 text-red-600" />
//       ) : (
//         <Heart className="w-5 h-5" />
//       )}
//       <span>{currentLikesCount}</span>
//     </button>
//   );
// };

// export default LikeBtn;
