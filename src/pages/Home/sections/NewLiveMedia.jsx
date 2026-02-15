import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { getNewLiveMedia } from "../../../api/homeServices";
import SkeletonStorySlider from "../../../components/Loading/SkeletonLoading/SkeletonStorySlider";
import SectionTitle from "../../../components/common/SectionTitle";
import SliderSection from "../../../components/sections/SliderSection/SliderSection";

const NewLiveMedia = () => {
  const { t } = useTranslation();

  const { data, isLoading } = useQuery({
    queryKey: ["newLiveMedia"],
    queryFn: getNewLiveMedia,
  });

  if (isLoading) return <SkeletonStorySlider />;

  if (!data?.length || !data) return null;

  return (
    <section className="container sectionPadding">
      <SectionTitle title={t("new_live_media.title")} />

      <SliderSection data={data || []} link="new-live-media" />
    </section>
  );
};

export default NewLiveMedia;
