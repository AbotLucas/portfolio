import { useLanguage } from "@/i18n";

import EngFlag from "@/icons/enFlag.svg";
import EspFlag from "@/icons/esFlag.svg";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLang = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <button
      onClick={toggleLang}
      className="flex items-center bg-tertiary rounded-l-3xl
                py-1 fixed text-primary right-0 top-0 pl-1
                rounded-r-none border-r-0 cursor-pointer"
    >
      <span className={language === "es" ? "opacity-100" : "opacity-50"}>
        <EspFlag />
      </span>
      |
      <span className={language === "en" ? "opacity-100" : "opacity-50"}>
        <EngFlag />
      </span>
    </button>
  );
};

export default LanguageSwitch;
