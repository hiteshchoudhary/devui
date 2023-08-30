import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";

const TodoForm = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <header className="fixed top-0 z-10 mx-auto flex w-full max-w-[85rem] items-center justify-between border-b-[1px] border-b-slate-300 bg-[#121212] p-4 text-white lg:px-10">
        <h1 className="text-xl font-extrabold md:text-3xl">Create todo</h1>
        <button className="inline-flex w-max items-center justify-center border-[1px] border-white p-3 text-center font-bold text-white">
          <ArrowSmallLeftIcon className="mr-2 h-5 w-5" /> Go back
        </button>
      </header>
      <div className="flex h-full min-h-screen w-full flex-col items-center justify-center px-4 text-center">
        <p className="text-white">Coming soon...</p>
      </div>
    </div>
  );
};

export default TodoForm;
