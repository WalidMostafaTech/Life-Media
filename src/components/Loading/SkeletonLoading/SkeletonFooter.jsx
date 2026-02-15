import Skeleton from "./Skeleton";

const SkeletonFooter = () => {
  return (
    <footer className="bg-dark-red relative">
      <div className="container sectionPadding relative z-10">
        {/* ================= Top Footer ================= */}
        <div className="container grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Logo + Offices */}
          <div className="flex flex-col items-center gap-4 text-center">
            <Skeleton width="w-42 lg:w-60" height="h-16" rounded="rounded-lg" />
            <Skeleton width="w-3/4" height="h-4" />

            <div className="grid grid-cols-2 gap-4 w-full">
              {[...Array(2)].map((_, i) => (
                <Skeleton key={i} height="h-14" rounded="rounded-md" />
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="flex flex-col items-center gap-4 text-center">
            <Skeleton width="w-32" height="h-6" />
            <div className="space-y-2 w-full flex flex-col items-center">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} width="w-24" height="h-4" />
              ))}
            </div>
          </div>

          {/* New Pages */}
          <div className="flex flex-col items-center gap-4 text-center">
            <Skeleton width="w-32" height="h-6" />
            <div className="space-y-2 w-full flex flex-col items-center">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} width="w-28" height="h-4" />
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-4 text-center">
            <Skeleton width="w-40" height="h-6" />
            <Skeleton width="w-48" height="h-4" />
            <Skeleton width="w-40" height="h-4" />
            <Skeleton width="w-56" height="h-4" />
            <Skeleton width="w-32" height="h-10" rounded="rounded-full" />
          </div>
        </div>

        {/* ================= Bottom Footer ================= */}
        <div className="container grid lg:grid-cols-3 gap-4 mt-8 items-center">
          {/* Rights */}
          <Skeleton width="w-40" height="h-4" />

          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton
                key={i}
                width="w-10"
                height="h-10"
                rounded="rounded-full"
              />
            ))}
          </div>

          {/* Terms / Privacy */}
          <div className="flex justify-end gap-3">
            <Skeleton width="w-20" height="h-4" />
            <Skeleton width="w-20" height="h-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SkeletonFooter;
