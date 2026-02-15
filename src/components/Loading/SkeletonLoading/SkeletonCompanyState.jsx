import Skeleton from "./Skeleton";

const SkeletonCompanyState = () => {
  return (
    <article className="container sectionPadding">
      {/* Title */}
      <div className="mb-6 flex justify-center">
        <Skeleton height="h-8 lg:h-10" width="w-72" />
      </div>

      {/* Cards */}
      <section className="flex flex-wrap gap-4 justify-center">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="relative min-w-[280px] h-[300px] lg:h-[400px] bg-light-gray rounded-3xl overflow-hidden"
          >
            {/* Background Image Skeleton */}
            <Skeleton height="h-full" rounded="rounded-none" />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/40 via-transparent to-transparent gap-4">
              {/* Count */}
              <Skeleton height="h-10 lg:h-14" width="w-24" />

              {/* Text */}
              <Skeleton height="h-6 lg:h-8" width="w-40" />
            </div>
          </div>
        ))}
      </section>
    </article>
  );
}

export default SkeletonCompanyState;
