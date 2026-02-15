import ContactUsSection from "../../components/sections/ContactUsSection";
import Partners from "../../components/sections/Partners";
import ServicesSection from "./sections/ServicesSection";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import HeroSection from "../../components/sections/HeroSection";

const Services = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("helmet.services_title")}</title>
        <meta name="description" content={t("helmet.services_description")} />
        <meta property="og:title" content={t("helmet.services_title")} />
        <meta
          property="og:description"
          content={t("helmet.services_description")}
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div>
        <HeroSection page="services" />
        <ServicesSection />
        <ContactUsSection />
        <Partners />
      </div>
    </>
  );
};

export default Services;
