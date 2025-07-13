import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "../../common/SectionTitle";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect } from "react";
import { getProjects } from "../../../store/projects/projectsAction";
import { useTranslation } from "react-i18next";
import CTA from "../../common/CTA";
import EmptySection from "../../layout/EmptySection/EmptySection";
import LoadingSection from "../../layout/Loading/LoadingSection";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import FilterProjects from "./FilterProjects";

const ProjectsSection = ({ home = false }) => {
  const { t } = useTranslation();
  const { projects, loading } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  const displayedProjects = home ? projects.slice(0, 3) : projects;

  if (loading) return <LoadingSection />;

  return (
    <>
      {displayedProjects.length > 0 ? (
        <>
          <article id="Projects" className="container sectionPadding">
            {home && <SectionTitle title={t("projects.title")} />}

            {!home && <FilterProjects />}

            <section
              className={`${
                home ? "grid grid-cols-1" : "grid grid-cols-1 lg:grid-cols-2"
              } gap-4`}
            >
              {displayedProjects.map((project, index) => {
                const isFullWidth = index % 5 === 0;

                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    home={home}
                    isFullWidth={isFullWidth}
                  />
                );
              })}
            </section>

            {home && (
              <Link
                to="/projects"
                className="flex items-center gap-1 w-max mx-auto mt-6 font-semibold text-light-red hover:underline"
              >
                {t("projects.view_all")} <GoArrowUpRight className="text-3xl" />
              </Link>
            )}
          </article>

          {
            <CTA
              text1={t("cta.seen_something")}
              text2={t("cta.next_success")}
              btnText={t("cta.start_project")}
            />
          }
        </>
      ) : (
        <EmptySection />
      )}
    </>
  );
};

export default ProjectsSection;
