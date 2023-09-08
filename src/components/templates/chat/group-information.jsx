import { TrashIcon, UserMinusIcon, XMarkIcon } from "@heroicons/react/20/solid";
import {
  BellIcon,
  ExclamationTriangleIcon,
  PencilIcon,
  PlusCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const participants = [
  {
    fullName: "Eva Brown",
    email: "eva.brown@example.com",
    avatar:
      "https://images.pexels.com/photos/18096595/pexels-photo-18096595/free-photo-of-music-on-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "John Doe",
    email: "john.doe@example.com",
    avatar:
      "https://images.pexels.com/photos/18096595/pexels-photo-18096595/free-photo-of-music-on-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    avatar:
      "https://images.pexels.com/photos/18096595/pexels-photo-18096595/free-photo-of-music-on-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Alice Johnson",
    email: "alice.johnson@example.com",
    avatar:
      "https://images.pexels.com/photos/18096595/pexels-photo-18096595/free-photo-of-music-on-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Bob Wilson",
    email: "bob.wilson@example.com",
    avatar:
      "https://images.pexels.com/photos/18096595/pexels-photo-18096595/free-photo-of-music-on-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Eva Brown",
    email: "eva.brown@example.com",
    avatar:
      "https://images.pexels.com/photos/18096595/pexels-photo-18096595/free-photo-of-music-on-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "David Lee",
    email: "david.lee@example.com",
    avatar:
      "https://images.pexels.com/photos/18096595/pexels-photo-18096595/free-photo-of-music-on-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const GroupChatInfo = () => {
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
        <div className="fixed inset-0 z-10 bg-[#121212] bg-opacity-75 transition-opacity" />
        <aside className="fixed right-0 z-20 h-screen w-full translate-x-0 overflow-y-auto bg-[#121212] p-4 transition-all duration-200 ease-in-out peer-focus:translate-x-0 md:w-1/2 md:border-l-[1px] md:border-l-white md:p-6">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-lg font-semibold text-white md:text-xl md:font-bold">
              About Group
            </p>
            <XMarkIcon
              className="h-5 w-5 text-white md:h-6 md:w-6"
              role="button"
            />
          </div>
          <div className="flex flex-col items-center justify-start gap-4 text-center">
            <div className="flex w-14 flex-shrink-0 items-center justify-center md:w-24">
              <img
                className="w-h-14 flex h-14 flex-shrink-0 rounded-full outline outline-8 outline-[#121212] md:h-24 md:w-24"
                alt="avatar"
                src="https://images.pexels.com/photos/18096595/pexels-photo-18096595/free-photo-of-music-on-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <img
                className="w-h-14 -ml-10 flex h-14 flex-shrink-0 rounded-full outline outline-8 outline-[#121212] md:h-24 md:w-24"
                alt="avatar"
                src="https://images.pexels.com/photos/18096595/pexels-photo-18096595/free-photo-of-music-on-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <img
                className="w-h-14 -ml-10 flex h-14 flex-shrink-0 rounded-full outline outline-8 outline-[#121212] md:h-24 md:w-24"
                alt="avatar"
                src="https://images.pexels.com/photos/18096595/pexels-photo-18096595/free-photo-of-music-on-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <p className="ml-2 text-sm text-white md:text-base">+4</p>
            </div>
            <h1 className="truncate text-2xl font-extrabold text-white md:text-4xl">
              CodeCrafters Alliance
            </h1>
            <span className="text-sm text-gray-400">7 Participants</span>
          </div>
          <hr className="mx-auto my-8 w-[90%] border-[1px] border-dashed border-gray-500" />
          <p className="mb-2 inline-flex items-center text-left text-white">
            <UserGroupIcon className="mr-2 h-5 w-5" /> Group participants
          </p>
          <ul className="mb-4 flex w-full flex-col items-start justify-start divide-y-[0.1px] divide-white">
            {participants.map((user, i) => {
              return (
                <li
                  className="flex w-full items-center justify-start gap-2 py-4 pr-4"
                  key={i}
                >
                  <img
                    className="flex h-10 w-10 flex-shrink-0 rounded-full md:h-14 md:w-14"
                    src={user.avatar}
                    alt="avatar"
                  />
                  <div className="flex flex-col items-start justify-start text-left text-white">
                    <p className="inline-flex items-center text-sm font-semibold md:text-base">
                      {user.fullName}
                      {i === 1 ? (
                        <span className="ml-2 border-[1px] border-white px-1.5 py-0.5 text-[8px] text-white md:text-[10px]">
                          ADMIN
                        </span>
                      ) : null}
                    </p>
                    <span className="text-xs text-gray-500 md:text-sm">
                      {user.email}
                    </span>
                  </div>
                  <button className="ml-auto inline-flex aspect-square items-center bg-red-500 p-3 text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
                    <UserMinusIcon className="h-5 w-5" />
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="flex w-full flex-col gap-4">
            <button className="inline-flex w-full items-center justify-center bg-[#ae7aff] p-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
              <PencilIcon className="mr-2 h-5 w-5" /> Update Group
            </button>
            <button className="inline-flex w-full items-center justify-center bg-red-500 p-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
              <TrashIcon className="mr-2 h-5 w-5" /> Delete Group
            </button>
            <button className="inline-flex w-full items-center justify-center bg-red-500 p-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
              <ExclamationTriangleIcon className="mr-2 h-5 w-5" /> Exit Group
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default GroupChatInfo;
