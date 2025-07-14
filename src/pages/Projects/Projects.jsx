import { useDispatch, useSelector } from "react-redux";
import ContactUsSection from "../../components/sections/ContactUsSection/ContactUsSection";
import FAQ from "../../components/sections/FAQ/FAQ";
import Hero from "../../components/sections/Hero/Hero";
import ProjectsSection from "../../components/sections/ProjectsSection/ProjectsSection";
import { getBanners } from "../../store/banners/bannersAction";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { banners, loading } = useSelector((state) => state.banners);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getBanners("projects"));
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>{t("helmet.projects_title")}</title>
        <meta name="description" content={t("helmet.projects_description")} />
        <meta property="og:title" content={t("helmet.projects_title")} />
        <meta
          property="og:description"
          content={t("helmet.projects_description")}
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section>
        <Hero banners={banners} loading={loading} />
        <ProjectsSection />
        <FAQ />
        <ContactUsSection />
      </section>
    </>
  );
};

export default Projects;
