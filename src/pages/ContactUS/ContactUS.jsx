import ContactUsSection from "../../components/sections/ContactUsSection";
import HeroSection from "../../components/sections/HeroSection";
import Partners from "../../components/sections/Partners";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();

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
        <HeroSection page="contact" />
        <ContactUsSection />
        <Partners />
      </section>
    </>
  );
};

export default ContactUs;
