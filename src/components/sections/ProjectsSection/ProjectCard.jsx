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
        className="absolute inset-0 z-10 bg-black/60 w-full h-full flex flex-col lg:flex-row justify-end lg:justify-between lg:items-end gap-4 p-8 opacity-0 
        group-hover:opacity-100 transition-opacity duration-500"
      >
        <div className="text-white">
          <h3 className="text-3xl font-bold line-clamp-1">{project.title}</h3>
          <p className="text-lg line-clamp-2">{project.short_description}</p>
        </div>
        <Link to={`/projects/${project.id}`} className="mainBtn transparent">
          {t("projects.see_project")} <GoArrowUpRight />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
