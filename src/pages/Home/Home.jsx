import CompanyState from "../../components/sections/CompanyState/CompanyState";
import Partners from "../../components/sections/Partners/Partners";
import ServicesSection from "./sections/ServicesSection/ServicesSection";
import Testimonials from "../../components/sections/Testimonials/Testimonials";
import SuccessStory from "./sections/SuccessStory/SuccessStory";
import FAQ from "../../components/sections/FAQ/FAQ";
import ContactUsSection from "../../components/sections/ContactUsSection/ContactUsSection";
import Hero from "../../components/sections/Hero/Hero";
import VideoSection from "./sections/VideoSection/VideoSection";
import VideosSlider from "./sections/VideosSlider/VideosSlider";
import { Helmet } from "react-helmet";
import ProjectsSection from "../../components/sections/ProjectsSection/ProjectsSection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBanners } from "../../store/banners/bannersAction";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { banners, loading } = useSelector((state) => state.banners);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getBanners("home"));
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>{t("helmet.home_title")}</title>
        <meta name="description" content={t("helmet.home_description")} />
        <meta property="og:title" content={t("helmet.home_title")} />
        <meta
          property="og:description"
          content={t("helmet.home_description")}
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section>
        <Hero banners={banners} loading={loading} />
        <CompanyState />
        <VideoSection />
        <Partners />
        <VideosSlider />
        <ProjectsSection home />
        <ServicesSection />
        <Testimonials />
        <SuccessStory />
        <FAQ />
        <ContactUsSection />
      </section>
    </>
  );
};

export default Home;
