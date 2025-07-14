import logoImg from "../../../assets/images/logo-white.png";
import { FaInstagram, FaBehance, FaWhatsapp, FaFacebook } from "react-icons/fa";
import LoadingSection from "../Loading/LoadingSection";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSetting } from "../../../store/setting/settingAction";
import { useTranslation } from "react-i18next";
import footerImg from "../../../assets/images/Footer.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const { setting, loading } = useSelector((state) => state.setting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSetting());
  }, [dispatch]);

  const linksList = [
    { name: "header.home", path: "/" },
    { name: "header.projects", path: "/projects" },
    { name: "header.services", path: "/services" },
    { name: "header.about", path: "/about" },
    { name: "header.careers", path: "/contact-us" },
  ];

  if (loading) {
    return <LoadingSection />;
  }

  return (
    <footer
      style={{ backgroundImage: `url(${footerImg})` }}
      className="bg-dark-red bg-cover bg-no-repeat"
    >
      <div className="sectionPadding bg-light-red/10">
        <div className="container">
          <div className="container grid lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <img
                loading="lazy"
                src={logoImg}
                alt="Logo"
                className="w-42 lg:w-60"
              />
              <p>{t("footer.title")}</p>
            </div>

            <div className="flex flex-col items-center gap-2 lg:gap-4 text-center">
              <h3 className="font-bold text-2xl">{t("footer.explore")}</h3>
              <ul className="space-y-1">
                {linksList.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="hover:text-light-red transition"
                    >
                      {t(link.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center gap-2 lg:gap-4 text-center">
              <h3 className="font-bold text-2xl">{t("footer.lets_connect")}</h3>
              {setting?.email && (
                <p>
                  {t("footer.email")}:{" "}
                  <a
                    href={`mailto:${setting?.email}`}
                    className="hover:text-light-red transition"
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

              <Link to={"/contact-us"} className="mainBtn light">
                {t("footer.button")}
              </Link>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="container grid lg:grid-cols-3 gap-4 mt-8">
            <p className="text-center">{t("footer.rights")}</p>

            <div className="flex justify-center flex-wrap gap-4">
              {setting?.whatsapp && (
                <a
                  href={`https://wa.me/${setting?.whatsapp}`}
                  target="_blank"
                  className="w-10 h-10 rounded-full border flex items-center justify-center text-2xl hover:text-light-red transition"
                >
                  <FaWhatsapp />
                </a>
              )}
              {setting?.instagram && (
                <a
                  href={setting?.instagram}
                  target="_blank"
                  className="w-10 h-10 rounded-full border flex items-center justify-center text-2xl hover:text-light-red transition"
                >
                  <FaInstagram />
                </a>
              )}
              {setting?.facebook && (
                <a
                  href={setting?.facebook}
                  target="_blank"
                  className="w-10 h-10 rounded-full border flex items-center justify-center text-2xl hover:text-light-red transition"
                >
                  <FaFacebook />
                </a>
              )}
              {setting?.behance && (
                <a
                  href={setting?.behance}
                  target="_blank"
                  className="w-10 h-10 rounded-full border flex items-center justify-center text-2xl hover:text-light-red transition"
                >
                  <FaBehance />
                </a>
              )}
            </div>

            <div className="text-center">
              <a href="#!" className="hover:text-light-red transition">
                {t("footer.terms")}
              </a>{" "}
              |{" "}
              <a href="#!" className="hover:text-light-red transition">
                {t("footer.privacy")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
