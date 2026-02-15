import { useTranslation } from "react-i18next";
import SectionTitle from "../../../components/common/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { getProjectsHome } from "../../../api/homeServices";
import SkeletonProjects from "../../../components/Loading/SkeletonLoading/SkeletonProjects";
import ProjectCard from "../../../components/common/ProjectCard";
import CTA from "../../../components/common/CTA";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const ProjectsSection = () => {
  const { t } = useTranslation();

  const { data, isLoading } = useQuery({
    queryKey: ["projects", "home"],
    queryFn: getProjectsHome,
  });

  if (isLoading) return <SkeletonProjects />;

  if (!data?.length || !data) return null;

  return (
    <article id="Projects" className="container sectionPadding">
      <SectionTitle title={t("projects.title")} />

      <section className="space-y-4 max-w-6xl mx-auto">
        {data?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

      <Link
        to="/projects"
        className="flex items-center gap-1 w-max mx-auto mt-6 font-semibold text-light-red hover:underline"
      >
        {t("projects.view_all")} <GoArrowUpRight className="text-3xl" />
      </Link>

      <CTA
        text1={t("cta.seen_something")}
        text2={t("cta.next_success")}
        btnText={t("cta.start_project")}
      />
    </article>
  );
};

export default ProjectsSection;
