import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";

const TodoForm = () => {
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
