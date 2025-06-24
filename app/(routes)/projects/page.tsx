"use client";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { Code, Globe } from "lucide-react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import TransitionPage from "@/components/transition-page";
import { dataProjects } from "@/data";
import Image from "next/image";
import ContainerPage from "@/components/container";
import { useLanguage } from "@/i18n";
import Avatar from "@/components/avatar-projects";

const ProjectsPage = () => {
  const { t } = useLanguage();
  return (
    <ContainerPage>
      <TransitionPage />
      <Avatar />
      <div className="flex flex-col justify-center h-full mt-25 2xl:mt-50">
        <h1 className="text-2xl leading-tight text-center md:text-3xl md:mb-5">
          {t("projects1")}{" "}
          <span className="inline-block font-bold text-secondary">
            {t("projects2")}
          </span>
          <div className="flex items-center justify-center mt-3">
            <div>
              <Swiper
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                }}
                breakpoints={{ 380: { slidesPerView: 1, spaceBetween: 15 } }}
                freeMode={true}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination, Navigation]}
                className="h-[370px] md:h-[405px] w-[320px] md:w-[550px]"
                navigation={true}
                loop={true}
              >
                {dataProjects(t).map(
                  ({ id, title, description, image, urlDemo, urlGithub }) => (
                    <SwiperSlide key={id}>
                      <Image
                        src={image}
                        alt={title}
                        width={300}
                        height={300}
                        className="justify-self-center w-full cursor-auto"
                      />
                      <div className="flex flex-row align-items-center mt-2 justify-between">
                        <h3 className="text-lg text-center text-secondary font-semibold">
                          {title}
                        </h3>
                        <div className="flex flex-row">
                          <Link
                            href={urlDemo ?? ""}
                            target="_blank"
                            className={`mr-1 ${
                              urlDemo ? "" : "pointer-events-none text-gray-600"
                            }`}
                            aria-disabled={!urlDemo}
                            tabIndex={urlDemo ? undefined : -1}
                          >
                            <Globe
                              width={20}
                              height={20}
                              className="hover:text-secondary"
                            />
                          </Link>
                          <Link
                            href={urlGithub ?? ""}
                            target="_blank"
                            className={`mr-1 ${
                              urlGithub
                                ? ""
                                : "pointer-events-none text-gray-600"
                            }`}
                            aria-disabled={!urlGithub}
                            tabIndex={urlGithub ? undefined : -1}
                          >
                            <Code
                              width={20}
                              height={20}
                              className="hover:text-secondary"
                            />
                          </Link>
                        </div>
                      </div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: description,
                        }}
                        className="text-sm mt-2 text-left"
                      />
                      {/*  {description}
                      </p> */}
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </div>
        </h1>
      </div>
    </ContainerPage>
  );
};

export default ProjectsPage;
