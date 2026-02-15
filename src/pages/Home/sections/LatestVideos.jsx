import { useQuery } from "@tanstack/react-query";
import SkewMarquee from "../../../components/sections/SkewMarquee";
import { getLatestVideos } from "../../../api/mainServices";
import { useTranslation } from "react-i18next";
import SkeletonLatestVideos from "../../../components/Loading/SkeletonLoading/SkeletonLatestVideos";
import SectionTitle from "../../../components/common/SectionTitle";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const LatestVideos = () => {
  const { t } = useTranslation();

  const { data, isLoading } = useQuery({
    queryKey: ["latest_videos"],
    queryFn: getLatestVideos,
  });

  if (isLoading) return <SkeletonLatestVideos />;

  if (!data?.length || !data) return null;

  return (
    <article
      className="py-10 lg:py-20 bg-light-gray overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      <SectionTitle title={t("videos_slider.title")} />

      <SkewMarquee media={data} type={"video"} />

      <Link
        to={`/latest-videos`}
        className="flex items-center gap-1 w-max mx-auto mt-6 font-semibold text-light-red hover:underline relative z-10"
      >
        {t("services.learn_more")} <GoArrowUpRight className="text-3xl" />
      </Link>
    </article>
  );
};

export default LatestVideos;
