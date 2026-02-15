import { useTranslation } from "react-i18next";
import logo from "../../assets/images/small-logo.png";
import { GiMoebiusTriangle } from "react-icons/gi";

const Loader = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <img
        loading="lazy"
        src={logo}
        className="w-18 lg:w-24 animate-bounce"
        alt="Loading"
      />

      {/* <GiMoebiusTriangle className="text-6xl lg:text-8xl text-light-red animate-spin" /> */}

      <h2 className="text-lg font-semibold text-white mt-4">{t("loading")}</h2>
    </div>
  );
};

export default Loader;
