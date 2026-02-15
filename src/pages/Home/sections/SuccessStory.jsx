import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { getSuccessStories } from "../../../api/homeServices";
import SkeletonStorySlider from "../../../components/Loading/SkeletonLoading/SkeletonStorySlider";
import SectionTitle from "../../../components/common/SectionTitle";
import SliderSection from "../../../components/sections/SliderSection/SliderSection";

const SuccessStory = () => {
  const { t } = useTranslation();

  const { data, isLoading } = useQuery({
    queryKey: ["success_stories"],
    queryFn: getSuccessStories,
  });

  if (isLoading) return <SkeletonStorySlider />;

  if (!data?.length || !data) return null;

  return (
    <section className="container sectionPadding">
      <SectionTitle title={t("success_story.title")} />

      <SliderSection data={data || []} link="success-story" />
    </section>
  );
};

export default SuccessStory;
