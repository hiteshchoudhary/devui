import React from "react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { BellIcon, InboxIcon } from "@heroicons/react/24/outline";

const EmptyChats = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <header className="fixed top-0 z-10 mx-auto flex w-full max-w-[85rem] items-center justify-between border-b-[1px] border-b-slate-300 bg-[#121212] p-4 text-white lg:px-10">
        <h1 className="text-xl font-extrabold md:text-3xl">Inbox</h1>
        <div className="flex w-max flex-shrink-0 items-center justify-end gap-6">
          <span className="relative">
            <BellIcon className="h-6 w-6 text-white md:h-8 md:w-8" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-1 text-sm text-white md:h-5 md:w-5 md:text-base">
              4
            </span>
          </span>
          <div className="h-11 w-11 rounded-full border-2 border-white">
            <img
              src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="avatar"
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
          <button className="hidden w-max items-center justify-center border-[1px] border-white p-3 text-center font-bold text-white md:inline-flex">
            <PlusCircleIcon className="mr-2 h-5 w-5" /> Create a chat
          </button>
        </div>
      </header>
      <div className="flex h-full min-h-screen w-full flex-col items-center justify-center px-4 text-center">
        <div className="flex flex-col items-center justify-center gap-4 text-white">
          <InboxIcon className="h-20 w-20 text-white md:h-28 md:w-28" />
          <h1 className="text-4xl font-extrabold md:text-6xl">
            No chats found?
          </h1>
          <p className="max-w-sm text-xs text-gray-200 md:text-sm">
            Try to initiate chat with your saved contacts by clicking the button
            below
          </p>
        </div>

        <button className="mt-14 inline-flex w-max items-center bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
          <PlusCircleIcon className="mr-2 h-5 w-5 text-[#121212]" /> Create a
          chat
        </button>
      </div>
    </div>
  );
};

export default EmptyChats;
