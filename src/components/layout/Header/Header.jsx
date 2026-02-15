import { useState, useEffect, useRef } from "react";
import { HiMenu } from "react-icons/hi";
import logoImg from "../../../assets/images/logo.png";
import { GoArrowUpRight } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import LanguageSwitcher from "../../common/LanguageSwitcher";

const Header = () => {
  const [activeNav, setActiveNav] = useState(false);
  const headerRef = useRef();

  const { t } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linksList = [
    { name: "header.home", path: "/" },
    { name: "header.projects", path: "/projects" },
    { name: "header.services", path: "/services" },
    { name: "header.about", path: "/about" },
  ];

  return (
    <header
      className="container fixed left-1/2 -translate-x-1/2 top-4 z-50"
      ref={headerRef}
    >
      <div
        className={`flex flex-col lg:flex-row items-center justify-between lg:gap-4 px-4 py-2 bg-black/50 backdrop-blur-2xl shadow-md rounded-4xl`}
      >
        <div className="flex items-center justify-between gap-2 w-full lg:w-auto">
          <Link to="/" onClick={() => setActiveNav(false)} className="hover:scale-105 duration-200">
            <img loading="lazy" src={logoImg} alt="Logo" />
          </Link>
          <span className="text-3xl cursor-pointer lg:hidden">
            {activeNav ? (
              <IoClose onClick={() => setActiveNav(false)} />
            ) : (
              <HiMenu onClick={() => setActiveNav(true)} />
            )}
          </span>
        </div>

        <div
          className={`flex flex-col lg:flex-row items-center justify-between gap-4 w-full lg:w-2/3 xl:ps-8
          overflow-hidden lg:overflow-visible transition-all duration-500 ease-in-out
          ${activeNav ? "max-h-[600px] py-4 opacity-100" : "max-h-0 py-0 opacity-0"}
          lg:max-h-full lg:py-0 lg:opacity-100
          `}
        >
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
            <LanguageSwitcher />
            <Link to="/contact-us" className="mainBtn">
              {t("header.join_us")} <GoArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
