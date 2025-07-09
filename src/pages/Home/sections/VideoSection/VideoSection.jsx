import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getVideoSection } from "../../../../store/videoSection/videoSectionAction";
import LoadingSection from "../../../../components/layout/Loading/LoadingSection";
import EmptySection from "../../../../components/layout/EmptySection/EmptySection";

const VideoSection = () => {
  const { videoSection, loading } = useSelector((state) => state.videoSection);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoSection());
  }, [dispatch]);

  const { t } = useTranslation();

  if (loading) {
    return <LoadingSection />;
  }

  return (
    <>
      {videoSection.length > 0 ? (
        <article className="relative w-full h-[90vh] overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            src="https://framerusercontent.com/assets/HmIrfBkCmIleNyD8NC4PlQ6Bzg.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 bg-dark-red/20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {t("video_section.title")}
            </h1>
            <p className="text-lg md:text-2xl max-w-2xl">
              {t("video_section.subtitle")}
            </p>
          </div>
        </article>
      ) : (
        <EmptySection />
      )}
    </>
  );
};

export default VideoSection;
