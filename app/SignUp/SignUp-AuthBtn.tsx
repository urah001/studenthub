import { Button } from "@/components @/app /ui/button";
import Link from "next/link";
import React from "react";

const SignInAuthBtn = () => {
  return (
    <>
      <Link
        href="./SignUp"
        // className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
        className="rounded-md  border-[#ccc] bg-[#020617] text-sm font-medium text-white transition-colors hover:bg-[#0c1130] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:ring-offset-2"
      >
        <Button variant={"outline"} className="primary">
          signin
        </Button>
      </Link>
    </>
  );
};

export default SignInAuthBtn;
