import Skeleton from "./Skeleton";

const SkeletonPartners = () => {
  return (
    <section className="sectionPadding">
      <div className="overflow-hidden">
        <div className="flex items-center gap-16">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="min-w-[100px] flex justify-center">
              <Skeleton
                height="h-12 lg:h-16"
                width="w-24 lg:w-32"
                rounded="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkeletonPartners;
