import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const todos = [
  {
    task: "Complete coding challenge",
    date: "10 Aug 2023",
  },
  {
    task: "Read programming article",
    date: "15 Aug 2023",
  },
  {
    task: "Debug the issue in the backend",
    date: "20 Aug 2023",
  },
  {
    task: "Review pull requests",
    date: "25 Aug 2023",
  },
  {
    task: "Prepare presentation on algorithms",
    date: "05 Sept 2023",
  },
  {
    task: "Attend programming meetup",
    date: "18 Sept 2023",
  },
  {
    task: "Optimize database queries",
    date: "10 Oct 2023",
  },
  {
    task: "Participate in hackathon",
    date: "05 Nov 2023",
  },
  {
    task: "Contribute to open source project",
    date: "15 Nov 2023",
  },
];

const TodosList = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <header className="fixed top-0 z-10 mx-auto flex w-full max-w-[85rem] items-center justify-between border-b-[1px] border-b-slate-300 bg-[#121212] p-4 text-white lg:px-10">
        <h1 className="text-xl font-extrabold md:text-3xl">All todos</h1>
        <button className="inline-flex w-max items-center justify-center border-[1px] border-white p-3 text-center font-bold text-white">
          <PlusCircleIcon className="mr-2 h-5 w-5" /> Create new
        </button>
      </header>
      <div className="mx-auto flex h-full min-h-screen w-full max-w-full flex-col items-start justify-start px-4 py-28 text-center md:max-w-5xl">
        <div className="flex w-full flex-col gap-5">
          <div className="flex w-full flex-shrink-0 flex-wrap items-center justify-start gap-3 md:gap-6">
            <button className="border-[1px] border-[#565656] bg-[#232323] px-3 py-2 text-sm font-semibold text-white md:text-base">
              All todos
            </button>
            <button className="px-3 py-2 text-sm font-semibold text-white hover:bg-[#232323] md:text-base">
              Pending
            </button>
            <button className="px-3 py-2 text-sm font-semibold text-white hover:bg-[#232323] md:text-base">
              Completed
            </button>
          </div>
          <ul className="divide-y-[1px] divide-white border-[1px] border-white p-0">
            <li className="flex w-full items-center justify-start">
              <input
                placeholder="Type to add a new todo..."
                className="w-full bg-transparent p-4 text-white placeholder:text-gray-500 md:p-6"
              />
              <button className="bg-green-500 p-4 text-center text-black hover:bg-green-400 active:bg-green-600 md:p-6">
                <PlusCircleIcon className="h-8 w-8" />
              </button>
            </li>
            {todos.map(({ task, date }, i) => {
              return (
                <li
                  key={i}
                  className="flex w-full items-center justify-start p-4 md:p-6"
                >
                  <input
                    type="checkbox"
                    id={`checkbox-${i + 1}`}
                    name={`checkbox-${i + 1}`}
                    className={`absolute h-5 w-5 cursor-pointer opacity-0 md:h-6 md:w-6 [&:checked+div+p]:text-[#898989] [&:checked+div+p]:line-through [&:checked+div]:bg-green-500 [&:checked+div_svg]:block`}
                  />
                  <div className="mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center border-[1px] border-white bg-transparent focus-within:border-white md:mr-4 md:h-6 md:w-6">
                    <svg
                      className="pointer-events-none hidden h-3 w-3 fill-current text-white"
                      version="1.1"
                      viewBox="0 0 17 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <g
                          transform="translate(-9 -11)"
                          fill="#000000"
                          fillRule="nonzero"
                        >
                          <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p
                    id={`todo_${i + 1}`}
                    className="mr-3 truncate text-left text-sm font-semibold text-white md:text-base"
                  >
                    {task}
                  </p>
                  <div className="ml-auto flex flex-shrink-0 border-[1px] border-white px-2 py-1 text-xs text-white md:text-sm">
                    {date}
                  </div>
                  <button className="ml-2 flex flex-shrink-0 border-[1px] border-red-500 bg-red-500 p-1">
                    <TrashIcon className="h-5 w-5 text-white" />
                  </button>
                  <button className="ml-2 flex flex-shrink-0 border-[1px] border-blue-500 bg-blue-500 p-1">
                    <PencilIcon className="h-5 w-5 text-white" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodosList;
