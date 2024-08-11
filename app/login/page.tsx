import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";
import SignInAuthBtn from "../SignUp/SignUp-AuthBtn";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=incorrect username or password ");
    }

    return redirect("/protected");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/login?message=Check email to continue sign in process");
  };

  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#020617] text-white">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover items-center group text-sm hidden lg:block "
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
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1 "
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>
      <header className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8 ml-[30%]">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <GraduationCapIcon className="h-6 w-6 text-white" />
          <span className="text-xl font-bold  text-white">Campus Connect</span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="bg-[#0c1130] rounded-lg shadow-lg w-full max-w-md px-8 py-10 sm:px-12 sm:py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="bg-[#020617] border border-[#ccc] rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:ring-offset-2"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="bg-[#020617] border border-[#ccc] rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:ring-offset-2"
                type="password"
                name="password"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <a
                href="#"
                className="text-sm font-medium text-[#ea580c] hover:text-[#f5b461]"
              >
                Forgot password?
              </a>
            </div>
            <SubmitButton
              formAction={signIn}
              className="primary rounded-md px-4 py-2 text-foreground mb-2"
              pendingText="Signing In..."
            >
              log in
            </SubmitButton>
            {/*
        <SubmitButton
          formAction={signUp}
          className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
          pendingText="Signing Up..."
        >
          Sign Up
        </SubmitButton>*/}
            {searchParams?.message && (
              <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                {searchParams.message}
              </p>
            )}
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-white">
              Don't have an account? <SignInAuthBtn />
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-[#020617] py-6 sm:py-8 lg:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white">
              &copy; 2024 Campus Connect. All rights reserved.
            </p>
            <nav className="flex items-center gap-4">
              <Link
                href="#"
                className="text-sm font-medium text-white hover:text-[#f5b461]"
                prefetch={false}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-white hover:text-[#f5b461]"
                prefetch={false}
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-white hover:text-[#f5b461]"
                prefetch={false}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

function GraduationCapIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}
