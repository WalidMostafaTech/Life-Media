import CompanyState from "../../components/sections/CompanyState";
import ContactUsSection from "../../components/sections/ContactUsSection";
import FAQ from "../../components/sections/FAQ";
import HeroSection from "../../components/sections/HeroSection";
import Partners from "../../components/sections/Partners";
import Testimonials from "../../components/sections/Testimonials";
import AboutUs from "./sections/AboutUs";
import HowWeWork from "./sections/HowWeWork";
import OurValue from "./sections/OurValue";
import WhyUS from "./sections/WhyUS";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { getAboutUsPage } from "../../api/pagesServices";
import SkeletonAboutPage from "../../components/Loading/SkeletonLoading/SkeletonAboutPage";

const About = () => {
  const { t } = useTranslation();

  const { data: about = [], isLoading } = useQuery({
    queryKey: ["about_us_page"],
    queryFn: getAboutUsPage,
  });

  if (isLoading) return <SkeletonAboutPage />;

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
        <HeroSection page="about" />
        <AboutUs data={about} />
        <CompanyState />
        <OurValue data={about?.our_values} />
        <Partners />
        <HowWeWork data={about?.how_we_work} />
        <WhyUS data={about} />
        <Testimonials />
        <FAQ />
        <ContactUsSection />
      </section>
    </>
  );
};

export default About;
