import React from "react";
import { IoIosSearch } from "react-icons/io";

const Explore = () => {
  return (
    <div className="w-[30%] h-full flex justify-center text-foreground items-center relative bg-inherit">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <section className="fixed flex flex-col space-x-4 w-[275px]">
          <div className="relative h-full w-full pl-2 group">
            <label
              htmlFor="searchBox"
              className="absolute top-0 h-full flex items-center justify-center"
            >
              <IoIosSearch className="w-5 h-5 text-foreground peer-focus:text-primary" />
            </label>
            <input
              id="searchBox"
              type="text"
              placeholder="search"
              className=" w-full h-full focus:border-primary  focus:border outline-none bg-background-900/90 border-none  rounded-xl py-2 px-8"
            />
          </div>
          <div className="flex flex-col bg-background-900/90 rounded-xl mt-6 ">
            <h3 className="font-bold text-2xl my-2">Trending Topic</h3>
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="hover:bg-background rounded-xl p-2 transition duration-100"
                >
                  <div className="font-bond text-lg">#trends {i + 1}</div>
                  <div className="text-xs text-neutral-400 font-bold">30k</div>
                </div>
              ))}
            </div>
          </div>
          <div></div>
        </section>
      </div>
    </div>
  );
};

export default Explore;
