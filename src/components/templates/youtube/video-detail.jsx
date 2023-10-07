"use client";
import { classNames } from "@/utils";
import React from "react";
import {
  CheckIcon,
  FolderPlusIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { bottomTotalItems, navItems, logo, videos, videoDetails } from "./data";

const VideoList = () => {
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
        <aside className="group fixed inset-x-0 bottom-0 z-40 w-full shrink-0 border-t border-white bg-[#121212] px-2 py-2 sm:absolute sm:inset-y-0 sm:max-w-[70px] sm:border-r sm:border-t-0 sm:py-6 sm:hover:max-w-[250px]">
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
                  <span className="block sm:hidden sm:group-hover:inline">
                    {item.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0">
          <div className="flex w-full flex-wrap gap-4 p-4 lg:flex-nowrap">
            <div className="col-span-12 w-full">
              <div className="relative mb-4 w-full pt-[56%]">
                <div className="absolute inset-0">
                  <video className="h-full w-full" controls autoPlay muted>
                    <source
                      src={videoDetails.videoFile}
                      type={videoDetails.videoType}
                    />
                  </video>
                </div>
              </div>
              <div
                className="group mb-4 w-full rounded-lg border p-4 duration-200 hover:bg-white/5 focus:bg-white/5"
                role="button"
                tabIndex={0}
              >
                <div className="flex flex-wrap gap-y-2">
                  <div className="w-full md:w-1/2 lg:w-full xl:w-1/2">
                    <h1 className="text-lg font-bold">{videoDetails.title}</h1>
                    <p className="flex text-sm text-gray-200">
                      {videoDetails.views}&nbsp;Views &middot;
                      {videoDetails.createdAt}
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-full xl:w-1/2">
                    <div className="flex items-center justify-between gap-x-4 md:justify-end lg:justify-between xl:justify-end">
                      <div className="flex overflow-hidden rounded-lg border">
                        <button
                          className="group/btn flex items-center gap-x-2 border-r border-gray-700 px-4 py-1.5 after:content-[attr(data-like)] hover:bg-white/10 focus:after:content-[attr(data-like-alt)]"
                          data-like={videoDetails.likeCount}
                          data-like-alt={
                            videoDetails.liked
                              ? videoDetails.likeCount - 1
                              : videoDetails.likeCount + 1
                          }
                        >
                          <span
                            className={`inline-block w-5 ${
                              videoDetails.liked
                                ? "text-[#ae7aff] group-focus/btn:text-inherit"
                                : "group-focus/btn:text-[#ae7aff]"
                            }`}
                          >
                            <HandThumbUpIcon />
                          </span>
                        </button>
                        <button
                          className="group/btn flex items-center gap-x-2 px-4 py-1.5 after:content-[attr(data-like)] hover:bg-white/10 focus:after:content-[attr(data-like-alt)]"
                          data-like={videoDetails.dislikeCount}
                          data-like-alt={
                            videoDetails.disliked
                              ? videoDetails.dislikeCount - 1
                              : videoDetails.dislikeCount + 1
                          }
                        >
                          <span
                            className={`inline-block w-5 ${
                              videoDetails.disliked
                                ? "text-[#ae7aff] group-focus/btn:text-inherit"
                                : "group-focus/btn:text-[#ae7aff]"
                            }`}
                          >
                            <HandThumbDownIcon />
                          </span>
                        </button>
                      </div>
                      <div className="relative block">
                        <button className="peer flex items-center gap-x-2 rounded-lg bg-white px-4 py-1.5 text-black">
                          <span className="inline-block w-5">
                            <FolderPlusIcon />
                          </span>
                          Save
                        </button>
                        <div className="absolute right-0 top-full z-10 hidden w-64 overflow-hidden rounded-lg bg-[#121212] p-4 shadow shadow-slate-50/30 hover:block peer-focus:block">
                          <h3 className="mb-4 text-center text-lg font-semibold">
                            Save to playlist
                          </h3>
                          <ul className="mb-4">
                            {[
                              "Collections",
                              "JavaScript Basics",
                              "C++ Tuts",
                              "Feel Good Music",
                              "Ed Sheeran",
                              "Python",
                            ].map((playlistName) => (
                              <li key={playlistName} className="mb-2 last:mb-0">
                                <label
                                  className="group/label inline-flex cursor-pointer items-center gap-x-3"
                                  htmlFor={playlistName + "-checkbox"}
                                >
                                  <input
                                    type="checkbox"
                                    className="peer hidden"
                                    id={playlistName + "-checkbox"}
                                  />
                                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-transparent bg-white text-white group-hover/label:border-[#ae7aff] peer-checked:border-[#ae7aff] peer-checked:text-[#ae7aff]">
                                    <CheckIcon strokeWidth={3} />
                                  </span>
                                  {playlistName}
                                </label>
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-col">
                            <label
                              htmlFor="playlist-name"
                              className="mb-1 inline-block cursor-pointer"
                            >
                              Name
                            </label>
                            <input
                              className="w-full rounded-lg border border-transparent bg-white px-3 py-2 text-black outline-none focus:border-[#ae7aff]"
                              id="playlist-name"
                              placeholder="Enter playlist name"
                            />
                            <button className="mx-auto mt-4 rounded-lg bg-[#ae7aff] px-4 py-2 text-black">
                              Create new playlist
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-x-4">
                    <div className="mt-2 h-12 w-12 shrink-0">
                      <img
                        src={videoDetails.owner.avatar}
                        alt={videoDetails.owner.username}
                        className="h-full w-full rounded-full"
                      />
                    </div>
                    <div className="block">
                      <p className="text-gray-200">
                        {videoDetails.owner.fullName}
                      </p>
                      <p className="text-sm text-gray-400">
                        {videoDetails.owner.subscribers} Subscribers
                      </p>
                    </div>
                  </div>
                  <div className="block">
                    <button className="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                      <span className="inline-block w-5">
                        <UserPlusIcon strokeWidth={2} />
                      </span>
                      <span className="group-focus/btn:hidden">Subscribe</span>
                      <span className="hidden group-focus/btn:block">
                        Subscribed
                      </span>
                    </button>
                  </div>
                </div>
                <hr className="my-4 border-white" />
                <div className="h-5 overflow-hidden group-focus:h-auto">
                  <p className="text-sm">{videoDetails.description}</p>
                </div>
              </div>
              <button className="peer w-full rounded-lg border p-4 text-left duration-200 hover:bg-white/5 focus:bg-white/5 sm:hidden">
                <h6 className="font-semibold">
                  {videoDetails.commentCount} Comments...
                </h6>
              </button>
              <div className="fixed inset-x-0 top-full z-[60] h-[calc(100%-69px)] overflow-auto rounded-lg border bg-[#121212] p-4 duration-200 hover:top-[67px] peer-focus:top-[67px] sm:static sm:h-auto sm:max-h-[500px] lg:max-h-none">
                <div className="block">
                  <h6 className="mb-4 font-semibold">
                    {videoDetails.commentCount} Comments
                  </h6>
                  <input
                    type="text"
                    className="w-full rounded-lg border bg-transparent px-2 py-1 placeholder-white"
                    placeholder="Add a Comment"
                  />
                </div>
                <hr className="my-4 border-white" />
                {videoDetails.comments.map((comment) => (
                  <div key={comment.id}>
                    <div className="flex gap-x-4">
                      <div className="mt-2 h-11 w-11 shrink-0">
                        <img
                          src={comment.owner.avatar}
                          alt={comment.owner.username}
                          className="h-full w-full rounded-full"
                        />
                      </div>
                      <div className="block">
                        <p className="flex items-center text-gray-200">
                          {comment.owner.fullName}&nbsp;&middot;&nbsp;
                          <span className="text-sm">{comment.createdAt}</span>
                        </p>
                        <p className="text-sm text-gray-200">
                          @{comment.owner.username}
                        </p>
                        <p className="mt-3 text-sm">{comment.content}</p>
                      </div>
                    </div>

                    <hr className="my-4 border-white" />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 flex w-full shrink-0 flex-col gap-3 lg:w-[350px] xl:w-[400px]">
              {videos
                .filter((video) => video.isPublished)
                .map((video) => (
                  <div
                    key={video.id}
                    className="w-full gap-x-2 border pr-2 md:flex"
                  >
                    <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
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
                    <div className="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                      <div className="h-12 w-12 shrink-0 md:hidden">
                        <img
                          src={videoDetails.owner.avatar}
                          alt={videoDetails.owner.username}
                          className="h-full w-full rounded-full"
                        />
                      </div>
                      <div className="w-full pt-1 md:pt-0">
                        <h6 className="mb-1 text-sm font-semibold">
                          {video.title}
                        </h6>
                        <p className="mb-0.5 mt-2 text-sm text-gray-200">
                          {video.owner.fullName}
                        </p>
                        <p className="flex text-sm text-gray-200">
                          {video.views}&nbsp;Views &middot; {video.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VideoList;
