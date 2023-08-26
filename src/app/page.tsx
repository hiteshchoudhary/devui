import Button from "@/components/Button";
import {
  CodeBracketSquareIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section aria-labelledby="hero-banner">
      <div className="flex flex-col items-start gap-4">
        <Image src="/hero.svg" alt="Hero" width={250} height={100} />
        <h1 className="font-heading text-3xl font-bold leading-[1.1] md:text-5xl lg:text-7xl">
          A complete front end solution for learners
        </h1>
        <p className="max-w-[42rem] leading-normal text-slate-700 sm:text-xl sm:leading-8">
          DevUI is a comprehensive and easy-to-use open-source UI templates
          library ( powered by <strong>TailwindCSS</strong>) designed to enhance
          your productivity as a learner{" "}
        </p>
        <div className="mt-2 flex space-x-2">
          <Link href="/#">
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
    </section>
  );
}
