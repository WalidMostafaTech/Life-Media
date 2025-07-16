import LoadingSection from "../Loading/LoadingSection";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSetting } from "../../../store/setting/settingAction";
import { useTranslation } from "react-i18next";
import footerImg from "../../../assets/images/Footer.jpg";
import { getPages } from "../../../store/pages/pagesAction";
import { getOffices } from "../../../store/offices/officesAction";
import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";

const Footer = () => {
  const { t } = useTranslation();
  const { setting, loading } = useSelector((state) => state.setting);
  const { pages } = useSelector((state) => state.pages);
  const { offices } = useSelector((state) => state.offices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSetting());
    dispatch(getPages());
    dispatch(getOffices());
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
