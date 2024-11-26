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
    <div className="mt-4">
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        className="w-full bg-[#0b1121] text-white p-2 rounded-md"
        placeholder="Write a comment..."
        rows={4}
      ></textarea>
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md disabled:bg-gray-600"
      >
        {isSubmitting ? "Submitting..." : "Post Comment"}
      </button>
    </div>
  );
}
