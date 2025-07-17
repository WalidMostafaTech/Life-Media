import Marquee from "react-fast-marquee";
import SectionTitle from "../../../../components/common/SectionTitle";
import { useTranslation } from "react-i18next";
import LoadingSection from "../../../../components/layout/Loading/LoadingSection";
import EmptySection from "../../../../components/layout/EmptySection/EmptySection";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const MediaMarquee = ({
  media = [],
  title,
  loading = false,
  type = "image",
}) => {
  const direction = document.body.getAttribute("dir") || "ltr";
  const { t } = useTranslation();

  if (loading) return <LoadingSection />;
  if (!media || media.length === 0) return <EmptySection />;

  return (
    <article
      className="py-10 lg:py-20 bg-light-gray overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {title && <SectionTitle title={t(title)} />}

      <section
        className="overflow-hidden py-8 lg:py-20"
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: direction === "ltr" ? "right" : "left",
          transform: direction === "rtl" ? "rotateY(-20deg)" : "rotateY(20deg)",
        }}
      >
        <div
          className={`absolute top-0 end-0 w-24 lg:w-64 h-full ${
            direction === "ltr" ? "bg-gradient-to-l" : "bg-gradient-to-r"
          } from-light-gray via-light-gray/70 to-transparent z-10 pointer-events-none`}
        />

        <Marquee
          direction={direction === "rtl" ? "right" : "left"}
          speed={100}
          gradient={false}
          style={{ direction: "ltr" }}
        >
          {media.map((item, index) => (
            <div key={index} className="mx-1 w-54 h-40">
              {type === "video" ? (
                <video
                  src={item.full_path}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                  style={{ transform: "rotateY(6deg)" }}
                />
              ) : type === "image" ? (
                <img
                  src={item.image_url}
                  alt={`media-${index}`}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                  style={{ transform: "rotateY(6deg)" }}
                />
              ) : null}
            </div>
          ))}
        </Marquee>
      </section>

      <Link
        to={`/media/${type === "video" ? "videos" : "designs"}`}
        className="flex items-center gap-1 w-max mx-auto mt-6 font-semibold text-light-red hover:underline relative z-10"
      >
        {t("services.learn_more")} <GoArrowUpRight className="text-3xl" />
      </Link>
    </article>
  );
};

export default MediaMarquee;
