import Marquee from "react-fast-marquee";
import SectionTitle from "../../../../components/common/SectionTitle";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getVideosSlider } from "../../../../store/videosSlider/videosSliderAction";
import LoadingSection from "../../../../components/layout/Loading/LoadingSection";
import EmptySection from "../../../../components/layout/EmptySection/EmptySection";

const VideosSlider = () => {
  const { videosSlider, loading } = useSelector((state) => state.videosSlider);

  const videoUrls = [
    "https://framerusercontent.com/assets/HmIrfBkCmIleNyD8NC4PlQ6Bzg.mp4",
    "https://framerusercontent.com/assets/HmIrfBkCmIleNyD8NC4PlQ6Bzg.mp4",
    "https://framerusercontent.com/assets/HmIrfBkCmIleNyD8NC4PlQ6Bzg.mp4",
    "https://framerusercontent.com/assets/HmIrfBkCmIleNyD8NC4PlQ6Bzg.mp4",
    "https://framerusercontent.com/assets/HmIrfBkCmIleNyD8NC4PlQ6Bzg.mp4",
    "https://framerusercontent.com/assets/HmIrfBkCmIleNyD8NC4PlQ6Bzg.mp4",
    "https://framerusercontent.com/assets/HmIrfBkCmIleNyD8NC4PlQ6Bzg.mp4",
    "https://framerusercontent.com/assets/HmIrfBkCmIleNyD8NC4PlQ6Bzg.mp4",
    "https://framerusercontent.com/assets/HmIrfBkCmIleNyD8NC4PlQ6Bzg.mp4",
    "https://framerusercontent.com/assets/HmIrfBkCmIleNyD8NC4PlQ6Bzg.mp4",
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosSlider());
  }, [dispatch]);

  const direction = document.body.getAttribute("dir") || "ltr";
  const { t } = useTranslation();

  if (loading) {
    return <LoadingSection />;
  }

  return (
    <>
      {videosSlider.length > 0 ? (
        <section
          className="pb-20 lg:pb-50 pt-10 lg:pt-20 bg-dark-gray overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          <SectionTitle title={t("videos_slider.title")} />
          <div
            className="overflow-hidden pt-8 lg:pt-20"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: `${
                direction === "ltr" ? "right" : "left"
              } center`,
              transform: `${
                direction === "rtl" ? "rotateY(-20deg)" : "rotateY(20deg)"
              }`,
            }}
          >
            <div
              className={`absolute top-0 end-0 w-24 lg:w-64 h-full ${
                direction === "ltr" ? "bg-gradient-to-l" : "bg-gradient-to-r"
              } from-dark-gray via-dark-gray/70 to-transparent z-10 pointer-events-none`}
            />

            <Marquee
              direction={direction === "rtl" ? "right" : "left"}
              speed={100}
              gradient={false}
              style={{ direction: `ltr` }}
            >
              {[...videoUrls, ...videoUrls].map((src, index) => (
                <div key={index} className="mx-1 w-54 h-40">
                  <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                    style={{
                      transform: "rotateY(6deg)",
                    }}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </section>
      ) : (
        <EmptySection />
      )}
    </>
  );
};

export default VideosSlider;
