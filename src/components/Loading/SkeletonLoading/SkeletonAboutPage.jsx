import Skeleton from "./Skeleton";

const SkeletonAboutPage = () => {
  return (
    <article>
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

      <article className="container sectionPadding flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-8">
        {/* Logo Skeleton */}
        <Skeleton
          width="w-40 lg:w-64"
          height="h-40 lg:h-64"
          rounded="rounded-lg"
        />

        {/* Text Skeleton */}
        <div className="flex-1 w-full space-y-3">
          <Skeleton height="h-6" width="w-3/4" />
          <Skeleton height="h-4" />
          <Skeleton height="h-4" />
          <Skeleton height="h-4" width="w-5/6" />
          <Skeleton height="h-4" />
          <Skeleton height="h-4" width="w-2/3" />
        </div>
      </article>

      <article className="container sectionPadding">
        {/* Section Title */}
        <div className="mb-6">
          <Skeleton height="h-8" width="w-64" />
        </div>

        {/* Cards */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="min-h-48 flex flex-col justify-end gap-3 p-4 pt-8 bg-light-gray rounded-xl"
            >
              {/* Title */}
              <Skeleton height="h-10 lg:h-14" width="w-3/4" />

              {/* Body */}
              <Skeleton height="h-4" />
              <Skeleton height="h-4" width="w-5/6" />
            </div>
          ))}
        </section>
      </article>
    </article>
  );
};

export default SkeletonAboutPage;
