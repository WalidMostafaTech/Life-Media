import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";

const SkeletonLatestVideos = () => {
  const { lang } = useSelector((state) => state.language);

  return (
    <article
      className="py-10 lg:py-20 bg-light-gray overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      <div className="mb-6 flex justify-center">
        <Skeleton height="h-8 lg:h-10" width="w-72" />
      </div>

      <section
        className="overflow-hidden py-8 lg:py-20 relative"
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: lang === "en" ? "right" : "left",
          transform: lang === "ar" ? "rotateY(-20deg)" : "rotateY(20deg)",
        }}
      >
        {/* Gradient Overlay */}
        <div
          className={`absolute top-0 end-0 w-24 lg:w-64 h-full ${
            lang === "en" ? "bg-gradient-to-l" : "bg-gradient-to-r"
          } from-light-gray via-light-gray/70 to-transparent z-10 pointer-events-none`}
        />

        {/* Fake Marquee Row */}
        <div className="flex gap-4">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="w-54 h-40">
              <Skeleton
                height="h-full"
                width="w-full"
                rounded="rounded-2xl"
                className="shadow-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Learn More Button */}
      <div className="flex justify-center mt-6">
        <Skeleton height="h-6" width="w-40" />
      </div>
    </article>
  );
};

export default SkeletonLatestVideos;
