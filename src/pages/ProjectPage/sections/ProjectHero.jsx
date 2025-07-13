import brandLogo from "../../../assets/images/in-drive.png";
import lightBar from "../../../assets/images/ligth-bar.png";

const ProjectHero = () => {
  return (
    <article className="container h-screen flex items-center justify-center">
      <img
        src={lightBar}
        alt="light bar"
        loading="lazy"
        className="absolute top-0 left-0 w-[1000px] object-cover z-[-1]"
      />

      <div className="flex flex-col gap-8 items-center text-center max-w-xl">
        <h1 className="text-6xl font-bold">Project title</h1>

        <div className="flex items-center gap-4">
          <img
            src={brandLogo}
            alt="brand logo"
            loading="lazy"
            className="w-32"
          />
          <span className="bg-white/20 border backdrop-blur-2xl rounded-full px-4 py-2">
            Project Category
          </span>
        </div>

        <p className="text-lg">
          Project description Project description Project description Project
          description Project description Project description Project
          description Project description Project description Project
          description
        </p>
      </div>
    </article>
  );
};

export default ProjectHero;
