import lightBar from "../../../assets/images/light-bar.png";

const ProjectHero = ({ project }) => {
  return (
    <article className="container h-[60vh] lg:h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={lightBar}
        alt="light bar"
        loading="lazy"
        className="absolute top-[40px] lg:-top-18 left-1/2 transform -translate-x-1/2 w-full object-cover z-[-1]"
      />

      <div className="flex flex-col gap-8 items-center text-center max-w-xl">
        <h1 className="text-4xl lg:text-6xl font-bold">{project?.title}</h1>

        <div className="flex flex-wrap items-center gap-8">
          <img
            src={project?.logo_url}
            alt="brand logo"
            loading="lazy"
            className="w-32"
          />
          <span className="bg-white/20 border backdrop-blur-2xl rounded-full px-4 py-2">
            {project?.category?.name}
          </span>
        </div>

        <p className="lg:text-lg">{project?.short_description}</p>
      </div>
    </article>
  );
};

export default ProjectHero;
