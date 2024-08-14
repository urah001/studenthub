"use client";
import { Book, House, Lightbulb, Search } from "react-bootstrap-icons";
import React, { useState } from "react";
import "@/app/globals.css";

const Navigation_Item = [
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

  /*{
      title: "explore",
      icon: Hash,
    },
    {
      icon: Gear,
      title: "setting",
    },*/
];
const MobileNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#0c1130] p-2 flex flex-row justify-between items-center w-[90%] sm:hidden z-50 rounded-full shadow-lg">
      {Navigation_Item.map((item, index) => (
        <div
          key={item.title}
          className="cursor-pointer flex-1 text-center"
          onClick={() => setActiveIndex(index)}
        >
          <div
            className={`inline-block p-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "border-2 border-[#ea580c] scale-110"
                : "border-transparent"
            }`}
          >
            <item.icon
              size={24}
              className={`mx-auto transition-all duration-300 ${
                activeIndex === index ? "text-[#ea580c]" : "text-white"
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default MobileNav;
/*return (
    <>
      
      <div className="fixed bottom-0 left-0 right-0 bg-[#0c1130] p-2 flex flex-row justify-between items-center w-full sm:hidden z-50">
        {Navigation_Item.map((item) => (
          <div
            key={item.title}
            className="cursor-pointer flex-1 text-center rounded-sm"
          >
            <item.icon size={24} className="mx-auto hover:text-[#ea580c] " />
          </div>
        ))}
      </div>
    </>
  );
};

export default MobileNav;*/
