import Skeleton from "./Skeleton";

const SkeletonServicesPage = ({ items = 3 }) => {
  return (
    <section className="container sectionPadding">
      <div className="space-y-8">
        {[...Array(items)].map((_, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            } gap-4`}
          >
            {/* Image */}
            <Skeleton
              className="w-full lg:w-1/2"
              height="h-64 lg:h-[500px]"
              rounded="rounded-4xl"
            />

            {/* Content */}
            <div className="space-y-4 w-full lg:w-1/2 content-center">
              {/* Title */}
              <Skeleton height="h-10" width="w-3/4" />

              {/* Description */}
              <Skeleton height="h-4" />
              <Skeleton height="h-4" width="w-5/6" />

              {/* Points */}
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} height="h-16" rounded="rounded-xl" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkeletonServicesPage;
