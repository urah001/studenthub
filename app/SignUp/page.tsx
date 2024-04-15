import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "../login/submit-button";
import { profile } from "console";

//import { useState } from "react";

export default function SignUpPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  /*const signIn = async (formData: FormData) => {
    "use server";
    
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    /* const name = formData.get("email") as string;
    const username = formData.get("email") as string;
    const supabase = createClient();
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }
    
    return redirect("/protected");
  };*/

  const signUp = async (formData: FormData) => {
    "use server";
    //  const [username, setUsername] = useState("");
    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const username = formData.get("username") as string;

    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
        data: {
          username,
        },
      },
    });
    if (!error) {
      await supabase.from("profiles").select().eq("usernam", username.trim());
    }
    // await supabase.from("profile").select().eq("username", username.trim());
    //if (!error) {
    //update({ data: { username } });
    //}

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    console.log("hello worlkd");
    return redirect("/login?message=Check email to continue sign in process");
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 bg-background">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2">
        {/*
        name
        <label className="text-md" htmlFor="username">
          username
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="text"
          name="username"
          placeholder="jdoe.."
        />
        */}

        {/* 

username

*/}
        <label className="text-md" htmlFor="username">
          username
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="text"
          name="username"
          placeholder="@name"
          required
        />
        {/* 
        
       email
        
        */}
        <label className="text-md" htmlFor="email">
          email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="text"
          name="email"
          placeholder="you@exampl.com"
          required
        />

        {/* 
        
        password 
        
        */}

        <label className="text-md" htmlFor="password">
          password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        {/*<SubmitButton
          formAction={signIn}
          className="primary rounded-md px-4 py-2 text-foreground mb-2"
          pendingText="Signing In..."
        >
          Sign In
  </SubmitButton>*/}
        <SubmitButton
          formAction={signUp}
          className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
          pendingText="Signing Up..."
        >
          Sign Up
        </SubmitButton>
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
}
