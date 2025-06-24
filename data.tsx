import { Language } from "@/i18n/translations";
import { CodeSquare, HomeIcon, UserRound, Mail } from "lucide-react";

import Linkedin from "@/icons/linkedin.svg";
import Github from "@/icons/github.svg";
import Download from "@/icons/download.svg";
import { LanguageFunctionType } from "@/i18n";

export const socialNetworks = (language: Language) => [
  {
    id: 1,
    Logo: Linkedin,
    title: "Linkedin",
    src: "https://www.linkedin.com/in/abotlucas/",
    props: {},
  },
  {
    id: 2,
    Logo: Github,
    title: "Github",
    src: "https://github.com/AbotLucas",
    props: {},
  },
  {
    id: 3,
    Logo: Download,
    title: "Download CV",
    src: `/docs/AbotLucas${language == "es" ? "" : "Eng"}.pdf`,
    props: { download: true },
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="var(--color-secondary)" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "About Me",
    icon: (
      <UserRound size={25} color="var(--color-secondary)" strokeWidth={1} />
    ),
    link: "/about-me",
  },
  {
    id: 3,
    title: "Contact",
    icon: <Mail size={25} color="var(--color-secondary)" strokeWidth={1} />,
    link: "/contact",
  },
  {
    id: 4,
    title: "Projects",
    icon: (
      <CodeSquare size={25} color="var(--color-secondary)" strokeWidth={1} />
    ),
    link: "/projects",
  },
];

export const dataAboutPage = (t: LanguageFunctionType) => [
  {
    id: 1,
    title: t("job1Title"),
    subtitle: t("job1Subtitle"),
    description: t("job1Description"),
    date: t("job1Date"),
  },
  {
    id: 2,
    title: t("job2Title"),
    subtitle: t("job2Subtitle"),
    description: t("job2Description"),
    date: t("job2Date"),
  },
  {
    id: 3,
    title: t("job3Title"),
    subtitle: t("job3Subtitle"),
    description: t("job3Description"),
    date: t("job3Date"),
  },
];

export const dataProjects = (t: LanguageFunctionType) => [
  {
    id: 1,
    title: t("project1Title"),
    image: "/edeaLayout.jpeg",
    urlDemo: "https://oficinavirtual.edeaweb.com.ar/ingreso",
    description: t("project1Description"),
  },
  {
    id: 2,
    title: t("project2Title"),
    image: "/edeaSimulator.jpeg",
    urlDemo: "https://simulador.edeaweb.com.ar/",
    description: t("project2Description"),
  },
  {
    id: 3,
    title: t("project3Title"),
    description: t("project3Description"),
    image: "/datcom.jpeg",
  },
  {
    id: 4,
    title: t("project4Title"),
    description: t("project4Description"),
    image: "/camuzzi.jpeg",
    urlDemo: "https://oficinavirtual.camuzzigas.com.ar/",
  },
  {
    id: 5,
    title: t("project5Title"),
    description: t("project5Description"),
    image: "/distrisuper.jpeg",
  },
  {
    id: 6,
    title: t("project6Title"),
    description: t("project6Description"),
    image: "/avalith.jpeg",
    urlDemo: "https://www.avalith.net/",
  },
  {
    id: 7,
    title: t("project7Title"),
    description: t("project7Description"),
    image: "/microblogging.jpeg",
    urlGithub: "https://github.com/AbotLucas/microblogging",
  },
  {
    id: 8,
    title: t("project8Title"),
    description: t("project8Description"),
    image: "/oraculo.jpeg",
    urlGithub: "https://github.com/AbotLucas/Oraculo-DBZ",
    urlDemo: "https://oloraqlogame.web.app/",
  },
  {
    id: 9,
    title: t("project9Title"),
    description: t("project9Description"),
    image: "/listita.jpeg",
    urlGithub: "https://github.com/AbotLucas/listitaApp",
    urlDemo: "https://app-lista-de--compras.web.app/",
  },
  {
    id: 10,
    title: t("project10Title"),
    description: t("project10Description"),
    image: "/ruzzBros.jpeg",
    urlDemo: "https://ruzzarinbros-8e168.web.app/",
  },
];
