"use client";
import { classNames } from "@/utils";
import {
  MagnifyingGlassIcon,
  PlayIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { bottomTotalItems, navItems, logo } from "./data";

const EmptyVideos = () => {
  return (
    <div className="h-screen overflow-y-auto bg-[#121212] text-white">
      <header className="sticky inset-x-0 top-0 z-50 w-full border-b border-white bg-[#121212] px-4">
        <nav className="mx-auto flex max-w-7xl items-center py-2">
          <div className="mr-4 w-12 shrink-0 sm:w-16">{logo}</div>
          <div className="relative mx-auto hidden w-full max-w-md overflow-hidden sm:block">
            <input
              className="w-full border bg-transparent py-1 pl-8 pr-3 placeholder-white outline-none sm:py-2"
              placeholder="Search"
            />
            <span className="absolute left-2.5 top-1/2 inline-block -translate-y-1/2">
              <MagnifyingGlassIcon className=" h-4 w-4" />
            </span>
          </div>
          <button className="ml-auto sm:hidden">
            <MagnifyingGlassIcon className=" h-6 w-6" />
          </button>
          <button className="group peer ml-4 flex w-6 shrink-0 flex-wrap gap-y-1.5 sm:hidden">
            <span className="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
            <span className="block h-[2px] w-2/3 bg-white group-hover:bg-[#ae7aff]"></span>
            <span className="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
          </button>
          <div className="fixed inset-y-0 right-0 flex w-full max-w-xs shrink-0 translate-x-full flex-col border-l border-white bg-[#121212] duration-200 hover:translate-x-0 peer-focus:translate-x-0 sm:static sm:ml-4 sm:w-auto sm:translate-x-0 sm:border-none">
            <div className="relative flex w-full items-center justify-between border-b border-white px-4 py-2 sm:hidden">
              <span className="inline-block w-12">{logo}</span>
              <button className="inline-block w-8">
                <XCircleIcon />
              </button>
            </div>
            <ul className="my-4 flex w-full flex-wrap gap-2 px-4 sm:hidden">
              {navItems
                .filter((item) => !item.mobileView)
                .map((item) => (
                  <li key={item.name} className="w-full">
                    <button className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                      <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
                    </button>
                  </li>
                ))}
            </ul>

            <div className="mb-8 mt-auto flex w-full flex-wrap gap-4 px-4 sm:mb-0 sm:mt-0 sm:items-center sm:px-0">
              <button className="w-full bg-[#383737] px-3 py-2 hover:bg-[#4f4e4e] sm:w-auto sm:bg-transparent">
                Log in
              </button>
              <button className="mr-1 w-full bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                Sign up
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
        <aside className="group fixed inset-x-0 bottom-0 z-40 w-full shrink-0 border-t border-white bg-[#121212] px-2 py-2 sm:absolute sm:inset-y-0 sm:max-w-[70px] sm:border-r sm:border-t-0 sm:py-6 sm:hover:max-w-[250px] lg:sticky lg:max-w-[250px]">
          <ul className="flex justify-around gap-y-2 sm:sticky sm:top-[106px] sm:min-h-[calc(100vh-130px)] sm:flex-col">
            {navItems.map((item, i, arr) => (
              <li
                key={item.name}
                className={classNames(
                  item.mobileView ? "" : "hidden sm:block",
                  arr.length - i === bottomTotalItems ? "mt-auto" : "",
                )}
              >
                <button className="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4">
                  <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                    {item.icon}
                  </span>
                  <span className="block sm:hidden sm:group-hover:inline lg:inline">
                    {item.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
          <div className="flex h-full items-center justify-center">
            <div className="w-full max-w-sm text-center">
              <p className="mb-3 w-full">
                <span className="inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]">
                  <PlayIcon className="w-6" />
                </span>
              </p>
              <h5 className="mb-2 font-semibold">No videos available</h5>
              <p>
                There are no videos here available. Please try to search some
                thing else.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmptyVideos;
