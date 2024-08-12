/**
 * v0 by Vercel.
 * @see https://v0.dev/t/okCiOr9INfH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components @/app /ui/avatar";
import { Button } from "@/components @/app /ui/button";
import { HeartIcon, MessageCircleIcon, ShareIcon } from "@/components @/icon";

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#020617] text-white">
      <header className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <GraduationCapIcon className="h-6 w-6 text-white" />
          <span className="text-xl font-bold text-white">Campus Connect</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="#"
            className="rounded-md bg-[#ea580c] px-4 py-2 text-sm font-medium text-[#020617] transition-colors hover:bg-[#f5b461] focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:ring-offset-2"
            prefetch={false}
          >
            Explore
          </Link>
          <Link
            href="#"
            className="rounded-md bg-[#ea580c] px-4 py-2 text-sm font-medium text-[#020617] transition-colors hover:bg-[#f5b461] focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:ring-offset-2"
            prefetch={false}
          >
            Events
          </Link>
          <Link
            href="#"
            className="rounded-md bg-[#ea580c] px-4 py-2 text-sm font-medium text-[#020617] transition-colors hover:bg-[#f5b461] focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:ring-offset-2"
            prefetch={false}
          >
            Groups
          </Link>
          <Link
            href="#"
            className="rounded-md bg-[#ea580c] px-4 py-2 text-sm font-medium text-[#020617] transition-colors hover:bg-[#f5b461] focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:ring-offset-2"
            prefetch={false}
          >
            Marketplace
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="rounded-md bg-[#ea580c] px-4 py-2 text-sm font-medium text-[#020617] transition-colors hover:bg-[#f5b461] focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:ring-offset-2"
              prefetch={false}
            >
              Sign Up
            </Link>
            <Link
              href="#"
              className="rounded-md border border-[#ccc] bg-[#020617] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0c1130] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:ring-offset-2"
              prefetch={false}
            >
              Log In
            </Link>
          </div>
        </nav>
      </header>
      {/* 
      main component
      */}
      <main className="flex-1 bg-[#0c1130] p-4 sm:p-6 lg:p-8">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="bg-[#020617] rounded-lg shadow-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">John Doe</h3>
                <p className="text-sm text-[#ccc]">@johndoe</p>
              </div>
            </div>
            <p className="mb-4">
              Excited to share my latest project with the Campus Connect
              community! Check it out and let me know what you think.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <HeartIcon className="h-5 w-5 text-[#ea580c]" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="h-5 w-5 text-[#ea580c]" />
                  <span className="sr-only">Comment</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <ShareIcon className="h-5 w-5 text-[#ea580c]" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
              <div className="text-sm text-[#ccc]">2h</div>
            </div>
          </div>
          <div className="bg-[#020617] rounded-lg shadow-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">Sarah Anderson</h3>
                <p className="text-sm text-[#ccc]">@sarahanderson</p>
              </div>
            </div>
            <p className="mb-4">
              Just finished my final project for the semester. Feeling proud and
              relieved! #CampusConnect
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <HeartIcon className="h-5 w-5 text-[#ea580c]" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="h-5 w-5 text-[#ea580c]" />
                  <span className="sr-only">Comment</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <ShareIcon className="h-5 w-5 text-[#ea580c]" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
              <div className="text-sm text-[#ccc]">6h</div>
            </div>
          </div>
          <div className="bg-[#020617] rounded-lg shadow-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">Michael Johnson</h3>
                <p className="text-sm text-[#ccc]">@michaeljohnson</p>
              </div>
            </div>
            <p className="mb-4">
              Anyone else struggling with their midterms? Hang in there, we've
              got this! #CampusConnect
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <HeartIcon className="h-5 w-5 text-[#ea580c]" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="h-5 w-5 text-[#ea580c]" />
                  <span className="sr-only">Comment</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <ShareIcon className="h-5 w-5 text-[#ea580c]" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
              <div className="text-sm text-[#ccc]">1d</div>
            </div>
          </div>
          <div className="bg-[#020617] rounded-lg shadow-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                <AvatarFallback>EW</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">Emily Wilson</h3>
                <p className="text-sm text-[#ccc]">@emilywilson</p>
              </div>
            </div>
            <p className="mb-4">
              Just signed up for the campus hackathon, so excited to collaborate
              with other students! #CampusConnect
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <HeartIcon className="h-5 w-5 text-[#ea580c]" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="h-5 w-5 text-[#ea580c]" />
                  <span className="sr-only">Comment</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <ShareIcon className="h-5 w-5 text-[#ea580c]" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
              <div className="text-sm text-[#ccc]">2d</div>
            </div>
          </div>
          <div className="bg-[#020617] rounded-lg shadow-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                <AvatarFallback>JL</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">Jessica Lee</h3>
                <p className="text-sm text-[#ccc]">@jessicalee</p>
              </div>
            </div>
            <p className="mb-4">
              Excited to attend the campus career fair next week! Anyone have
              tips for making the most of it? #CampusConnect
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <HeartIcon className="h-5 w-5 text-[#ea580c]" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="h-5 w-5 text-[#ea580c]" />
                  <span className="sr-only">Comment</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <ShareIcon className="h-5 w-5 text-[#ea580c]" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
              <div className="text-sm text-[#ccc]">3d</div>
            </div>
          </div>
          <div className="bg-[#020617] rounded-lg shadow-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                <AvatarFallback>TM</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">Tom Martinez</h3>
                <p className="text-sm text-[#ccc]">@tommartinez</p>
              </div>
            </div>
            <p className="mb-4">
              Just got an internship offer, so excited to start this summer!
              #CampusConnect
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <HeartIcon className="h-5 w-5 text-[#ea580c]" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="h-5 w-5 text-[#ea580c]" />
                  <span className="sr-only">Comment</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <ShareIcon className="h-5 w-5 text-[#ea580c]" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
              <div className="text-sm text-[#ccc]">4d</div>
            </div>
          </div>
          <div className="bg-[#020617] rounded-lg shadow-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                <AvatarFallback>KS</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">Karen Sato</h3>
                <p className="text-sm text-[#ccc]">@karensato</p>
              </div>
            </div>
            <p className="mb-4">
              Anyone else excited for the upcoming campus concert? Can't wait to
              see my favorite band perform! #CampusConnect
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <HeartIcon className="h-5 w-5 text-[#ea580c]" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="h-5 w-5 text-[#ea580c]" />
                  <span className="sr-only">Comment</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <ShareIcon className="h-5 w-5 text-[#ea580c]" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
              <div className="text-sm text-[#ccc]">1w</div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-[#020617] py-6 sm:py-8 lg:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row" />
        </div>
      </footer>
    </div>
  );
}
