"use client";

import { useLanguage } from "@/i18n";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  const { t } = useLanguage();
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid justify-items-center items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <Image
          src="/home.png"
          priority
          width="300"
          height="300"
          alt="Profile pic"
          className="hidden md:justify-self-end md:block"
        />
        <div
          className="flex flex-col justify-center max-w-md md:self-center md:justify-self-start 
                     self-start mt-10"
        >
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left">
            {t("frontend")}{" "}
            <TypeAnimation
              sequence={["Developer", 1000, ""]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-secondary"
            />
          </h1>
          <p className="mx-auto mb-8 text-xl md:mx-0 text-center md:text-left">
            {t("introduction")}
          </p>
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <Link
              href="/projects"
              className="px-3 py-2 border-1 border-secondary transition-all cursor-pointer font-bold text-secondary text-md w-fit rounded-xl hover:opacity-80"
            >
              {t("viewProjects")}
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 border-1 border-primary transition-all bg-primary cursor-pointer font-bold text-md w-fit rounded-xl hover:opacity-80"
            >
              {t("contactMe")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
