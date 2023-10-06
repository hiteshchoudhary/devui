import Button from "@/components/common/Button";
import ChipLink from "@/components/lib/ChipLink";
import {
  CodeBracketSquareIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section aria-labelledby="hero-banner">
      <div className="flex flex-col-reverse justify-between gap-2 md:flex-row">
        <div className="flex flex-col items-start gap-4 sm:w-auto md:w-2/4">
          <h1 className="font-heading text-3xl font-bold leading-[1.1] md:text-5xl lg:text-7xl">
            A complete front end solution for learners
          </h1>
          <p className="max-w-[42rem] leading-normal text-gray-300 sm:text-xl sm:leading-8">
            DevUI is a comprehensive and easy-to-use open-source UI templates
            library{" "}
            <ChipLink
              url={"https://tailwindcss.com/"}
              text={"powered by tailwindcss"}
            />{" "}
            designed to enhance your productivity as a learner
          </p>
          <div className="mt-2 flex space-x-2">
            <Link href="/templates">
              <Button StartIcon={CodeBracketSquareIcon}>View templates</Button>
            </Link>
            <a
              href="https://github.com/hiteshchoudhary/devui"
              target="_blank"
              rel="noreferrer"
            >
              <Button StartIcon={LifebuoyIcon}>Contribute</Button>
            </a>
          </div>
        </div>
        <Image src="/hero.svg" alt="Hero" width={250} height={100} />
      </div>
    </section>
  );
}
