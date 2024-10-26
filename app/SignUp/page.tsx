import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "../login/submit-button";
import { profile } from "console";
import { GraduationCapIcon } from "../login/page";
import AuthButton from "@/components/AuthButton";

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
    const full_name = formData.get("full_name") as string;

    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
        data: {
          username,
          full_name,
        },
      },
    });
    if (!error) {
      await supabase.from("profiles").select().eq("username", username.trim());
    }

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/login?message=Check email to continue sign in process");
  };

  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#020617] text-white">
      <header className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <GraduationCapIcon className="h-6 w-6 text-white" />
          <span className="text-lg font-bold text-white"> studenthub</span>
        </div>
      </header>

      <main className="flex-1 bg-[#0c1130] p-4 sm:p-6 lg:p-8">
        <div className="flex justify-center">
          <div className="w-full max-w-md rounded-lg bg-[#020617] p-6 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold">Sign Up</h2>
            <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2">
              <div className="mb-4">
                {/* name */}
                <label
                  className="mb-2 block text-sm font-medium text-[#ccc]"
                  htmlFor="full_name"
                >
                  name
                </label>
                <input
                  className="block w-full rounded-md border border-[#ccc] bg-[#0c1130] px-3 py-2 text-white focus:border-[#ea580c] focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:ring-offset-2"
                  type="text"
                  name="full_name"
                  placeholder="john"
                  required
                />
              </div>

              {/* username */}
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-medium text-[#ccc]"
                  htmlFor="username"
                >
                  username
                </label>
                <input
                  className="block w-full rounded-md border border-[#ccc] bg-[#0c1130] px-3 py-2 text-white focus:border-[#ea580c] focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:ring-offset-2"
                  type="text"
                  name="username"
                  placeholder="@name"
                  required
                />
              </div>

              {/*       email   */}
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-medium text-[#ccc]"
                  htmlFor="email"
                >
                  email
                </label>
                <input
                  className="block w-full rounded-md border border-[#ccc] bg-[#0c1130] px-3 py-2 text-white focus:border-[#ea580c] focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:ring-offset-2"
                  type="text"
                  name="email"
                  placeholder="you@exampl.com"
                  required
                />
              </div>

              {/* 
        
        password 
        
        */}
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-medium text-[#ccc]"
                  htmlFor="password"
                >
                  password
                </label>
                <input
                  className="block w-full rounded-md border border-[#ccc] bg-[#0c1130] px-3 py-2 text-white focus:border-[#ea580c] focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:ring-offset-2"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  required
                />
              </div>

              <SubmitButton
                formAction={signUp}
                className="w-full rounded-md bg-[#ea580c] px-4 py-2 text-sm font-medium text-[#020617] transition-colors hover:bg-[#f5b461] focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:ring-offset-2"
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
            <div className="mt-4 text-center text-[#ccc]">
              Already have an account? <AuthButton />
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-[#020617] py-6 sm:py-8 lg:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <GraduationCapIcon className="h-6 w-6 text-white" />
              <span className="text-lg font-bold text-white">studenthub</span>
            </div>
            <nav className="flex items-center gap-4">
              <Link
                href="#"
                className="text-sm font-medium text-[#ccc] hover:text-white"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-[#ccc] hover:text-white"
                prefetch={false}
              >
                Contact
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-[#ccc] hover:text-white"
                prefetch={false}
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-[#ccc] hover:text-white"
                prefetch={false}
              >
                Terms
              </Link>
            </nav>
            <p className="text-sm text-[#ccc]">
              &copy; 2024 studenthub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
