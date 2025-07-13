import projectImg from "../../../assets/images/hero.jpg";

const ProjectImages = () => {
  const projectImages = [
    projectImg,
    projectImg,
    projectImg,
    projectImg,
    projectImg,
    projectImg,
    projectImg,
  ];

  return (
    <section className="container sectionPadding">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectImages.map((img, index) => {
          const positionInCycle = index % 5;
          const isFullWidth = positionInCycle === 0;

          return (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl ${
                isFullWidth ? "md:col-span-2" : "col-span-1"
              }`}
            >
              <img
                src={img}
                alt={`project ${index + 1}`}
                className="w-full h-full aspect-square object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectImages;
