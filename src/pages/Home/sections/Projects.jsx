import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "../../../components/common/SectionTitle";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect } from "react";
import { getProjects } from "../../../store/projects/projectsAction";
import Loading from "../../../components/layout/Loading/Loading";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const { projects, loading } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section id="Projects" className="container sectionPadding">
      <SectionTitle title={t("projects.title")} />

      <div className="space-y-4">
        {projects?.map((project) => (
          <div
            key={project.id}
            className="group relative h-[300px] lg:h-[540px] border-6 border-light-gray rounded-4xl overflow-hidden"
          >
            <img
              src={project.image_url}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-120 transition-transform duration-500"
            />

            <div
              className="absolute inset-0 z-10 bg-black/40 w-full h-full flex flex-wrap justify-between items-end gap-4 p-8 opacity-0 
              group-hover:opacity-100 transition-opacity duration-500"
            >
              <div className="text-white">
                <h3 className="text-3xl font-bold line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-lg line-clamp-2">
                  {project.short_description}
                </p>
              </div>
              <button className="mainBtn transparent">
                {t("projects.see_project")} <GoArrowUpRight />
              </button>
            </div>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="flex items-center gap-1 w-max mx-auto mt-6 font-semibold text-light-red hover:underline"
      >
        {t("projects.view_all")} <GoArrowUpRight className="text-3xl" />
      </a>
    </section>
  );
};

export default Projects;
