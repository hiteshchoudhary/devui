import React from "react";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const ChangePassword = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <header className="fixed top-0 z-10 mx-auto flex w-full max-w-[85rem] items-center justify-between border-b-[1px] border-b-slate-300 bg-[#121212] p-4 text-white lg:px-10">
        <h1 className="text-xl font-extrabold md:text-3xl">My Profile</h1>
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
      <div className="mt-[65px] grid grid-cols-12 gap-4 pb-8 sm:px-4 sm:pt-8 md:mt-[83px] lg:px-10">
        {/* Empty */}
        <aside className="col-span-12 text-white md:col-span-5 lg:col-span-4 xl:col-span-3">
          {/* Profile Card */}
          <div className="sticky top-[100px] border-b border-white p-4 sm:border">
            <img
              className="mb-3 flex aspect-square h-16 w-16 rounded-full border-2 border-[#ae7aff] object-cover"
              src="https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
            />

            <h2 className="mb-1 font-bold">Aurora Starlight</h2>
            <p className="text-sm">
              Night owl | Moon enthusiast | Wanderlust 🌕🌙🌎
            </p>

            <hr className="my-4 h-[1px] w-full" />
            <div className="mb-4">
              <h3 className="mb-1 font-bold">Short Bio</h3>
              <p className="text-sm">
                Immersed in the enchanting world of the night, captivated by the
                moon&apos;s allure, and constantly seeking new adventures around
                the globe. 🌕🌙🌎
              </p>
            </div>
            <div className="mb-4 text-sm">
              <h3 className="mb-1 font-bold">Public link</h3>
              <button className="block text-[#ae7aff] hover:underline">
                starryaurora@gmail.com
              </button>
              <button className="block break-all text-[#ae7aff] hover:underline">
                https://www.aurorastarry.com/
              </button>
            </div>
            <p className="mb-4 flex gap-x-4">
              <span className="inline-block">
                <span className="font-bold">13.5k&nbsp;</span>
                <span className="text-sm text-gray-400">Followers</span>
              </span>
              <span className="inline-block">
                <span className="font-bold">204&nbsp;</span>
                <span className="text-sm text-gray-400">Following</span>
              </span>
            </p>
            <button className="inline-flex w-max items-center bg-[#ae7aff] px-4 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
              Edit Profile
            </button>
          </div>
        </aside>

        <section className="col-span-12 text-white md:col-span-7 lg:col-span-5 xl:col-span-6">
          <div className="sticky top-[82px] z-10 mt-[1px] bg-[#121212] pb-4 before:absolute before:inset-x-0 before:bottom-full before:h-[17px] before:bg-[#121212] md:top-[100px] md:mt-0">
            <ul className="no-scrollbar flex w-full overflow-x-auto px-4 sm:px-0">
              <li className="mr-2 inline-block shrink-0">
                <button className="inline-block px-6 py-1.5 hover:bg-[#2c2c2c]">
                  Posts
                </button>
              </li>
              <li className="mr-2 inline-block shrink-0">
                <button className="inline-block px-6 py-1.5 hover:bg-[#2c2c2c]">
                  Edit profile
                </button>
              </li>
              <li className="mr-2 inline-block shrink-0">
                <button className="inline-block bg-[#2c2c2c] px-6 py-1.5">
                  Change password
                </button>
              </li>
              <li className="mr-2 inline-block shrink-0">
                <button className="inline-block px-6 py-1.5 hover:bg-[#2c2c2c]">
                  Bookmarked
                </button>
              </li>
            </ul>
          </div>
          {/* Change Password Form */}
          <div className="mb-4 mt-8 flex flex-wrap gap-y-4 p-4 md:p-0">
            <div className="flex w-full flex-col items-start justify-start gap-2">
              <label className="text-xs text-slate-200">Old password</label>
              <input
                placeholder="Enter old password"
                autoComplete="false"
                className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                type="password"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-2">
              <label className="text-xs text-slate-200">New password</label>
              <input
                placeholder="Enter new password"
                autoComplete="false"
                className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                type="password"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-2">
              <label className="text-xs text-slate-200">Confirm password</label>
              <input
                placeholder="Enter confirm password"
                autoComplete="false"
                className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                type="password"
              />
            </div>
            <button className="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
              Change Password
            </button>
          </div>
        </section>
        {/* Trending Topics */}
        <aside className="hidden text-white lg:col-span-3 lg:block">
          <div className="sticky top-[100px] border p-4">
            <h2 className="mb-4 font-bold"># Trending Hashtags</h2>
            <ul className="list-disc pl-4">
              {["javascript", "typescript", "java", "python", "golang"].map(
                (hashtag) => (
                  <li key={hashtag}>
                    <button className="hover:text-[#ae7aff]">#{hashtag}</button>
                  </li>
                ),
              )}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ChangePassword;
