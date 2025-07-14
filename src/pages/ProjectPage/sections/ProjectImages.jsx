const ProjectImages = ({ projectImages = [] }) => {
  if (!projectImages.length) return null;

  const getGroupedImages = (images) => {
    const result = [];
    let i = 0;
    let isTwo = true;

    while (i < images.length) {
      const groupSize = isTwo ? 2 : 3;
      result.push(images.slice(i, i + groupSize));
      i += groupSize;
      isTwo = !isTwo;
    }

    return result;
  };

  const groupedImages = getGroupedImages(projectImages);

  return (
    <section className="container sectionPadding space-y-4">
      {groupedImages.map((group, groupIndex) => {
        const isEvenRow = groupIndex % 2 === 0;

        return (
          <div
            key={groupIndex}
            className={`grid gap-4 ${
              isEvenRow
                ? "grid-cols-1 lg:grid-cols-2"
                : "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
            }`}
          >
            {group.map((poster, imgIndex) => (
              <div key={poster.id || imgIndex} className="overflow-hidden">
                <img
                  src={poster.image_url}
                  alt={`project-${groupIndex}-${imgIndex}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        );
      })}
    </section>
  );
};

export default ProjectImages;
