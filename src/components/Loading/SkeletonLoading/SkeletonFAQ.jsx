import Skeleton from "./Skeleton";

const SkeletonFAQ = () => {
  return (
    <article className="container sectionPadding">
      {/* Title */}
      <div className="mb-8 flex justify-center">
        <Skeleton height="h-8 lg:h-10" width="w-64" />
      </div>

      {/* FAQ Items */}
      <section className="space-y-4">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="bg-light-gray rounded-xl px-4 py-4">
            {/* Question Row */}
            <div className="flex justify-between items-center">
              <Skeleton height="h-6" width="w-3/4" />
              <Skeleton height="h-8" width="w-8" rounded="rounded-full" />
            </div>

            {/* Answer Row */}
            <div className="mt-2">
              <Skeleton height="h-4" width="w-full" />
              <Skeleton height="h-4" width="w-5/6" className="mt-1" />
              <Skeleton height="h-4" width="w-4/6" className="mt-1" />
            </div>
          </div>
        ))}
      </section>
    </article>
  );
};

export default SkeletonFAQ;
