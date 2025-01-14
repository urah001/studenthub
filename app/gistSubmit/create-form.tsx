"use client";
import { handleSubmitGist } from "@/lib/action";
import { useRef, useState } from "react";

import SubmitGistBtn from "./submitBtn";

function MyForm() {
  const resetForm = useRef<HTMLButtonElement>(null);
  resetForm.current?.click();
  return (
    <form
      action={handleSubmitGist as any}
      className="flex flex-col w-full h-full "
    >
      <label htmlFor="GistField" className="sr-only">
        Gist
      </label>
      <textarea
        id="GistField"
        className="w-full h-32 md:h-40 lg:h-48 resize-none placeholder-gray-400 text-white bg-transparent border border-gray-600 focus:border-blue-500 focus:ring-0 p-4 outline-none rounded-xl transition-all duration-300 scrollbar-hide"
        placeholder="What's happening?"
        name="gist"
      />

      <div className="w-full flex justify-end mt-4">
        <div className="w-full max-w-[100px]">
          <SubmitGistBtn />
          <button ref={resetForm} className="invisible" type="reset"></button>
        </div>
      </div>
    </form>
  );
}

export default MyForm;
