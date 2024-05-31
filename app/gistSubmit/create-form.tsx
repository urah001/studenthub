"use client";
import { handleSubmitGist } from "@/app/lib/action";
import { useRef, useState } from "react";
import { createClient } from "@/utils/supabase/server";
import { toast } from "sonner";
import SubmitGistBtn from "./submitBtn";

function MyForm() {
  const resetForm = useRef<HTMLButtonElement>(null);
  resetForm.current?.click();
  return (
    <form action={handleSubmitGist as any}>
      <div className="flex flex-col w-full h-full">
        <label htmlFor="GistField"></label>
        <input
          type="text"
          className="w-full text-2xl h-full bg-transparent placeholder-gray-600 border-gray-600 p-4  outline-none border-none"
          placeholder="say what you feel..."
          name="gist"
        />{" "}
        <div className="w-full justify-between items-center flex ">
          <div></div>
          {/* the button at the top to let you post */}
          <div className=" max-w-[100px]">
            <SubmitGistBtn />
            <button ref={resetForm} className="invisible" type="reset"></button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default MyForm;
