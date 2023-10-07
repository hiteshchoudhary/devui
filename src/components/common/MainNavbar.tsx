"use client";
import { classNames } from "@/utils";
import { CodeBracketSquareIcon } from "@heroicons/react/20/solid";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
import { MobileNavbar } from "./MobileNavbar";

const items = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Templates",
    href: "/templates",
  },

  {
    title: "About us",
    href: "/about-us",
  },
];

const MainNavbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <header className="border-slate-800e sticky top-0 z-40 border-b-2 border-gray-700 bg-dark">
      <div className="mx-auto flex h-20 max-w-[85rem] items-center justify-between p-4 lg:p-6">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <CodeBracketSquareIcon className="h-7 w-7 text-white" />
            <span className="font-heading hidden text-xl font-extrabold sm:inline-block">
              DevUI
            </span>
          </Link>
          {items?.length ? (
            <nav className="hidden gap-6 md:flex">
              {items?.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={classNames(
                    "flex items-center text-lg font-semibold transition-colors sm:text-sm",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}
          <button
            className="flex items-center space-x-2 md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? (
              <XMarkIcon className="h-5 w-5 text-white" />
            ) : (
              <Bars3BottomLeftIcon className="h-5 w-5 text-white" />
            )}
            <span className="font-heading text-xl font-extrabold sm:inline-block">
              DevUI
            </span>
          </button>
          {showMobileMenu && items && <MobileNavbar items={items} />}
        </div>
      </div>
    </header>
  );
};

export default MainNavbar;
