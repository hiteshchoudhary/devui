import React from "react";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const PostListing = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <header className="fixed top-0 z-10 mx-auto flex w-full max-w-[85rem] items-center justify-between border-b-[1px] border-b-slate-300 bg-[#121212] p-4 text-white lg:px-10">
        <h1 className="text-xl font-extrabold md:text-3xl">All Posts</h1>
        <div className="flex w-max flex-shrink-0 items-center justify-end gap-6">
          <span className="relative">
            <MagnifyingGlassIcon className="h-8 w-8" />
          </span>
          <span className="relative">
            <BellIcon className="h-8 w-8 text-white" />
            <span className="absolute right-1 top-0 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-green-500 p-1 text-white"></span>
          </span>
          <button className="hidden w-max items-center justify-center border-[1px] border-white p-3 text-center font-bold text-white md:inline-flex">
            <PlusCircleIcon className="mr-2 h-5 w-5" /> Create new
          </button>
        </div>
      </header>
    </div>
  );
};

export default PostListing;
