import {
  BellIcon,
  PlusCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const CreateOneOnOneChat = () => {
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
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-[#121212] bg-opacity-75 transition-opacity" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-0 text-center md:items-center md:p-2">
            <div className="relative w-full transform overflow-hidden border-t-[1px] border-white bg-[#121212] text-left text-white transition-all md:my-8 md:w-full md:max-w-5xl md:border-[1px]">
              <div className="flex items-center justify-between border-b-[1px] border-white p-4">
                <p className="text-xl font-bold">Create Chat</p>
                <XMarkIcon className="h-6 w-6 text-white" role="button" />
              </div>
              <div className="flex w-full flex-col gap-4 p-4 md:gap-6 md:p-6">
                <div className="flex w-full flex-col items-start justify-start gap-2">
                  <label className="text-xs text-slate-200">
                    Select a user
                  </label>
                  <select
                    placeholder="Select a user..."
                    autoComplete="false"
                    className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                  >
                    <option value="0">John Doe</option>
                    <option value="1">Jane Doe</option>
                    <option value="2">Mark Smith</option>
                    <option value="3">Tiger Woods</option>
                  </select>
                </div>
                <div className="flex w-full flex-col items-center justify-end gap-4 md:flex-row md:gap-6">
                  <button className="w-full bg-red-500 p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
                    Cancel
                  </button>
                  <button className="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
                    Start Chatting
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOneOnOneChat;
