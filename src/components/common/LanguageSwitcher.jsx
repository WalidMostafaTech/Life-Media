import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../store/languageSlice/languageSlice";
import LoadingModal from "../Loading/LoadingModal";

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const { lang } = useSelector((state) => state.language);

  const [openLoading, setOpenLoading] = useState(false);

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const handleToggle = () => {
    dispatch(changeLanguage(lang === "ar" ? "en" : "ar"));
    setOpenLoading(true);
  };

  return (
    <>
      <button onClick={handleToggle} className="mainBtn transparent py-1! text-sm!">
        {lang === "en" ? "العربية" : "English"}
      </button>

      {openLoading && <LoadingModal />}
    </>
  );
};

export default LanguageSwitcher;
