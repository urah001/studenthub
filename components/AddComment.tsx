"use client";
import { useRef, useState } from "react";
import { addComment } from "@/app/gist/mutation";
import SubmitGistBtn from "@/app/gistSubmit/submitBtn";
import { handleSubmitComment } from "@/lib/action";
type Props = {
  postId: string|undefined;
};

export default function AddCommentClient({ postId }: Props) {
  const [commentText, setCommentText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const resetForm = useRef<HTMLButtonElement>(null);
  resetForm.current?.click();

  return (
    <form action={handleSubmitComment as any}>
      <div className="flex">
        <input
          value={commentText}
          name="comment"
          onChange={(e) => setCommentText(e.target.value)}
          className="flex-1 bg-[#1e293b] text-white placeholder-gray-400 rounded-full px-4 py-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write a comment..."
        />
        <div>
          <button className="mt-2 primary text-white px-4 py-2 rounded-md disabled:bg-gray-600">
            {isSubmitting ? "Submitting..." : "Gist"}
          </button>
        </div>
      </div>
    </form>
  );
}
