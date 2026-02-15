import Skeleton from "./Skeleton";

const SkeletonHero = () => {
  return (
    <section className="h-screen w-full relative overflow-hidden">
      {/* Background Skeleton */}
      <div className="absolute inset-0">
        <Skeleton height="h-full" rounded="rounded-none" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-end relative z-10">
        <div className="max-w-xl mb-20 flex flex-col items-center lg:items-start text-center lg:text-start mx-auto lg:mx-0 gap-4">
          {/* Title */}
          <Skeleton height="h-10 lg:h-14" width="w-3/4" />

          {/* Paragraph line 1 */}
          <Skeleton height="h-4" width="w-full" />

          {/* Paragraph line 2 */}
          <Skeleton height="h-4" width="w-5/6" />

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row gap-4 mt-2 w-full lg:w-auto">
            <Skeleton height="h-10" width="w-40" rounded="rounded-full" />
            <Skeleton height="h-10" width="w-40" rounded="rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkeletonHero;
