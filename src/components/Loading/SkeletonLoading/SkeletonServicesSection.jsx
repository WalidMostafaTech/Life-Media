import Skeleton from "./Skeleton";

const SkeletonServicesSection = () => {
  const ServicesCardSkeleton = ({ size = "small" }) => {
    return (
      <div
        className={`relative rounded-4xl overflow-hidden ${
          size === "large" ? "sm:col-span-2 lg:h-[500px]" : "lg:h-[550px]"
        }`}
      >
        {/* Image Skeleton */}
        <Skeleton height="h-full" rounded="rounded-none" />

        {/* Bottom Content */}
        <div className="absolute left-0 bottom-0 w-full px-8 pb-8 flex flex-col gap-3">
          <Skeleton height="h-6" width="w-2/3" />
          <Skeleton height="h-4" width="w-3/4" />
        </div>
      </div>
    );
  };

  return (
    <article id="Services" className="container sectionPadding">
      <section className="grid xl:grid-cols-2 gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <ServicesCardSkeleton size="large" />
          <ServicesCardSkeleton size="small" />
          <ServicesCardSkeleton size="small" />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <ServicesCardSkeleton size="small" />
          <ServicesCardSkeleton size="small" />
          <ServicesCardSkeleton size="large" />
        </div>
      </section>
    </article>
  );
};

export default SkeletonServicesSection;
