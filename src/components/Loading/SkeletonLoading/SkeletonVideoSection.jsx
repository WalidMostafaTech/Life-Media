import Skeleton from "./Skeleton";

const SkeletonVideoSection = () => {
  return (
    <article className="relative w-full h-[90vh] overflow-hidden">
      {/* Fake Video Background */}
      <div className="absolute inset-0">
        <Skeleton height="h-full" rounded="rounded-none" />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 bg-black/20 gap-6">
        {/* Title */}
        <Skeleton height="h-10 md:h-16" width="w-3/4 md:w-1/2" />

        {/* Paragraph line 1 */}
        <Skeleton height="h-5 md:h-6" width="w-full md:w-2/3" />

        {/* Paragraph line 2 */}
        <Skeleton height="h-5 md:h-6" width="w-5/6 md:w-1/2" />
      </div>
    </article>
  );
};

export default SkeletonVideoSection;
