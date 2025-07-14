import { useTranslation } from "react-i18next";
import { GiMoebiusTriangle } from "react-icons/gi";

const Loader = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center">
      <img
        loading="lazy"
        src="/small-logo.png"
        className="w-18 lg:w-24 animate-bounce"
        alt="Loading"
      />

      {/* <GiMoebiusTriangle className="text-6xl lg:text-8xl text-light-red animate-spin" /> */}

      <h2 className="text-lg lg:text-2xl font-semibold text-light-red mt-4">
        {t("Loading")}...
      </h2>
    </div>
  );
};

export default Loader;
