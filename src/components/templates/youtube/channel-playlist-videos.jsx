"use client";
import { classNames } from "@/utils";
import { MagnifyingGlassIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { bottomTotalItems, navItems, logo, playlistList } from "./data";

const ChannelPlaylistVideos = () => {
  const playlist = playlistList[0];
  playlist.videos = playlist.videos.filter((video) => video.isPublished);

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
          <div className="flex flex-wrap gap-x-4 gap-y-10 p-4 xl:flex-nowrap">
            <div className="w-full shrink-0 sm:max-w-md xl:max-w-sm">
              <div className="relative mb-2 w-full pt-[56%]">
                <div className="absolute inset-0">
                  <img
                    src={playlist.videos[0].thumbnail}
                    alt={playlist.name}
                    className="h-full w-full"
                  />
                  <div className="absolute inset-x-0 bottom-0">
                    <div className="relative border-t bg-white/30 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                      <div className="relative z-[1]">
                        <p className="flex justify-between">
                          <span className="inline-block">Playlist</span>
                          <span className="inline-block">
                            {playlist.videos.length}
                            &nbsp;videos
                          </span>
                        </p>
                        <p className="text-sm text-gray-200">
                          {playlist.views} Views&nbsp;&middot;&nbsp;
                          {playlist.createdAt}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h6 className="mb-1 font-semibold">{playlist.name}</h6>
              <p className="flex text-sm text-gray-200">
                {playlist.description}
              </p>
              <div className="mt-6 flex items-center gap-x-3">
                <div className="h-16 w-16 shrink-0">
                  <img
                    src={playlist.owner.avatar}
                    alt={playlist.owner.fullName}
                    className="h-full w-full rounded-full"
                  />
                </div>
                <div className="w-full">
                  <h6 className="font-semibold">{playlist.owner.fullName}</h6>
                  <p className="text-sm text-gray-300">
                    {playlist.owner.subscribers} Subscribers
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-y-4">
              {playlist.videos.map(
                (video) =>
                  video.isPublished && (
                    <div key={video.id} className="border">
                      <div className="w-full max-w-3xl gap-x-4 sm:flex">
                        <div className="relative mb-2 w-full sm:mb-0 sm:w-5/12">
                          <div className="w-full pt-[56%]">
                            <div className="absolute inset-0">
                              <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="h-full w-full"
                              />
                            </div>
                            <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                              {video.duration}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-x-2 px-2 sm:w-7/12 sm:px-0">
                          <div className="h-10 w-10 shrink-0 sm:hidden">
                            <img
                              src={video.owner.avatar}
                              alt={video.owner.username}
                              className="h-full w-full rounded-full"
                            />
                          </div>
                          <div className="w-full">
                            <h6 className="mb-1 font-semibold sm:max-w-[75%]">
                              {video.title}
                            </h6>
                            <p className="flex text-sm text-gray-200 sm:mt-3">
                              {video.views}&nbsp;Views &middot; {video.time}
                            </p>
                            <div className="flex items-center gap-x-4">
                              <div className="mt-2 hidden h-10 w-10 shrink-0 sm:block">
                                <img
                                  src={video.owner.avatar}
                                  alt={video.owner.username}
                                  className="h-full w-full rounded-full"
                                />
                              </div>
                              <p className="text-sm text-gray-200">
                                {video.owner.fullName}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChannelPlaylistVideos;
