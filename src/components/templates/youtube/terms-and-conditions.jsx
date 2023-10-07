import React from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { siteNavItems, logo } from "./data";

const TermsAndConditions = () => {
  return (
    <div className="h-screen overflow-y-auto bg-[#121212] text-white">
      <header className="sticky inset-x-0 top-0 z-50 w-full border-b border-white bg-[#121212] px-4">
        <nav className="mx-auto flex max-w-7xl items-center py-2">
          <div className="mr-4 w-12 shrink-0 sm:w-16">{logo}</div>

          <button className="group peer ml-auto flex w-6 shrink-0 flex-wrap gap-y-1.5 md:hidden">
            <span className="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
            <span className="block h-[2px] w-2/3 bg-white group-hover:bg-[#ae7aff]"></span>
            <span className="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
          </button>
          <div className="fixed inset-y-0 right-0 flex w-full max-w-xs shrink-0 translate-x-full flex-col justify-between border-l border-white bg-[#121212] duration-200 hover:translate-x-0 peer-focus:translate-x-0 md:static md:ml-4 md:max-w-full md:shrink md:translate-x-0 md:flex-row md:border-none">
            <div className="relative flex w-full items-center justify-between border-b border-white px-4 py-2 md:hidden">
              <span className="inline-block w-12">{logo}</span>
              <button className="inline-block w-8">
                <XCircleIcon />
              </button>
            </div>
            <ul className="my-4 flex w-full flex-wrap gap-2 px-4 md:my-0 md:w-auto md:px-0">
              {siteNavItems.map((item) => (
                <li key={item} className="w-full md:w-auto">
                  <button className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black md:border-none">
                    <span>{item}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mb-8 mt-auto flex flex-wrap gap-4 px-4 md:mb-0 md:mt-0 md:items-center md:px-0">
              <button className="w-full bg-[#383737] px-3 py-2 hover:bg-[#4f4e4e] md:w-auto md:bg-transparent">
                Log in
              </button>
              <button className="mr-1 w-full bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] md:w-auto">
                Sign up
              </button>
            </div>
          </div>
        </nav>
      </header>
      <section className="relative mx-auto max-w-3xl px-4 py-20">
        <div className="mb-16 border-b pb-16 text-center">
          <h1 className="mb-3 text-sm text-[#ae7aff]">
            Current as of 20 Jan 2022
          </h1>
          <h2 className="mb-4 text-4xl font-bold">Terms and conditions</h2>
          <h3 className="text-gray-300">
            By accessing our website, you are agreeing to be bound by these
            terms of service, and agree that you are responsible for compliance
            with any applicable local laws.
          </h3>
        </div>
        <div className="mb-8">
          <p className="mb-4 text-gray-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            facilis officia magni quidem labore obcaecati sequi repellat sit
            iusto modi doloribus excepturi consectetur, numquam quis. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Nemo voluptatum
            provident eveniet neque impedit ipsa molestias, animi reiciendis
            dolorum vitae cumque, itaque quae. Repudiandae obcaecati eaque
            perferendis fuga amet at?
          </p>
          <p className="mb-4 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            excepturi optio consequuntur quas deleniti sequi laboriosam rem,
            necessitatibus voluptates modi commodi exercitationem eos expedita
            repellendus? Quisquam reiciendis illo deleniti, eligendi architecto
            velit veniam. Odit repudiandae rem, recusandae placeat suscipit non
            incidunt similique optio facilis quae architecto minus iusto modi
            natus quod quidem laboriosam unde error explicabo ullam! Enim unde
            iste, beatae, corrupti, velit animi perferendis nisi maxime dolore
            qui aliquam.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="mb-4 text-xl font-bold sm:text-2xl md:text-3xl">
            What information do we collect?
          </h3>
          <p className="mb-4 text-gray-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
            tenetur aperiam excepturi deleniti, tempora quidem magni obcaecati
            quas. Quo perspiciatis, deserunt velit porro ipsum, quod sit ratione
            cupiditate cumque aperiam dolorem adipisci architecto dolor id
            quisquam aliquid aspernatur. Repellat, consectetur? At harum
            necessitatibus nisi rem ullam sapiente laborum eaque? Harum?
          </p>
          <p className="mb-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro at
            iusto laboriosam possimus in! Repellendus ea accusantium omnis
            impedit incidunt facere fuga consectetur quidem sint dolorem
            necessitatibus corporis itaque sed qui voluptates amet, sunt fugit?
            Deleniti explicabo et veniam alias eligendi similique, molestiae
            ipsa vitae rerum non repudiandae accusamus error temporibus
            pariatur. Sit totam, odit facilis adipisci ut vitae neque deserunt
            obcaecati. Laborum labore possimus ipsa quo placeat, tempora
            voluptatibus commodi itaque quia cupiditate nihil at, porro deleniti
            totam quaerat!
          </p>
          <p className="mb-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            fuga asperiores voluptatibus quidem dolores, quos officiis nostrum
            veritatis. A praesentium dicta temporibus vitae, excepturi sequi
            itaque? Pariatur veniam praesentium error qui necessitatibus. Et
            autem dolorum consectetur officia, provident quasi soluta?
          </p>
        </div>
        <div className="mb-8">
          <h3 className="mb-4 text-xl font-bold sm:text-2xl md:text-3xl">
            How do we use your information
          </h3>
          <p className="mb-4 text-gray-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
            tenetur aperiam excepturi deleniti, tempora quidem magni obcaecati
            quas. Quo perspiciatis, deserunt velit porro ipsum, quod sit ratione
            cupiditate cumque aperiam dolorem adipisci architecto dolor id
            quisquam aliquid aspernatur. Repellat, consectetur? At harum
            necessitatibus nisi rem ullam sapiente laborum eaque? Harum?
          </p>
          <p className="mb-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro at
            iusto laboriosam possimus in! Repellendus ea accusantium omnis
            impedit incidunt facere fuga consectetur quidem sint dolorem
            necessitatibus corporis itaque sed qui voluptates amet, sunt fugit?
            Deleniti explicabo et veniam alias eligendi similique, molestiae
            ipsa vitae rerum non repudiandae accusamus error temporibus
            pariatur. Sit totam, odit facilis adipisci ut vitae neque deserunt
            obcaecati. Laborum labore possimus ipsa quo placeat, tempora
            voluptatibus commodi itaque quia cupiditate nihil at, porro deleniti
            totam quaerat!
          </p>
          <p className="mb-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            fuga asperiores voluptatibus quidem dolores, quos officiis nostrum
            veritatis. A praesentium dicta temporibus vitae, excepturi sequi
            itaque? Pariatur veniam praesentium error qui necessitatibus. Et
            autem dolorum consectetur officia, provident quasi soluta?
          </p>
        </div>
        <div className="mb-8">
          <h3 className="mb-4 text-xl font-bold sm:text-2xl md:text-3xl">
            Do we use cookies and other tracking technologies?
          </h3>
          <p className="mb-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            fuga asperiores voluptatibus quidem dolores, quos officiis nostrum
            veritatis. A praesentium dicta temporibus vitae, excepturi sequi
            itaque? Pariatur veniam praesentium error qui necessitatibus. Et
            autem dolorum consectetur officia, provident quasi soluta?
          </p>
        </div>
        <div className="mb-8">
          <h3 className="mb-4 text-xl font-bold sm:text-2xl md:text-3xl">
            How long do we keep tour information?
          </h3>
          <p className="mb-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            fuga asperiores voluptatibus quidem dolores, quos officiis nostrum
            veritatis. A praesentium dicta temporibus vitae, excepturi sequi
            itaque? Pariatur veniam praesentium error qui necessitatibus. Et
            autem dolorum consectetur officia, provident quasi soluta?
          </p>
        </div>
        <div className="mb-8">
          <h3 className="mb-4 text-xl font-bold sm:text-2xl md:text-3xl">
            How do we keep your information safe?
          </h3>
          <p className="mb-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            fuga asperiores voluptatibus quidem dolores, quos officiis nostrum
            veritatis. A praesentium dicta temporibus vitae, excepturi sequi
            itaque? Pariatur veniam praesentium error qui necessitatibus. Et
            autem dolorum consectetur officia, provident quasi soluta?
          </p>
        </div>
        <div className="mb-8">
          <h3 className="mb-4 text-xl font-bold sm:text-2xl md:text-3xl">
            What are your privacy rights
          </h3>
          <p className="mb-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            fuga asperiores voluptatibus quidem dolores, quos officiis nostrum
            veritatis. A praesentium dicta temporibus vitae, excepturi sequi
            itaque? Pariatur veniam praesentium error qui necessitatibus. Et
            autem dolorum consectetur officia, provident quasi soluta?
          </p>
        </div>
        <div className="mb-8">
          <h3 className="mb-4 text-xl font-bold sm:text-2xl md:text-3xl">
            How can you contact us about this policy?
          </h3>
          <p className="mb-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            fuga asperiores voluptatibus quidem dolores, quos officiis nostrum
            veritatis. A praesentium dicta temporibus vitae, excepturi sequi
            itaque? Pariatur veniam praesentium error qui necessitatibus. Et
            autem dolorum consectetur officia, provident quasi soluta?
          </p>
          <ol className="list-decimal pl-4 text-gray-300">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
              voluptas.
            </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              voluptatem optio autem eveniet ab natus!
            </li>
          </ol>
        </div>
      </section>
      <footer className="px-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between border-t py-2">
          <div className="mr-4 w-12 shrink-0 sm:w-16">{logo}</div>
          <p className="text-sm">
            &copy;{new Date().getFullYear()} VideoTube. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
