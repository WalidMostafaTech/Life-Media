import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import footerImg from "../../../assets/images/Footer.jpg";
import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";
import SkeletonFooter from "../../Loading/SkeletonLoading/SkeletonFooter";

const Footer = () => {
  const { t } = useTranslation();
  const { setting, offices, pages, loading } = useSelector(
    (state) => state.setting,
  );

  const linksList = [
    { name: "header.home", path: "/" },
    { name: "header.projects", path: "/projects" },
    { name: "header.services", path: "/services" },
    { name: "header.about", path: "/about" },
  ];

  if (loading) return <SkeletonFooter />;

  return (
    <footer
      style={{ backgroundImage: `url(${footerImg})` }}
      className="bg-dark-red bg-cover bg-no-repeat relative 
      after:absolute after:inset-0 after:bg-light-red/10"
    >
      <div className="container sectionPadding relative z-10">
        <TopFooter
          pages={pages}
          offices={offices}
          linksList={linksList}
          setting={setting}
          t={t}
        />

        <BottomFooter setting={setting} t={t} />
      </div>
    </footer>
  );
};

export default Footer;
