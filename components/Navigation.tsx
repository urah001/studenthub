// this page is the foundation of the whole page , the whole pages lie on this as the background
import React from "react";
//import "../globals.css";
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
  {
    title: "schoolhub",
    icon: FaSchool,
  },
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
    title: "test",
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
      <div className="bg-inherit h-full flex justify-center items-center relative right-0  ">
        <div className="max-w-screen-xl text-inherit w-full h-full flex relative">
          {/*left side bar for navigation*/}

          <section className="fixed  z-20 max-w-[20%] flex flex-col h-screen items-stretch space-y-4">
            <div className="flex flex-col h-full space-y-4 mt-8  ">
              {Navigation_Item.map((item) => (
                <Link
                  className="hover:primary transition duration-200 rounded-3xl flex items-center justify-center space-x-4 mt-4 px-2 py-1"
                  href={`/${item.title.toLowerCase()}`}
                  key={item.title}
                >
                  <div className="absolute left-8">
                    <item.icon size={28} />
                  </div>
                  {item.title !== "schoolhub" && <div>{item.title}</div>}
                </Link>
              ))}
              <button className="rounded-full primary text-2xl text-center hover:bg-opacity-90 mt-4 px-6 transition duration-200 ">
                GIST
              </button>
            </div>
            <button className="rounded-full flex items-center space-x-2 bg-transparent m-4 text-2xl text-center hover:bg-opacity-70 transition duration-200 hover:bg-white/20 w-full">
              <AuthButton />
              {/*<div className="flex items-center space-x-2">
                <div className="rounded-full bg-slate-400 w-8 h-8"></div>
                <div className="text-left text-sm">
                  <div className="font-semibold text-sm">user Name</div>
                  <div className="text-xs">@userName</div>
                </div>
              </div>*/}
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
