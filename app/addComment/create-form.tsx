"use client";
import { handleSubmitComment } from "@/lib/action";
import { useRef } from "react";
import SubmitCommentBtn from "./submitBtn";

function CommentForm() {
  const resetForm = useRef<HTMLButtonElement>(null);
  resetForm.current?.click();

  return (
    <form
      action={handleSubmitComment as any}
      className="flex flex-row items-center w-full space-x-2"
    >
      <label htmlFor="GistField" className="sr-only">
        Gist
      </label>
      <input
        id="GistField"
        className="flex-1 h-10 resize-none placeholder-gray-500 text-white bg-transparent border border-gray-600 focus:border-[#ea580c] focus:ring-0 px-4 outline-none rounded-md transition-all duration-300"
        placeholder="Say what you feel..."
        name="gist"
      />
      <div>
        <SubmitCommentBtn />
        <button ref={resetForm} className="invisible" type="reset"></button>
      </div>
    </form>
  );
}

export default CommentForm;
