import React from "react";
import {
  BellIcon,
  FaceSmileIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { PaperAirplaneIcon, PlusCircleIcon } from "@heroicons/react/24/solid";

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
      <div className="mt-[65px] grid grid-cols-12 gap-4 px-4 py-8 md:mt-[83px] lg:px-10">
        {/* Profile */}
        <aside className="hidden text-white md:col-span-4 md:block lg:col-span-3">
          <div className="border p-4">
            <img
              className="mb-3 flex aspect-square h-16 w-16 flex-shrink-0 rounded-full object-cover"
              src="https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
            />
            <h2>Aurora Starlight</h2>
            <p className="text-sm">
              <a
                href="mailto:starryaurora@gmail.com"
                className="hover:text-[#ae7aff]"
              >
                starryaurora@gmail.com
              </a>
            </p>
            <hr className="my-2 h-[1px] w-full" />
            <p className="mb-4">
              Night owl | Moon enthusiast | Wanderlust 🌕🌙🌎
            </p>
            <button className="inline-flex w-max items-center bg-[#ae7aff] px-4 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
              View Profile
            </button>
          </div>
        </aside>
        <section className="col-span-12 md:col-span-8 lg:col-span-6">
          {/* Create Post Form */}
          <div className="mb-6 flex w-full items-center justify-start gap-4 border-[1px] border-white px-4 py-2 shadow-[5px_5px_0px_0px_#4f4e4e]">
            <img
              className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
              src="https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
            />
            <input
              placeholder="Type to add something"
              className="w-full bg-transparent p-2 text-white !outline-none placeholder:text-gray-500 md:p-4"
            />
            <button className="flex h-10 w-10  flex-shrink-0 items-center justify-center p-1">
              <FaceSmileIcon className="h-6 w-6 text-white" />
            </button>
            <button className="flex h-10 w-10  flex-shrink-0 items-center justify-center p-1">
              <PlusIcon className="h-6 w-6 text-white" />
            </button>
            <button className="flex h-10 w-10 flex-shrink-0  items-center justify-center bg-[#ae7aff] p-1">
              <PaperAirplaneIcon className="h-6 w-6 text-black" />
            </button>
          </div>
        </section>
        {/* Trending Topics */}
        <aside className="hidden text-white lg:col-span-3 lg:block"></aside>
      </div>
    </div>
  );
};

export default PostListing;
