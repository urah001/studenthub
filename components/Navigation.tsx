/* 

this page is the foundation of the whole page , the whole pages lie on this as the background
//remeber box sizing:border-box; and margin :0;
main => update-page and protected-page => creating-navigation => creating-main-middle-page
add border left on the nav
*/

import React from "react";

import {
  Bag,
  BagCheck,
  BagX,
  Chat,
  Gear,
  Google,
  Hash,
  House,
  Lightbulb,
  Magnet,
  Search,
  SearchHeart,
  ThreeDots,
} from "react-bootstrap-icons";
import { FaBell, FaSchool } from "react-icons/fa";
import Link from "next/link";
import AuthButton from "./AuthButton";

//import Main from "../Main/page";
//import Explore from "../explore/page";
//import "./Navigation.css";
//import "bootstrap/dist/css/bootstrap.css";

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
    title: "submit",
    icon: Chat,
  },
  {
    title: "setting",
    icon: Gear,
  },
  {
    title: "explore",
    icon: Hash,
  },
];

const Navigation = () => {
  return (
    <>
      <div className="w-[20%] h-full flex justify-center items-center relative bg-background overflow-hidden">
        <div className="max-w-screen-xl text-inherit w-full h-full flex relative">
          {/*left side bar for navigation*/}

          <section className="fixed w-[10px] flex flex-col h-screen items-stretch space-y-4">
            <div className="flex flex-col h-full items-stretch space-y-4 mt-4 ">
              {Navigation_Item.map((item) => (
                <Link
                  className="hover:primary text-lg transition duration-200 rounded-3xl flex items-center justify-start space-x-4 mt-4 px-6 py-2 font-bold w-fit"
                  href={`/${item.title.toLowerCase()}`}
                  key={item.title}
                >
                  <div className="">
                    <item.icon size={20} />
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
