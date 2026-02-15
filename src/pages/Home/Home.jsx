import CompanyState from "../../components/sections/CompanyState";
import Partners from "../../components/sections/Partners";
import ServicesSection from "./sections/ServicesSection/ServicesSection";
import Testimonials from "../../components/sections/Testimonials";
import FAQ from "../../components/sections/FAQ";
import ContactUsSection from "../../components/sections/ContactUsSection";
import VideoSection from "./sections/VideoSection";
import { Helmet } from "react-helmet";
import ProjectsSection from "./sections/ProjectsSection";
import { useTranslation } from "react-i18next";
import NewLiveMedia from "./sections/NewLiveMedia";
import SuccessStory from "./sections/SuccessStory";
import LatestVideos from "./sections/LatestVideos";
import LatestDesigns from "./sections/LatestDesigns";
import HeroSection from "../../components/sections/HeroSection";

const Home = () => {
  const { t } = useTranslation();

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
        <HeroSection page="home" />
        <NewLiveMedia />
        <CompanyState />
        <VideoSection />
        <Partners />
        <LatestVideos />
        <ProjectsSection />
        <LatestDesigns />
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
