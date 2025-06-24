"use client";

import Link from "next/link";

import MotionTransition from "@/components/transition-component";

import { socialNetworks } from "@/data";

import { useLanguage } from "@/i18n";
import LanguageSwitch from "@/components/languageSwitch";

const Header = () => {
  const { language } = useLanguage();
  console.log(socialNetworks(language));
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-10 sm:px-20"
    >
      <header>
        <LanguageSwitch />
        <div className="container justify-between max-w-6xl mx-auto md:flex">
          <Link href="/">
            <h1 className="my-3 text-4xl font-bold text-center md:text-left">
              Lucas
              <span className="text-secondary">Abot</span>
            </h1>
          </Link>
          <div className="flex items-center justify-center gap-7">
            {socialNetworks(language).map(({ Logo, src, id, props, title }) => (
              <Link
                href={src}
                key={id}
                target="_blank"
                className="transition-all duration-300 hover:text-secondary"
                title={title}
                {...props}
              >
                <Logo />
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
