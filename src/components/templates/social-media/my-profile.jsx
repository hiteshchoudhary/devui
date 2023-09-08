import React from "react";
import {
  BellIcon,
  LinkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const Profile = () => {
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
      <div className="mt-[65px] grid grid-cols-12 gap-4 py-8 sm:px-4 md:mt-[83px] lg:px-10">
        {/* Empty */}
        <aside className="hidden text-white md:col-span-4 md:block lg:col-span-3"></aside>

        <section className="col-span-12 text-white md:col-span-8 lg:col-span-6">
          {/* Profile Card */}
          <div className="border p-4">
            <img
              className="mb-3 flex aspect-square h-16 w-16 rounded-full border-2 border-[#ae7aff] object-cover"
              src="https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
            />
            <div className="flex justify-between gap-x-4">
              <div className="w-full">
                <h2>Aurora Starlight</h2>
                <p className="text-sm">
                  <a
                    href="mailto:starryaurora@gmail.com"
                    className="hover:text-[#ae7aff]"
                  >
                    starryaurora@gmail.com
                  </a>
                </p>
              </div>
              <div className="shrink-0">
                <button className="inline-flex w-max items-center bg-[#ae7aff] px-4 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
                  Edit Profile
                </button>
              </div>
            </div>
            <hr className="my-2 h-[1px] w-full" />
            <p className="mb-2">
              Night owl | Moon enthusiast | Wanderlust 🌕🌙🌎
            </p>
            <p className="mb-4">
              <a href="https://www.aurorastarry.com/" target="_blank">
                <span className="inline-flex items-center gap-x-2 break-all text-sm text-[#ae7aff] hover:underline">
                  <LinkIcon className="h-4 w-4 shrink-0" />
                  https://www.aurorastarry.com/
                </span>
              </a>
            </p>
            <p className="flex gap-x-4">
              <span className="inline-block">
                <span className="font-bold">13.5k&nbsp;</span>
                <span className="text-sm text-gray-400">Followers</span>
              </span>
              <span className="inline-block">
                <span className="font-bold">204&nbsp;</span>
                <span className="text-sm text-gray-400">Following</span>
              </span>
            </p>
          </div>
        </section>
        {/* Trending Topics */}
        <aside className="hidden text-white lg:col-span-3 lg:block">
          <div className="border p-4">
            <h2 className="mb-4 font-bold"># Trending Hashtags</h2>
            <ul className="list-disc pl-4">
              {["javascript", "typescript", "java", "python", "golang"].map(
                (hashtag) => (
                  <li key={hashtag}>
                    <a href="#" className="hover:text-[#ae7aff]">
                      #{hashtag}
                    </a>
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

export default Profile;
