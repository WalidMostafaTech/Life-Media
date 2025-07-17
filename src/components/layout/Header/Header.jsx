import { useState, useEffect, useRef } from "react";
import { HiMenu } from "react-icons/hi";
import logoImg from "../../../assets/images/logo.png";
import { GoArrowUpRight } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { toggleLanguage } from "../../../store/languageSlice";
import Loading from "../Loading/LoadingPage";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [activeNav, setActiveNav] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const headerRef = useRef();

  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language.lang);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChangeLang = () => {
    dispatch(toggleLanguage());
    window.location.reload();
    setShowLoading(true);
    setActiveNav(false);
  };

  const linksList = [
    { name: "header.home", path: "/" },
    { name: "header.projects", path: "/projects" },
    { name: "header.services", path: "/services" },
    { name: "header.about", path: "/about" },
  ];

  return (
    <>
      <header
        className="container fixed left-1/2 -translate-x-1/2 top-4 z-50"
        ref={headerRef}
      >
        <div
          className={`flex flex-col lg:flex-row items-center justify-between gap-4 px-4 py-2 lg:py-8 bg-black/50 backdrop-blur-2xl shadow-md rounded-4xl 
            overflow-hidden transition-all duration-500 ease-in-out max-h-[60px] ${
              activeNav ? "max-h-[500px] lg:max-h-[60px]" : ""
            }`}
        >
          <div className="flex items-center justify-between gap-2 w-full lg:w-auto">
            <img loading="lazy" src={logoImg} alt="Logo" />
            <span className="text-3xl cursor-pointer lg:hidden">
              {activeNav ? (
                <IoClose onClick={() => setActiveNav(false)} />
              ) : (
                <HiMenu onClick={() => setActiveNav(true)} />
              )}
            </span>
          </div>

          <nav className="flex flex-col items-center lg:flex-row gap-4 lg:gap-8">
            {linksList.map((link) => (
              <NavLink
                to={link.path}
                key={link.name}
                className="navLink capitalize"
                onClick={() => setActiveNav(false)}
              >
                {t(link.name)}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center justify-center flex-wrap gap-2">
            <Link to="/contact-us" className="mainBtn">
              {t("header.join_us")} <GoArrowUpRight />
            </Link>
            <button onClick={handleChangeLang} className="mainBtn transparent">
              {lang === "en" ? "العربية" : "English"}
            </button>
          </div>
        </div>
      </header>

      {showLoading && <Loading overlay />}
    </>
  );
};

export default Header;
