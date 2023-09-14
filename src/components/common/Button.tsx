import { TailwindIconType } from "@/types/utils";
import React from "react";

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    StartIcon?: TailwindIconType;
    EndIcon?: TailwindIconType;
  }
> = ({ StartIcon, EndIcon, children, ...props }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2.5 text-sm font-semibold text-gray-950 shadow-sm hover:bg-gray-200 active:bg-gray-300 disabled:bg-slate-500"
      {...props}
    >
      {StartIcon ? (
        <StartIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      ) : null}
      {children}
      {EndIcon ? (
        <EndIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
      ) : null}
    </button>
  );
};

export default Button;
