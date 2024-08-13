import React from "react";
import {
  Book,
  Chat,
  Gear,
  Hash,
  House,
  Lightbulb,
  Search,
  ThreeDots,
} from "react-bootstrap-icons";
import Link from "next/link";
import AuthButton from "./AuthButton";

const Navigation_Item = [
  /*
  {
    title: "",
    icon: FaSchool,
  },
  */
  {
    title: "home",
    icon: House,
  },
  {
    title: "search",
    icon: Search,
  },
  {
    title: "learn",
    icon: Lightbulb,
  },
  {
    title: "study",
    icon: Book,
  },
  {
    title: "submit",
    icon: Chat,
  },
  {
    title: "explore",
    icon: Hash,
  },
  {
    icon: Gear,
    title: "setting",
  },
];

const Navigation = () => {
  return (
    <>
      <div className="w-[15%] h-full hidden lg:block justify-center items-center relative bg-background overflow-hidden ">
        <div className="max-w-screen-xl text-inherit w-full h-full flex relative">
          {/*left side bar for navigation*/}

          <section className="fixed w-[10px] flex flex-col h-screen items-stretch space-y-4">
            <div className="flex flex-col h-full items-stretch space-y-4 mt-4 ">
              {Navigation_Item.map((item) => (
                <Link
                  className="hover:primary text-lg transition duration-200 rounded-3xl flex items-center justify-start space-x-4 mt-2 px-4 py-2 font-bold w-fit"
                  href={`/${item.title.toLowerCase()}`}
                  key={item.title}
                >
                  <div className="">
                    <item.icon size={18} />
                  </div>
                  {item.title !== "schoolhub" && <div>{item.title}</div>}
                </Link>
              ))}
              {/* <button className="rounded-full primary text-2xl text-center hover:bg-opacity-90 mt-4 px-6 transition duration-200 ">
                GIST
              </button> */}
            </div>
            <button className="rounded-full flex items-center space-x-2 bg-transparent m-4 text-2xl text-center hover:bg-background-70 transition duration-200 hover:bg-background/20 w-full">
              <AuthButton />
              <div className="pl-7 pr-0">
                <ThreeDots />
              </div>
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Navigation;
