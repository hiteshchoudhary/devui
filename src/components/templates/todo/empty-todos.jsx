import React from "react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { InboxIcon } from "@heroicons/react/24/outline";

const EmptyTodos = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <header className="fixed top-0 z-10 mx-auto flex w-full max-w-[85rem] items-center justify-between border-b-[1px] border-b-slate-300 bg-[#121212] p-4 text-white lg:px-10">
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
        <button className="mt-14 inline-flex w-max items-center bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
          <PlusCircleIcon className="mr-2 h-5 w-5 text-[#121212]" /> Create a
          new task
        </button>
      </div>
    </div>
  );
};

export default EmptyTodos;
