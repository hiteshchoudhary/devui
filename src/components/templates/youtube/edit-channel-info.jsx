"use client";
import { classNames } from "@/utils";
import React from "react";
import {
  ClockIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { bottomTotalItems, navItems, logo } from "./data";

const EditChannelInfo = () => {
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
              <div className="relative -mt-12 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full border-2">
                <img
                  src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Channel"
                  className="h-full w-full"
                />
              </div>

              <div className="mr-auto inline-block">
                <h1 className="font-bolg text-xl">React Patterns</h1>
                <p className="text-sm text-gray-400">@reactpatterns</p>
              </div>

              <div className="inline-block">
                <button className="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                  View channel
                </button>
              </div>
            </div>

            <ul className="no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px]">
              <li className="w-full">
                <button className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">
                  Personal Information
                </button>
              </li>
              <li className="w-full">
                <button className="w-full border-b-2 border-[#ae7aff] bg-white px-3 py-1.5 text-[#ae7aff]">
                  Channel Information
                </button>
              </li>
              <li className="w-full">
                <button className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">
                  Change Password
                </button>
              </li>
            </ul>

            <div className="flex flex-wrap justify-center gap-y-4 py-4">
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <h5 className="font-semibold">Channel Info</h5>
                <p className="text-gray-300">
                  Update your Channel details here.
                </p>
              </div>
              <div className="w-full sm:w-1/2 lg:w-2/3">
                <div className="rounded-lg border">
                  <div className="flex flex-wrap gap-y-4 p-4">
                    <div className="w-full">
                      <label className="mb-1 inline-block" htmlFor="username">
                        Username
                      </label>
                      <div className="flex rounded-lg border">
                        <p className="flex shrink-0 items-center border-r border-white px-3 align-middle">
                          vidplay.com/
                        </p>
                        <input
                          type="text"
                          className="w-full bg-transparent px-2 py-1.5"
                          id="username"
                          placeholder="@username"
                          defaultValue="reactpatterns"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label className="mb-1 inline-block" htmlFor="desc">
                        Description
                      </label>
                      <textarea
                        className="w-full rounded-lg border bg-transparent px-2 py-1.5"
                        rows={4}
                        id="desc"
                        placeholder="Channel Description"
                        defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
                      ></textarea>
                      <p className="mt-0.5 text-sm text-gray-300">
                        275 characters left
                      </p>
                    </div>
                    <div className="flex w-full items-center gap-3">
                      <div className="w-full max-w-xs rounded-lg border">
                        <select
                          className="w-full border-r-8 border-transparent bg-transparent py-1.5 pl-2"
                          defaultValue="regular"
                        >
                          <option value="light">Light</option>
                          <option value="regular">Regular</option>
                          <option value="semi-bold">Semi bold</option>
                          <option value="bold">Bold</option>
                          <option value="bolder">Bolder</option>
                        </select>
                      </div>
                      <button className="h-6 w-6 hover:text-[#ae7aff] focus:text-[#ae7aff]">
                        <svg
                          width="11"
                          height="14"
                          viewBox="0 0 11 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.6 6.79C9.57 6.12 10.25 5.02 10.25 4C10.25 1.74 8.5 0 6.25 0H0V14H7.04C9.13 14 10.75 12.3 10.75 10.21C10.75 8.69 9.89 7.39 8.6 6.79ZM3 2.5H6C6.83 2.5 7.5 3.17 7.5 4C7.5 4.83 6.83 5.5 6 5.5H3V2.5ZM6.5 11.5H3V8.5H6.5C7.33 8.5 8 9.17 8 10C8 10.83 7.33 11.5 6.5 11.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                      <button className="h-6 w-6 hover:text-[#ae7aff] focus:text-[#ae7aff]">
                        <svg
                          width="12"
                          height="14"
                          viewBox="0 0 12 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 0V3H6.21L2.79 11H0V14H8V11H5.79L9.21 3H12V0H4Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                      <button className="h-6 w-6 hover:text-[#ae7aff] focus:text-[#ae7aff]">
                        <svg
                          width="20"
                          height="10"
                          viewBox="0 0 20 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                      <button className="h-6 w-6 hover:text-[#ae7aff] focus:text-[#ae7aff]">
                        <ListBulletIcon />
                      </button>
                      <button className="h-6 w-6 hover:text-[#ae7aff] focus:text-[#ae7aff]">
                        <svg
                          width="19"
                          height="16"
                          viewBox="0 0 19 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 13H2V13.5H1V14.5H2V15H0V16H3V12H0V13ZM1 4H2V0H0V1H1V4ZM0 7H1.8L0 9.1V10H3V9H1.2L3 6.9V6H0V7ZM5 1V3H19V1H5ZM5 15H19V13H5V15ZM5 9H19V7H5V9Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="w-full">
                      <label className="mb-1 inline-block" htmlFor="timezone">
                        Timezone
                      </label>
                      <div className="relative w-full rounded-lg border">
                        <div className="absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-300">
                          <ClockIcon />
                        </div>
                        <select
                          id="timezone"
                          className="w-full border-r-8 border-transparent bg-transparent py-1.5 pl-8"
                          defaultValue="UTC+05:30"
                        >
                          <option value="UTC-12:00">
                            (UTC-12:00) International Date Line West
                          </option>
                          <option value="UTC-11:00">
                            (UTC-11:00) Coordinated Universal Time-11
                          </option>
                          <option value="UTC-10:00">(UTC-10:00) Hawaii</option>
                          <option value="UTC-09:00">(UTC-09:00) Alaska</option>
                          <option value="UTC-08:00">
                            (UTC-08:00) Pacific Time (US & Canada)
                          </option>
                          <option value="UTC-07:00">
                            (UTC-07:00) Mountain Time (US & Canada)
                          </option>
                          <option value="UTC-06:00">
                            (UTC-06:00) Central Time (US & Canada)
                          </option>
                          <option value="UTC-05:00">
                            (UTC-05:00) Eastern Time (US & Canada)
                          </option>
                          <option value="UTC-04:00">
                            (UTC-04:00) Atlantic Time (Canada)
                          </option>
                          <option value="UTC-03:30">
                            (UTC-03:30) Newfoundland
                          </option>
                          <option value="UTC-03:00">
                            (UTC-03:00) Buenos Aires, Georgetown
                          </option>
                          <option value="UTC-02:00">
                            (UTC-02:00) Coordinated Universal Time-02
                          </option>
                          <option value="UTC-01:00">(UTC-01:00) Azores</option>
                          <option value="UTC+00:00">
                            (UTC+00:00) Coordinated Universal Time
                          </option>
                          <option value="UTC+01:00">
                            (UTC+01:00) Central European Time
                          </option>
                          <option value="UTC+02:00">
                            (UTC+02:00) Eastern European Time
                          </option>
                          <option value="UTC+03:00">
                            (UTC+03:00) Moscow, St. Petersburg
                          </option>
                          <option value="UTC+03:30">(UTC+03:30) Tehran</option>
                          <option value="UTC+04:00">
                            (UTC+04:00) Abu Dhabi, Muscat
                          </option>
                          <option value="UTC+04:30">(UTC+04:30) Kabul</option>
                          <option value="UTC+05:00">
                            (UTC+05:00) Tashkent
                          </option>
                          <option value="UTC+05:30">
                            (UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi
                          </option>
                          <option value="UTC+05:45">
                            (UTC+05:45) Kathmandu
                          </option>
                          <option value="UTC+06:00">
                            (UTC+06:00) Almaty, Novosibirsk
                          </option>
                          <option value="UTC+06:30">
                            (UTC+06:30) Yangon (Rangoon)
                          </option>
                          <option value="UTC+07:00">
                            (UTC+07:00) Bangkok, Hanoi, Jakarta
                          </option>
                          <option value="UTC+08:00">
                            (UTC+08:00) Beijing, Chongqing, Hong Kong
                          </option>
                          <option value="UTC+08:45">(UTC+08:45) Eucla</option>
                          <option value="UTC+09:00">
                            (UTC+09:00) Osaka, Sapporo, Tokyo
                          </option>
                          <option value="UTC+09:30">
                            (UTC+09:30) Adelaide
                          </option>
                          <option value="UTC+09:45">(UTC+09:45) Darwin</option>
                          <option value="UTC+10:00">
                            (UTC+10:00) Brisbane
                          </option>
                          <option value="UTC+10:30">
                            (UTC+10:30) Lord Howe Island
                          </option>
                          <option value="UTC+11:00">
                            (UTC+11:00) Solomon Is., New Caledonia
                          </option>
                          <option value="UTC+11:30">
                            (UTC+11:30) Norfolk Island
                          </option>
                          <option value="UTC+12:00">(UTC+12:00) Fiji</option>
                          <option value="UTC+12:45">
                            (UTC+12:45) Chatham Islands
                          </option>
                          <option value="UTC+13:00">
                            (UTC+13:00) Nuku&apos;alofa
                          </option>
                          <option value="UTC+14:00">
                            (UTC+14:00) Kiritimati
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <hr className="border border-gray-300" />
                  <div className="flex items-center justify-end gap-4 p-4">
                    <button className="inline-block rounded-lg border px-3 py-1.5 hover:bg-white/10">
                      Cancel
                    </button>
                    <button className="inline-block bg-[#ae7aff] px-3 py-1.5 text-black">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditChannelInfo;
