"use client";
import React from "react";
import { toast } from "sonner";

const sonnerMsg = () => {
  toast.error("authentication failed check email or password", {
    className: "bg-background text-foreground text-lg",
    // description: "testing this description",
    duration: 3000,
  });
};
export const FailedAuth = () => {
  sonnerMsg();
  return null;
};

// export const SuccessAuth = () => {
//   return <div>sonnerCom</div>;
// };
