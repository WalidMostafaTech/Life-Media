import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import SectionTitle from "../../components/common/SectionTitle";
import MediaStore from "../../components/sections/MediaStore";
import { useQuery } from "@tanstack/react-query";
import { getLatestVideos } from "../../api/mainServices";

const LatestVideosPage = () => {
  const { t } = useTranslation();

  const { data, isLoading } = useQuery({
    queryKey: ["latest_videos"],
    queryFn: getLatestVideos,
  });

  return (
    <>
      <Helmet>
        <title>{t("helmet.videos_title")}</title>
        <meta name="description" content={t("helmet.videos_description")} />
        <meta property="og:title" content={t("helmet.videos_title")} />
        <meta
          property="og:description"
          content={t("helmet.videos_description")}
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <article className="container sectionPadding mt-[70px]">
        <SectionTitle title={t("videos_slider.title")} />

        <MediaStore type="videos" data={data || []} loading={isLoading} />
      </article>
    </>
  );
};

export default LatestVideosPage;
