import CompanyState from "../../components/sections/CompanyState/CompanyState";
import Partners from "../../components/sections/Partners/Partners";
import ServicesSection from "./sections/ServicesSection/ServicesSection";
import Testimonials from "../../components/sections/Testimonials/Testimonials";
import FAQ from "../../components/sections/FAQ/FAQ";
import ContactUsSection from "../../components/sections/ContactUsSection/ContactUsSection";
import Hero from "../../components/sections/Hero/Hero";
import VideoSection from "./sections/VideoSection/VideoSection";
import MediaMarquee from "./sections/MediaMarquee/MediaMarquee";
import { Helmet } from "react-helmet";
import ProjectsSection from "../../components/sections/ProjectsSection/ProjectsSection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBanners } from "../../store/banners/bannersAction";
import { useTranslation } from "react-i18next";
import { getVideosSlider } from "../../store/videosSlider/videosSliderAction";
import { getImagesSlider } from "../../store/imagesSlider/imagesSliderAction";
import { getNewLiveMedia } from "../../store/newLiveMedia/newLiveMediaAction";
import { getSuccessStories } from "../../store/success_stories/success_storiesAction";
import StorySlider from "./sections/StorySlider/StorySlider";

const Home = () => {
  const { banners, loading } = useSelector((state) => state.banners);
  const { successStories, loading: successStoriesLoading } = useSelector(
    (state) => state.successStories
  );

  const { newLiveMedia, loading: newLiveMediaLoading } = useSelector(
    (state) => state.newLiveMedia
  );

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { videosSlider, loading: videosSliderLoading } = useSelector(
    (state) => state.videosSlider
  );

  const { imagesSlider, loading: imagesSliderLoading } = useSelector(
    (state) => state.imagesSlider
  );

  useEffect(() => {
    dispatch(getBanners("home"));
    dispatch(getVideosSlider());
    dispatch(getImagesSlider());
    dispatch(getNewLiveMedia());
    dispatch(getSuccessStories());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>{t("helmet.home_title")}</title>
        <meta name="description" content={t("helmet.home_description")} />
        <meta property="og:title" content={t("helmet.home_title")} />
        <meta
          property="og:description"
          content={t("helmet.home_description")}
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section>
        <Hero banners={banners} loading={loading} />
        <CompanyState />
        <VideoSection />
        <Partners />
        <MediaMarquee
          media={videosSlider}
          loading={videosSliderLoading}
          type="video"
          title="videos_slider.title"
        />
        <ProjectsSection home />
        <MediaMarquee
          media={imagesSlider}
          loading={imagesSliderLoading}
          title="images_slider.title"
        />
        <ServicesSection />
        <Testimonials />
        <StorySlider
          loading={successStoriesLoading}
          data={successStories}
          title="success_story.title"
        />
        <FAQ />
        <StorySlider
          loading={newLiveMediaLoading}
          data={newLiveMedia}
          title="new_live_media.title"
        />
        <ContactUsSection />
      </section>
    </>
  );
};

export default Home;
