import Skeleton from "./Skeleton";

const SkeletonProjects = () => {
  return (
    <section className="space-y-4 container sectionPadding">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="relative h-[300px] lg:h-[540px] border-6 border-light-gray rounded-4xl overflow-hidden w-full"
        >
          {/* Image Placeholder */}
          <Skeleton
            height="h-full"
            width="w-full"
            rounded="rounded-none"
            className="absolute inset-0"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 z-10 flex flex-col justify-between gap-4 p-4 lg:p-8">
            {/* Category Badge */}
            <Skeleton width="w-24" height="h-8" rounded="rounded-full" />

            {/* Bottom Content */}
            <div className="space-y-3">
              {/* Title */}
              <Skeleton height="h-6 lg:h-8" width="w-3/4" />

              {/* Description */}
              <Skeleton height="h-4" />
              <Skeleton height="h-4" width="w-5/6" />

              {/* Button */}
              <Skeleton height="h-10" width="w-36" rounded="rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkeletonProjects;
