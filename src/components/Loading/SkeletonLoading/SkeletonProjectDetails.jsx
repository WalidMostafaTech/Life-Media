import Skeleton from "./Skeleton";

const SkeletonProjectDetails = ({ total = 6 }) => {
  const generateGroups = (count) => {
    const result = [];
    let i = 0;
    let isTwo = true;

    while (i < count) {
      const groupSize = isTwo ? 2 : 3;
      result.push(new Array(Math.min(groupSize, count - i)).fill(null));
      i += groupSize;
      isTwo = !isTwo;
    }

    return result;
  };

  const groups = generateGroups(total);

  return (
    <section>
      <article className="container h-[60vh] lg:h-[90vh] flex items-center justify-center overflow-hidden relative">
        {/* Background bar placeholder */}
        <div className="absolute top-[40px] lg:-top-18 left-1/2 -translate-x-1/2 w-full h-32 bg-black/20 rounded-xl z-[-1] animate-pulse" />

        <div className="flex flex-col gap-8 items-center text-center max-w-xl w-full">
          {/* Title */}
          <Skeleton height="h-10 lg:h-16" width="w-3/4" />

          {/* Logo + Category */}
          <div className="flex flex-wrap items-center justify-center gap-8 w-full">
            <Skeleton width="w-32" height="h-16" rounded="rounded-md" />
            <Skeleton width="w-28" height="h-10" rounded="rounded-full" />
          </div>

          {/* Description */}
          <div className="space-y-3 w-full">
            <Skeleton height="h-4" />
            <Skeleton height="h-4" width="w-5/6" />
            <Skeleton height="h-4" width="w-2/3" />
          </div>
        </div>
      </article>

      <section className="container sectionPadding space-y-4">
        {groups.map((group, groupIndex) => {
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
              {group.map((_, imgIndex) => (
                <Skeleton
                  key={imgIndex}
                  height="h-64 lg:h-80"
                  rounded="rounded-lg"
                />
              ))}
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default SkeletonProjectDetails;
