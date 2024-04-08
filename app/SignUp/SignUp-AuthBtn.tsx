import { Button } from "@/components @/app /ui/button";
import Link from "next/link";
import React from "react";

const SignInAuthBtn = () => {
  return (
    <>
      <Link
        href="./SignUp"
        className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      >
        <Button variant={"outline"} className="primary">
          signin
        </Button>
      </Link>
    </>
  );
};

export default SignInAuthBtn;
