import { useDispatch, useSelector } from "react-redux";
import ContactUsSection from "../../components/sections/ContactUsSection/ContactUsSection";
import Hero from "../../components/sections/Hero/Hero";
import Partners from "../../components/sections/Partners/Partners";
import ServicesSection from "./ServicesSection";
import { useEffect } from "react";
import { getBanners } from "../../store/banners/bannersAction";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { banners, loading } = useSelector((state) => state.banners);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getBanners("services"));
  }, [dispatch]);

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
        <Hero banners={banners} loading={loading} />
        <ServicesSection />
        <ContactUsSection />
        <Partners />
      </div>
    </>
  );
};

export default Services;
