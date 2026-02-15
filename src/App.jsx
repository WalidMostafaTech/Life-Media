import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import ScrollToTopBtn from "./components/behaviors/ScrollToTopBtn.jsx";
import FixedSection from "./components/behaviors/FixedSection.jsx";
import { useDispatch } from "react-redux";
import {
  fetchGovernorates,
  fetchOffices,
  fetchPages,
  fetchSetting,
} from "./store/setting/settingAction.js";

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(fetchSetting());
    dispatch(fetchGovernorates());
    dispatch(fetchOffices());
    dispatch(fetchPages());
  }, [dispatch]);

  return (
    <main>
      <Header />

      <div className="min-h-dvh">
        <Outlet />
      </div>

      <Footer />

      <ScrollToTopBtn />
      <FixedSection />
    </main>
  );
}

export default App;
