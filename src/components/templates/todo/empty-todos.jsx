import React from "react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { InboxIcon } from "@heroicons/react/24/outline";

const EmptyTodos = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <div
        className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath: `polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)`,
          }}
        ></div>
      </div>
      <header className="fixed top-0 z-10 mx-auto flex w-full max-w-[85rem] items-center justify-between border-b-[1px] border-b-slate-300 p-4 text-white lg:px-10">
        <h1 className="text-xl font-extrabold md:text-3xl">All todos</h1>
        <button className="inline-flex w-max items-center justify-center border-[1px] border-white p-3 text-center font-bold text-white">
          <PlusCircleIcon className="mr-2 h-5 w-5" /> Create new
        </button>
      </header>
      <div className="flex h-full min-h-screen w-full flex-col items-center justify-center px-4 text-center">
        <div className="flex flex-col items-center justify-center gap-4 text-white">
          <InboxIcon className="h-20 w-20 text-white md:h-28 md:w-28" />
          <h1 className="text-4xl font-extrabold md:text-6xl">
            No todos found?
          </h1>
          <p className="max-w-sm text-xs text-gray-200 md:text-sm">
            No todo has been added till now. Click the below button to create a
            new task.
          </p>
        </div>
        <button className="mt-14 inline-flex w-max items-center bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-300 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
          <PlusCircleIcon className="mr-2 h-5 w-5 text-[#121212]" /> Create a
          new task
        </button>
      </div>
    </div>
  );
};

export default EmptyTodos;
