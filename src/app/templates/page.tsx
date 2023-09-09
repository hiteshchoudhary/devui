"use client";

import Button from "@/components/common/Button";
import { applications } from "@/utils/screens";
import {
  ChevronDoubleRightIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const Templates = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {applications.map((application, i) => {
        return (
          <main key={i} className="py-6 md:px-4">
            <div className="mx-auto grid max-w-4xl grid-cols-1">
              <div className="relative col-start-1 row-start-1 flex flex-col-reverse bg-gradient-to-t from-black/100 via-black/0 p-3">
                <h1 className="mt-1 text-lg font-semibold text-white">
                  {application.name}
                </h1>
                <p className="text-sm font-medium leading-4 text-white">
                  {application.subtitle}
                </p>
              </div>
              <div className="col-start-1 col-end-3 row-start-1 grid items-end justify-end gap-4">
                <img
                  src={application.cover}
                  alt=""
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
              <dl className="row-start-2 mt-2 inline-flex items-center text-sm font-medium text-gray-700">
                <dd className="inline-flex items-center gap-1">
                  <RectangleGroupIcon className="-mt-0.5 h-5 w-5" />
                  {application.pages?.length || 0} Screens
                </dd>
              </dl>

              <div className="col-start-1 row-start-3 mt-2 self-center">
                <Link href={`/templates/${application.id}`}>
                  <Button EndIcon={ChevronDoubleRightIcon}>View Screens</Button>
                </Link>
              </div>
              <p className="col-start-1 mt-4 text-sm leading-6">
                {application.description}
              </p>
            </div>
          </main>
        );
      })}
    </div>
  );
};

export default Templates;
