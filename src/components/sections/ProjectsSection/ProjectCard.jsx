import { useTranslation } from "react-i18next";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, home, isFullWidth }) => {
  const { t } = useTranslation();
  return (
    <div
      key={project.id}
      className={`group relative h-[300px] lg:h-[540px] border-6 border-light-gray rounded-4xl overflow-hidden ${
        home ? "col-span-1" : isFullWidth ? "lg:col-span-2" : "col-span-1"
      }`}
    >
      <img
        loading="lazy"
        src={project.image_url}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-120 transition-transform duration-500"
      />

      <div
        className="absolute inset-0 z-10 bg-transparent w-full h-full flex flex-col 
        justify-between gap-4 p-4 lg:p-8 group-hover:bg-black/60 duration-500"
      >
        <span className="bg-white/20 border backdrop-blur-3xl rounded-full px-4 py-2 w-fit">
          {project.category.name}
        </span>

        <div
          className="flex flex-col lg:flex-row lg:items-end gap-4 opacity-0 
          group-hover:opacity-100 duration-500"
        >
          <div className="text-white lg:flex-1">
            <h3 className="text-2xl lg:text-3xl font-bold line-clamp-1">
              {project.title}
            </h3>
            <p className="lg:text-lg line-clamp-2">
              {project.short_description}
            </p>
          </div>
          <Link to={`/projects/${project.id}`} className="mainBtn transparent">
            {t("projects.see_project")} <GoArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
