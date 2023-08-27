import * as React from "react";
import Link from "next/link";
import { CodeBracketSquareIcon } from "@heroicons/react/20/solid";
import { classNames } from "@/utils";

interface MobileNavProps {
  items: {
    title: string;
    href: string;
  }[];
}

export function MobileNavbar({ items }: MobileNavProps) {
  return (
    <div
      className={classNames(
        "animate-in slide-in-from-bottom-80 fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md md:hidden"
      )}
    >
      <div className="text-popover-foreground relative z-20 grid gap-6 rounded-md bg-white p-4 shadow-md">
        <Link href="/" className="flex items-center space-x-2">
          <CodeBracketSquareIcon className="h-7 w-7 text-slate-900" />
          <span className="font-bold">DevUI</span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={classNames(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
