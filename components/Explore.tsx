import React from "react";
import { IoIosSearch } from "react-icons/io";

const Explore = () => {
  return (
    <div className="hidden lg:flex w-[30%] h-full justify-center text-foreground items-center relative bg-inherit">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <section className="fixed flex flex-col space-x-4 w-[275px] lg:w-[275px] xl:w-[300px]">
          <div className="relative h-full w-full pl-2 group">
            <label
              htmlFor="searchBox"
              className="absolute top-0 left-0 h-full flex items-center pl-3 pointer-events-none"
            >
              <IoIosSearch className="w-5 h-5 text-foreground" />
            </label>
            <input
              id="searchBox"
              type="text"
              placeholder="search"
              className="w-full h-full pl-10 pr-4 focus:border-primary focus:border outline-none rounded-md bg-inherit border mb-6"
            />
          </div>
          <div className="flex flex-col bg-background-900/90 rounded-xl mt-6">
            <h3 className="font-bold text-2xl my-2">Trending Topic</h3>
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="hover:bg-background rounded-xl p-2 transition duration-100"
                >
                  <div className="font-bold text-lg">#trends {i + 1}</div>
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
