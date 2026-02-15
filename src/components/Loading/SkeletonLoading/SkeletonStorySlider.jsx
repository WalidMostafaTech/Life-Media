import Skeleton from "./Skeleton";

const SkeletonStorySlider = () => {
  return (
    <section className="container sectionPadding">
      <div className="mb-4 lg:mb-8 text-center flex flex-col items-center gap-3">
        <Skeleton height="h-8 lg:h-10" width="w-64" />
        <Skeleton height="h-4" width="w-80" />
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:min-h-[300px] bg-light-gray rounded-xl overflow-hidden">
          {/* Image Skeleton */}
          <div className="h-[300px] lg:h-auto lg:col-span-2">
            <Skeleton height="h-full" rounded="rounded-none" />
          </div>

          {/* Content Skeleton */}
          <div className="p-6 lg:col-span-3 min-h-[300px] flex flex-col gap-4">
            <Skeleton height="h-6" width="w-3/4" />

            <Skeleton height="h-4" width="w-full" />
            <Skeleton height="h-4" width="w-5/6" />
            <Skeleton height="h-4" width="w-4/6" />
            <Skeleton height="h-4" width="w-3/6" />
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default SkeletonStorySlider;
