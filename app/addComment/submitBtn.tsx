"use client";
import React from "react";
import { toast } from "sonner";
import { SubmitButton } from "../login/submit-button";

const sonnerMsg = () => {
  toast.success("gist sent successfully", {
    className: "bg-background text-foreground text-lg",
    // description: "testing this description",
    duration: 3000,
  });
};

const SubmitCommentBtn = () => {
  return (
    <SubmitButton
      className="rounded-full font-bold  text-lg text-center hover:bg-opacity-90 px-4 py-2 w-full transition duration-200 primary"
      type="submit"
      onClick={sonnerMsg}
    >
      Gist
    </SubmitButton>
  );
};

export default SubmitCommentBtn;
