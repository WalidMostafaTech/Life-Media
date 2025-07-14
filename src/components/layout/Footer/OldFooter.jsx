import logoImg from "../../../assets/images/logo-white.png";
import { FaInstagram, FaBehance, FaWhatsapp, FaFacebook } from "react-icons/fa";
import LoadingSection from "../Loading/LoadingSection";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSetting } from "../../../store/setting/settingAction";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const { setting, loading } = useSelector((state) => state.setting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSetting());
  }, [dispatch]);

  if (loading) {
    return <LoadingSection />;
  }

  return (
    <footer className="bg-dark-red sectionPadding">
      <div className="container bg-dark-red grid lg:grid-cols-3 gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <img loading="lazy" src={logoImg} alt="Logo" />
          <p>{t("footer.title")}</p>
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <h3 className="font-bold text-2xl">{t("footer.explore")}</h3>
          <ul className="space-y-1">
            <li>
              <a href="#About" className="hover:text-gray-400 transition">
                {t("footer.about")}
              </a>
            </li>
            <li>
              <a href="#Services" className="hover:text-gray-400 transition">
                {t("footer.services")}
              </a>
            </li>
            <li>
              <a href="#Projects" className="hover:text-gray-400 transition">
                {t("footer.projects")}
              </a>
            </li>
            <li>
              <a
                href="#SuccessStories"
                className="hover:text-gray-400 transition"
              >
                {t("footer.success")}
              </a>
            </li>
            <li>
              <a href="#Careers" className="hover:text-gray-400 transition">
                {t("footer.careers")}
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <h3 className="font-bold text-2xl">{t("footer.lets_connect")}</h3>
          {setting?.email && (
            <p>
              {t("footer.email")}:{" "}
              <a
                href={`mailto:${setting?.email}`}
                className="hover:text-gray-400 transition"
              >
                {setting?.email}
              </a>
            </p>
          )}
          {setting?.phone && (
            <p>
              {t("footer.phone")}: {setting?.phone}
            </p>
          )}
          {setting?.address && (
            <p>
              {t("footer.location")}: {setting?.address}
            </p>
          )}

          <button className="mainBtn light">{t("footer.button")}</button>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container bg-dark-red grid lg:grid-cols-3 gap-4 mt-8">
        <p className="text-center">{t("footer.rights")}</p>

        <div className="flex justify-center flex-wrap gap-4">
          {setting?.whatsapp && (
            <a
              href={setting?.whatsapp}
              target="_blank"
              className="w-10 h-10 rounded-full border flex items-center justify-center text-2xl hover:text-gray-400 transition"
            >
              <FaWhatsapp />
            </a>
          )}
          {setting?.instagram && (
            <a
              href={setting?.instagram}
              target="_blank"
              className="w-10 h-10 rounded-full border flex items-center justify-center text-2xl hover:text-gray-400 transition"
            >
              <FaInstagram />
            </a>
          )}
          {setting?.facebook && (
            <a
              href={setting?.facebook}
              target="_blank"
              className="w-10 h-10 rounded-full border flex items-center justify-center text-2xl hover:text-gray-400 transition"
            >
              <FaFacebook />
            </a>
          )}
          {setting?.behance && (
            <a
              href={setting?.behance}
              target="_blank"
              className="w-10 h-10 rounded-full border flex items-center justify-center text-2xl hover:text-gray-400 transition"
            >
              <FaBehance />
            </a>
          )}
        </div>

        <div className="text-center">
          <a href="#!" className="hover:text-gray-400 transition">
            {t("footer.terms")}
          </a>{" "}
          |{" "}
          <a href="#!" className="hover:text-gray-400 transition">
            {t("footer.privacy")}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



