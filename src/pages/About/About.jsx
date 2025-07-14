import { useDispatch, useSelector } from "react-redux";
import CompanyState from "../../components/sections/CompanyState/CompanyState";
import ContactUsSection from "../../components/sections/ContactUsSection/ContactUsSection";
import FAQ from "../../components/sections/FAQ/FAQ";
import Hero from "../../components/sections/Hero/Hero";
import Partners from "../../components/sections/Partners/Partners";
import Testimonials from "../../components/sections/Testimonials/Testimonials";
import AboutUs from "./sections/AboutUs";
import HowWeWork from "./sections/HowWeWork";
import OurValue from "./sections/OurValue";
import WhyUS from "./sections/WhyUS";
import { useEffect } from "react";
import { getBanners } from "../../store/banners/bannersAction";
import { getAbout } from "../../store/about/aboutAction";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const About = () => {
  const { banners, loading } = useSelector((state) => state.banners);
  const { about, loading: aboutLoading } = useSelector((state) => state.about);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getBanners("about"));
    dispatch(getAbout());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>{t("helmet.about_title")}</title>
        <meta name="description" content={t("helmet.about_description")} />
        <meta property="og:title" content={t("helmet.about_title")} />
        <meta
          property="og:description"
          content={t("helmet.about_description")}
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section>
        <Hero banners={banners} loading={loading} />
        <AboutUs data={about} loading={aboutLoading} />
        <CompanyState />
        <OurValue data={about?.our_values} loading={aboutLoading} />
        <Partners />
        <HowWeWork data={about?.how_we_work} loading={aboutLoading} />
        <WhyUS data={about} loading={aboutLoading} />
        <Testimonials />
        <FAQ />
        <ContactUsSection />
      </section>
    </>
  );
};

export default About;
