import Skeleton from "./Skeleton";

const SkeletonTestimonials = () => {
  return (
    <article className="sectionPadding">
      {/* Title */}
      <div className="mb-8 flex justify-center">
        <Skeleton height="h-8 lg:h-10" width="w-64" />
      </div>

      <section className="overflow-hidden">
        <div className="flex gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="w-xs lg:w-xl">
              <div className="space-y-4 p-6 rounded-2xl bg-light-gray relative overflow-hidden">
                {/* Brand Logo */}
                <Skeleton height="h-8" width="w-24" />

                {/* Testimonial Text */}
                <Skeleton height="h-4" width="w-full" />
                <Skeleton height="h-4" width="w-5/6" />
                <Skeleton height="h-4" width="w-4/6" />
                <Skeleton height="h-4" width="w-3/6" />

                {/* Person Info */}
                <div className="flex items-center gap-3 pt-4">
                  <Skeleton height="h-12" width="w-12" rounded="rounded-full" />

                  <div className="flex flex-col gap-2">
                    <Skeleton height="h-4" width="w-32" />
                    <Skeleton height="h-3" width="w-24" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

export default SkeletonTestimonials;
