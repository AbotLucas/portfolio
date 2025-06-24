import { useLanguage } from "@/i18n";

import EngFlag from "@/icons/enFlag.svg";
import EspFlag from "@/icons/esFlag.svg";

const LanguageSwitch = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLang = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <button
      onClick={toggleLang}
      className="flex items-center bg-tertiary rounded-l-3xl
                py-1 fixed text-gray-300 right-2 top-2 pl-1
                rounded-r-none border-r-0 cursor-pointer
                font-bold text-xs"
    >
      <span
        className={`border-r-1 border-primary flex flex-row ${
          language === "es" ? "opacity-100" : "opacity-50"
        }`}
        title={`${t("switchTo") + t("spanish")}`}
      >
        ES
        <EspFlag />
      </span>
      <span
        className={`flex flex-row ${
          language === "en" ? "opacity-100" : "opacity-50"
        }`}
        title={`${t("switchTo") + t("english")}`}
      >
        <EngFlag />
        EN
      </span>
    </button>
  );
};

export default LanguageSwitch;
