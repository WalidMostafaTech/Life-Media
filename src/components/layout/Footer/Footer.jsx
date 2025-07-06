import logoImg from "../../../assets/images/logo-white.png";
import LoadingSection from "../Loading/LoadingSection";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSetting } from "../../../store/setting/settingAction";
import { useTranslation } from "react-i18next";
import footerImg from "../../../assets/images/Footer.jpg";
import FooterLinks from "./FooterLinks";
import { FooterList } from "../../../data/data";
import { Link } from "react-router-dom";

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
    <footer
      style={{ backgroundImage: `url(${footerImg})` }}
      className="bg-dark-red bg-cover bg-no-repeat"
    >
      <div className="bg-light-red/10 sectionPadding">
        <div className="container">
          <img loading="lazy" src={logoImg} alt="Logo" className="mx-auto" />

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 py-8">
            {FooterList.map((item, index) => (
              <FooterLinks key={index} title={item.title} links={item.links} />
            ))}
          </div>

          <div className="text-center pt-8 border-t border-gray-500">
            <p className="text-center">
              {t("footer.rights")}{" "}
              <Link to="#!" className="font-bold text-light-red">
                {t("footer.life_media")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
