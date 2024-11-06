import Link from "next/link";
import SignInAuthBtn from "./SignUp/SignUp-AuthBtn";
import AuthButton from "@/components/AuthButton";
import AboutPage from "@/components/AboutSchhub";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export default async function Index() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const canInitSupabaseClient = () => {
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();
  if (isSupabaseConnected === false) {
    toast.success("server error", {
      className: "bg-background text-foreground text-lg",
      // description: "testing this description",
      duration: 3000,
    });
  }
  return user ? (
    redirect("/protected")
  ) : (
    <div className="flex min-h-[100dvh] flex-col bg-[#020617] text-white">
      <header className="flex items-center sticky top-0 justify-between px-4 py-3 sm:px-6 lg:px-8 backdrop-blur">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <GraduationCapIcon className="h-6 w-6 text-white" />
          <span className="text-xl font-bold text-white ">student hub</span>
        </Link>
        <div className="flex items-center gap-4">
          <SignInAuthBtn />
          <AuthButton />
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-r from-[#ea580c] to-[#f5b461] py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-3xl font-bold tracking-tight text-[#020617] sm:text-4xl lg:text-5xl">
                  Connect, Discover, and Thrive
                </h1>
                <p className="mt-4 text-lg text-[#020617]">
                  Campus Connect is the ultimate student social network, helping
                  you build meaningful connections, discover new opportunities,
                  and unlock your full potential. <AboutPage />
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <Link
                    href="/login"
                    className="inline-flex items-center rounded-md bg-[#f5b461] px-4 py-2 text-sm font-medium text-[#020617] transition-colors hover:bg-[#ea580c] focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:ring-offset-2"
                    prefetch={false}
                  >
                    Join Now
                  </Link>
                  <Link
                    href="#"
                    className="text-sm font-medium text-[#020617] hover:underline"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/connect.svg"
                  width={500}
                  height={500}
                  alt="student hub"
                  className="rounded-xl object-cover"
                  style={{ aspectRatio: "500/500", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="flex justify-center">
                <img
                  src="/build.svg"
                  width={500}
                  height={500}
                  alt="Campus Community"
                  className="rounded-xl object-cover"
                  style={{ aspectRatio: "500/500", objectFit: "cover" }}
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Build Your Campus Community
                </h2>
                <p className="mt-4 text-lg text-white">
                  Connect with like-minded students, join clubs and
                  organizations, and discover new opportunities to get involved
                  on campus.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <Link
                    href="/login"
                    className="inline-flex items-center rounded-md bg-[#ea580c] px-4 py-2 text-sm font-medium text-[#020617] transition-colors hover:bg-[#f5b461] focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:ring-offset-2"
                    prefetch={false}
                  >
                    Explore Campus
                  </Link>
                  <Link
                    href="#"
                    className="text-sm font-medium text-white hover:underline"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#020617] py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col items-start justify-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Unlock Your Potential
                </h2>
                <p className="mt-4 text-lg text-white">
                  Discover new interests, find mentors, and access resources to
                  help you grow and succeed in your academic and personal life.{" "}
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <Link
                    href="/login"
                    className="inline-flex items-center rounded-md bg-[#ea580c] px-4 py-2 text-sm font-medium text-[#020617] transition-colors hover:bg-[#f5b461] focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:ring-offset-2"
                    prefetch={false}
                  >
                    Join Now
                  </Link>
                  <Link
                    href="#"
                    className="text-sm font-medium text-white hover:underline"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/unlock.svg"
                  width={500}
                  height={500}
                  alt="Unlock Your Potential"
                  className="rounded-xl object-cover"
                  style={{ aspectRatio: "500/500", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#020617] py-6 sm:py-8 lg:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white">
              &copy; 2024 stduent hub. All rights reserved.
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
