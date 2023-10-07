"use client";
import { classNames } from "@/utils";
import React from "react";
import {
  EllipsisHorizontalIcon,
  FaceSmileIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { bottomTotalItems, navItems, logo, tweets } from "./data";

const MyChannelTweets = () => {
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

            <div className="mb-8 mt-auto px-4 sm:mb-0 sm:mt-0 sm:px-0">
              <button className="flex w-full gap-4 text-left sm:items-center">
                <img
                  src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="React-Patterns"
                  className="h-16 w-16 shrink-0 rounded-full sm:h-12 sm:w-12"
                />

                <div className="w-full pt-2 sm:hidden">
                  <h6 className="font-semibold">React Patterns</h6>
                  <p className="text-sm text-gray-300">@reactpatterns</p>
                </div>
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
          <div className="relative min-h-[150px] w-full pt-[16.28%]">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1092424/pexels-photo-1092424.jpeg?auto=compress"
                alt="cover-photo"
              />
            </div>
          </div>
          <div className="px-4 pb-4">
            <div className="flex flex-wrap gap-4 pb-4 pt-6">
              <span className="relative -mt-12 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full border-2">
                <img
                  src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Channel"
                  className="h-full w-full"
                />
              </span>

              <div className="mr-auto inline-block">
                <h1 className="font-bolg text-xl">React Patterns</h1>
                <p className="text-sm text-gray-400">@reactpatterns</p>
                <p className="text-sm text-gray-400">
                  600k Subscribers&nbsp;&middot;&nbsp;220 Subscribed
                </p>
              </div>

              <div className="inline-block">
                <button className="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                  <span className="inline-block w-5">
                    <PencilIcon strokeWidth={2} />
                  </span>
                  Edit
                </button>
              </div>
            </div>

            <ul className="no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px]">
              <li className="w-full">
                <button className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">
                  Videos
                </button>
              </li>
              <li className="w-full">
                <button className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">
                  Playlist
                </button>
              </li>
              <li className="w-full">
                <button className="w-full border-b-2 border-[#ae7aff] bg-white px-3 py-1.5 text-[#ae7aff]">
                  Tweets
                </button>
              </li>
              <li className="w-full">
                <button className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">
                  Subscribed
                </button>
              </li>
            </ul>
            <div className="mt-2 border pb-2">
              <textarea
                className="mb-2 h-10 w-full resize-none border-none bg-transparent px-3 pt-2 outline-none"
                placeholder="Write a tweet"
              ></textarea>
              <div className="flex items-center justify-end gap-x-3 px-3">
                <button className="inline-block h-5 w-5 hover:text-[#ae7aff]">
                  <FaceSmileIcon strokeWidth={2} />
                </button>
                <button className="inline-block h-5 w-5 hover:text-[#ae7aff]">
                  <EllipsisHorizontalIcon strokeWidth={2} />
                </button>
                <button className="bg-[#ae7aff] px-3 py-2 font-semibold text-black">
                  Send
                </button>
              </div>
            </div>
            <div className="py-4">
              {tweets.map((tweet) => (
                <div
                  key={tweet.id}
                  className="flex gap-3 border-b border-gray-700 py-4 last:border-b-transparent"
                >
                  <div className="h-14 w-14 shrink-0">
                    <img
                      src={tweet.owner.avatar}
                      alt={tweet.owner.fullName}
                      className="h-full w-full rounded-full"
                    />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 flex items-center gap-x-2">
                      <span className="font-semibold">
                        {tweet.owner.fullName}
                      </span>
                      &nbsp;
                      <span className="inline-block text-sm text-gray-400">
                        {tweet.createdAt}
                      </span>
                    </h4>
                    <p className="mb-2">{tweet.content}</p>
                    <div className="flex gap-4">
                      <button
                        className={`group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)]`}
                        data-like-count={tweet.likeCount}
                        data-like-count-alt={
                          tweet.liked
                            ? tweet.likeCount - 1
                            : tweet.likeCount + 1
                        }
                      >
                        <HandThumbUpIcon
                          className={`h-5 w-5 ${
                            tweet.liked
                              ? "text-[#ae7aff] group-focus:text-inherit"
                              : "text-inherit group-focus:text-[#ae7aff]"
                          }`}
                        />
                      </button>
                      <button
                        className={`group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-dislike-count)] focus:after:content-[attr(data-dislike-count-alt)]`}
                        data-dislike-count={tweet.dislikeCount}
                        data-dislike-count-alt={
                          tweet.disliked
                            ? tweet.dislikeCount - 1
                            : tweet.dislikeCount + 1
                        }
                      >
                        <HandThumbDownIcon
                          className={`h-5 w-5 ${
                            tweet.disliked
                              ? "text-[#ae7aff] group-focus:text-inherit"
                              : "text-inherit group-focus:text-[#ae7aff]"
                          }`}
                        />
                      </button>
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

export default MyChannelTweets;
