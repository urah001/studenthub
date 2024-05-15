{
  /*



  remeber tweet_hashtag == gist_hashtag
  remeber tweet == gist


  */
}

import React from "react";
import { createClient } from "@/utils/supabase/server";
//import "../globals.css";
import {
  Bag,
  BagCheck,
  BagX,
  Chat,
  ChatLeft,
  Dot,
  Gear,
  Google,
  Hash,
  Heart,
  House,
  Lightbulb,
  Magnet,
  Search,
  SearchHeart,
  Send,
  Share,
  ThreeDots,
} from "react-bootstrap-icons";
import { FaRetweet } from "react-icons/fa";
// import Link from "next/link";
// import { GetUser } from "@/app/serverComponent/getUser";
// import GetPosts from "@/app/serverComponent/getPost";
//   import Navigation from "../Navigation/page";
//   import Explore from "../explore/page";

async function ContentPage() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  // const formattedData = notes.map(
  //   (item) => `ID: ${item.id}, Title: ${item.title}`
  // );

  return (
    <>
      <div className="w-full h-full bg-background text-foreground flex justify-center items-center w-">
        <div className="max-w-screen-xl w-full h-full flex">
          {/* navigation */}

          {/*main content */}
          <main className="ml-[25%] flex w-full max-w-[80%] min-h-screen h-full flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
            <h1 className="text-xl font-bold p-1 mt-2 backdrop-blur sticky top-0">
              Home
            </h1>

            <div className=" px-4 border-b-[0.5px] flex items-stretch py-4 space-x-2 border-t-[0.5px] border-gray-600 relative"></div>

            <div className="rounded-full bg-slate-400 w-10 h-10 flex-none ml-6"></div>
            <div className="flex flex-col w-full h-full">
              <input
                type="text"
                className="w-full text-2xl h-full bg-transparent placeholder-gray-600 border-gray-600 p-4  outline-none border-none"
                placeholder="say what you feel..."
              />{" "}
              <div className="w-full justify-between items-center flex ">
                <div></div>
                {/* the button at the top to let you post */}
                <div className="w-full max-w-[100px]">
                  <button className="rounded-full font-bold  text-lg text-center hover:bg-opacity-90 px-4 py-2 w-full transition duration-200 primary">
                    Gist
                  </button>
                </div>
              </div>
            </div>

            <div className=" flex flex-col">
              {notes!.map((item) => (
                <div
                  key={item}
                  className="border-t-[0.5px] py-2 px-6 border-b-[0.5px] flex space-x-4"
                >
                  <div>
                    <div className="w-10 h-10 bg-slate-200 rounded-full" />
                  </div>
                  {/* post container */}
                  <div className="flex flex-col ">
                    {/*account info username and name*/}
                    <div className="flex items-center w-full justify-between">
                      <div className="flex items-center space-x-1">
                        {/* <div>{user?.email}</div> */}
                        <div className="text-gray-500">
                          {/* @{metaData.username} */}
                          {/* <GetUser /> */}
                          <p>ID: {item.id}</p>
                        </div>
                        <div>
                          <Dot />
                        </div>
                        <div className="text-gray-500">1 hr ago</div>
                      </div>
                      <div className="  rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
                        <ThreeDots />
                      </div>
                    </div>

                    {/* media (comment and image) */}
                    <div className="text-white text-sm">
                      {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Molestiae quae facilis dolorum? Pariatur optio, provident
                      ducimus est aliquam dolore nesciunt quaerat beatae dolorem
                      vero? Excepturi ipsa voluptatum enim ipsum fuga! Lorem
                      ipsum, dolor sit amet consectetur adipisicing elit. this
                      is a demo text checking to see if it will over flow the
                      box width or height */}

                      <h1>Title: {item.title}</h1>
                    </div>

                    {/* <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl"></div> */}
                    {/*activity icon , like, comment , repost, share */}
                    <div className="flex items-center justify-start space-x-40 mt-2 w-full ">
                      {/*love reaction*/}
                      <div className="rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
                        <Heart size={20} />
                      </div>
                      {/*message*/}
                      <div className="rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
                        <ChatLeft size={20} />
                      </div>
                      {/*repost*/}
                      <div className="rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
                        <FaRetweet size={20} />
                      </div>
                      {/*share or send */}
                      <div className="rounded-full hover:bg-white/20 transition duration-200 p-2 cursor-pointer">
                        <Send size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
          {/*<Explore />*/}
        </div>
      </div>
    </>
  );
}

export default ContentPage;
