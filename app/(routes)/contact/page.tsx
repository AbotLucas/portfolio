"use client";
import AvatarContact from "@/components/avatar-contact";
import ContactMe from "@/components/contact-form";
import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";
import { useLanguage } from "@/i18n";

const ContactsPage = () => {
  const {t} = useLanguage();
  return (
    <ContainerPage>
      <TransitionPage />
      <AvatarContact />
      <div className="flex flex-col items-center justify-start h-screen max-w-5xl mx-auto 2xl:mt-50">
        <div className="max-w-[450px]">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-3xl md:mb-5">
            {t("contact1")}<span className="font-bold text-secondary">{t("contact2")}</span>
          </h1>
        </div>
        <ContactMe />
      </div>
    </ContainerPage>
  );
};

export default ContactsPage;
