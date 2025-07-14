import { useDispatch, useSelector } from "react-redux";
import ContactUsSection from "../../components/sections/ContactUsSection/ContactUsSection";
import Hero from "../../components/sections/Hero/Hero";
import Partners from "../../components/sections/Partners/Partners";
import { useEffect } from "react";
import { getBanners } from "../../store/banners/bannersAction";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { banners, loading } = useSelector((state) => state.banners);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getBanners("contact"));
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>{t("helmet.contact_title")}</title>
        <meta name="description" content={t("helmet.contact_description")} />
        <meta property="og:title" content={t("helmet.contact_title")} />
        <meta
          property="og:description"
          content={t("helmet.contact_description")}
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section>
        <Hero banners={banners} loading={loading} />
        <ContactUsSection />
        <Partners />
      </section>
    </>
  );
};

export default ContactUs;
