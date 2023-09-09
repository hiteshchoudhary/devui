"use client";

import Button from "@/components/common/Button";
import { applications } from "@/utils/screens";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const Templates = () => {
  return (
    <>
      {applications.map((application, i) => {
        return (
          <section key={i} className="py-10">
            <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:gap-0">
              <div className="sm:pt-2 md:pr-6 lg:relative lg:ml-auto lg:w-[19.5rem] lg:flex-none lg:pl-8 lg:pr-0">
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-semibold text-slate-900">
                    {application.name}
                  </h2>
                </div>
                <p className="text-sm capitalize leading-6 text-slate-600">
                  {application.subtitle}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {application.description}
                </p>
                <div className="mt-4 h-px w-6 bg-slate-300"></div>
                <Link href={`/templates/${application.id}`}>
                  <Button EndIcon={ChevronDoubleRightIcon}>View pages</Button>
                </Link>
              </div>
              <div className="no-scrollbar lg:relative lg:mr-auto lg:flex lg:min-w-0 lg:overflow-x-auto">
                <div className="sticky left-0 z-10 hidden w-8 flex-none bg-gradient-to-r from-white lg:block"></div>
                <div className="lg:relative lg:flex lg:flex-none lg:items-start lg:pr-8">
                  <Image
                    src="https://via.placeholder.com/560x380.png"
                    alt="This is a preview image"
                    width="560"
                    height="380"
                    className="w-full rounded-xl bg-slate-100 lg:w-[19.1666666rem] lg:flex-none"
                  />
                  <Image
                    src="https://via.placeholder.com/560x380.png"
                    alt="This is a preview image"
                    width="560"
                    height="380"
                    className="hidden w-full rounded-xl bg-slate-100 lg:ml-8 lg:block lg:w-[19.1666666rem] lg:flex-none"
                  />
                  <Image
                    src="https://via.placeholder.com/560x380.png"
                    alt="This is a preview image"
                    width="560"
                    height="380"
                    className="hidden w-full rounded-xl bg-slate-100 lg:ml-8 lg:block lg:w-[19.1666666rem] lg:flex-none"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Templates;
