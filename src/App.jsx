import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import { useSelector } from "react-redux";
import "./i18n.js";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const lang = useSelector((state) => state.language.lang);

  useEffect(() => {
    document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }, [lang]);

  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
