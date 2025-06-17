"use client";
import Avatar from "@/components/avatar-aboutme";
import ContainerPage from "@/components/container";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";
import { useLanguage } from "@/i18n";

const PageAboutMe = () => {
  const {t} = useLanguage();
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <Avatar />
        <div className="flex flex-col justify-center w-full" >
          <h1 className="text-2xl leading-tight text-center md:text-4xl md:mt-10">
            {t("aboutme1")}{" "}
            <span className="font-bold text-secondary">
              {t("aboutme2")}
            </span>
          </h1>
          <TimeLine />
        </div>
      </ContainerPage>
    </>
  );
};

export default PageAboutMe;
