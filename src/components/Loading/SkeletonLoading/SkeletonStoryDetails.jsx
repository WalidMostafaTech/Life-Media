import Skeleton from "./Skeleton";

const SkeletonStoryDetails = () => {
  return (
    <article className="container sectionPadding mt-[70px] space-y-6">
      {/* Image */}
      <Skeleton
        className="w-full"
        height="h-64 lg:h-[60vh]"
        rounded="rounded-xl"
      />

      {/* Title */}
      <div className="flex justify-center">
        <Skeleton height="h-10" width="w-3/4 lg:w-1/2" />
      </div>

      {/* HTML Content */}
      <div className="space-y-3">
        <Skeleton height="h-4" />
        <Skeleton height="h-4" />
        <Skeleton height="h-4" width="w-5/6" />
        <Skeleton height="h-4" />
        <Skeleton height="h-4" width="w-4/6" />
        <Skeleton height="h-4" />
        <Skeleton height="h-4" width="w-3/4" />
      </div>
    </article>
  );
};

export default SkeletonStoryDetails;
