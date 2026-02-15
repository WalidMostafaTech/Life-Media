import { useQuery } from "@tanstack/react-query";
import ContactUsSection from "../../components/sections/ContactUsSection";
import FAQ from "../../components/sections/FAQ";
import HeroSection from "../../components/sections/HeroSection";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { getProjects } from "../../api/projectsServices";
import FilterProjects from "./sections/FilterProjects";
import { useState } from "react";
import CTA from "../../components/common/CTA";
import ProjectCard from "../../components/common/ProjectCard";
import SkeletonProjects from "../../components/Loading/SkeletonLoading/SkeletonProjects";

const Projects = () => {
  const { t } = useTranslation();

  const [activeCategory, setActiveCategory] = useState("all");

  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects_page"],
    queryFn: getProjects,
  });

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects?.filter((project) => project.category.name === activeCategory);

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
        <HeroSection page="projects" />

        <FilterProjects
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {isLoading ? (
          <SkeletonProjects />
        ) : filteredProjects.length === 0 ? (
          <div className="container sectionPadding space-y-4 text-center">
            <p>no projects</p>
          </div>
        ) : (
          <section className="container sectionPadding space-y-4 xl:max-w-6xl mx-auto">
            {filteredProjects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </section>
        )}

        <CTA
          text1={t("cta.seen_something")}
          text2={t("cta.next_success")}
          btnText={t("cta.start_project")}
        />

        <FAQ />

        <ContactUsSection />
      </section>
    </>
  );
};

export default Projects;
