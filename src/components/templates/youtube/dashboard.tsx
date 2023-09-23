"use client";
import {
  EyeIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UserIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { navItems, logo, videos } from "./data";
import { classNames } from "@/utils";

const Dashboard = () => {
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
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-y-6 px-4 py-8">
          <div className="flex flex-wrap justify-between gap-4">
            <div className="block">
              <h1 className="text-2xl font-bold">
                Welcome Back, React Patterns
              </h1>
              <p className="text-sm text-gray-300">
                Seamless Video Management, Elevated Results.
              </p>
            </div>
            <div className="block">
              <button className="inline-flex items-center gap-x-2 bg-[#ae7aff] px-3 py-2 font-semibold text-black">
                <PlusIcon className="h-5 w-5" strokeWidth={2} /> Upload video
              </button>
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
            {[
              { Icon: EyeIcon, title: "Total views", count: "221,234" },
              { Icon: UserIcon, title: "Total subscribers", count: "4,053" },
              { Icon: HeartIcon, title: "Total likes", count: "63,021" },
            ].map(({ title, Icon, count }) => (
              <div key={title} className="border p-4">
                <div className="mb-4 block">
                  <span className="inline-block h-7 w-7 rounded-full bg-[#E4D3FF] p-1 text-[#ae7aff]">
                    <Icon />
                  </span>
                </div>
                <h6 className="text-gray-300">{title}</h6>
                <p className="text-3xl font-semibold">{count}</p>
              </div>
            ))}
          </div>
          <div className="w-full overflow-auto">
            <table className="w-full min-w-[1200px] border-collapse border text-white">
              <thead>
                <tr>
                  <th className="border-collapse border-b p-4">Status</th>
                  <th className="border-collapse border-b p-4">Status</th>
                  <th className="border-collapse border-b p-4">Uploaded</th>
                  <th className="border-collapse border-b p-4">Rating</th>
                  <th className="border-collapse border-b p-4">
                    Date uploaded
                  </th>
                  <th className="border-collapse border-b p-4"></th>
                </tr>
              </thead>
              <tbody>
                {videos.map((video) => (
                  <tr key={video.id} className="group border">
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                      <div className="flex justify-center">
                        <label
                          htmlFor={"vid-pub-" + video.id}
                          className="relative inline-block w-12 cursor-pointer overflow-hidden"
                        >
                          <input
                            type="checkbox"
                            id={"vid-pub-" + video.id}
                            className="peer sr-only"
                            defaultChecked={video.isPublished}
                          />
                          <span className="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                        </label>
                      </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                      <div className="flex justify-center">
                        <span
                          className={classNames(
                            "inline-block rounded-2xl border px-1.5 py-0.5",
                            video.isPublished
                              ? "border-green-600 text-green-600"
                              : "border-orange-600 text-orange-600",
                          )}
                        >
                          {video.isPublished ? "Published" : "Unpublished"}
                        </span>
                      </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                      <div className="flex items-center gap-4">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={video.owner.avatar}
                          alt={video.owner.fullName}
                        />
                        <h3 className="font-semibold">{video.title}</h3>
                      </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                      <div className="flex justify-center gap-4">
                        <span className="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                          {video.likeCount} likes
                        </span>
                        <span className="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                          {video.dislikeCount} dislikes
                        </span>
                      </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                      {new Date(video.createdAt).toLocaleDateString()}
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                      <div className="flex gap-4">
                        <button className="h-5 w-5 hover:text-[#ae7aff]">
                          <TrashIcon />
                        </button>
                        <button className="h-5 w-5 hover:text-[#ae7aff]">
                          <PencilIcon />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
