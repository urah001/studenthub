"use client";

import { useState } from "react";
import { addComment } from "@/app/gist/mutation";

type Props = {
  postId: string;
};

export default function AddCommentClient({ postId }: Props) {
  const [commentText, setCommentText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!commentText.trim()) return;

    setIsSubmitting(true);

    try {
      const response = await addComment(postId, commentText);
      if (response.error) {
        alert("Failed to add comment!");
      } else {
        alert("Comment added successfully!");
        setCommentText(""); // Clear input field
        // Optionally, trigger a re-fetch or update comments dynamically
      }
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <input
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        className="flex-1 bg-[#1e293b] text-white placeholder-gray-400 rounded-full px-4 py-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write a comment..."
       
      />
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="mt-2 primary text-white px-4 py-2 rounded-md disabled:bg-gray-600"
      >
        {isSubmitting ? "Submitting..." : "Gist"}
      </button>
    </div>
  );
}
