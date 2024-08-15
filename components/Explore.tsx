import React from "react";
import { IoIosSearch } from "react-icons/io";

const Explore = () => {
  return (
    /*  new style  */
    <div className="hidden lg:flex w-[20%] h-full justify-center text-foreground items-center relative bg-inherit">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <section className="fixed flex flex-col space-x-4 w-[275px] lg:w-[275px] xl:w-[300px] mt-4">
          <div className="relative h-full w-[80%] pl-2 group">
            <label
              htmlFor="searchBox"
              className="absolute top-0 left-0 h-full flex items-center pl-3 pointer-events-none"
            >
              <IoIosSearch className="w-5 h-5 text-neutral-500 group-focus-within:text-primary transition duration-200" />
            </label>
            <input
              id="searchBox"
              type="text"
              placeholder="Search"
              className="w-full h-10 pl-10 pr-4 focus:ring-2 focus:ring-primary focus:outline-none rounded-md border border-background text-white placeholder-neutral-500 transition duration-200 bg-inherit"
            />
          </div>
          <div className="flex flex-col bg-background-900/90 rounded-xl mt-6 p-4">
            <h3 className="font-bold text-2xl my-2">Trending Topics</h3>
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="hover:bg-background-800 rounded-xl p-2 transition duration-100 cursor-pointer"
                >
                  <div className="font-bold text-lg text-white">
                    #trends {i + 1}
                  </div>
                  <div className="text-xs text-neutral-400 font-bold">30k</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Explore;
