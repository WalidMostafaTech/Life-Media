import Marquee from "react-fast-marquee";
import SectionTitle from "../../../../components/common/SectionTitle";
import { useTranslation } from "react-i18next";

const VideosSlider = () => {
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
  const direction = document.body.getAttribute("dir") || "ltr";
    const { t } = useTranslation();
  
  return (
    <section
      className="pb-20 lg:pb-50 pt-10 lg:pt-20 bg-dark-gray overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      <SectionTitle title={t("videos_slider.title")} />
      <div
        className="overflow-hidden pt-8 lg:pt-20"
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: `${direction === "rtl" ? "left" : "right"}`,
          transform: "rotateY(20deg)",
        }}
      >
        <div className="absolute top-0 right-0 w-24 lg:w-64 h-full bg-gradient-to-l from-dark-gray via-dark-gray/70 to-transparent z-10 pointer-events-none" />

        <Marquee
          direction={direction === "rtl" ? "right" : "left"}
          speed={100}
          gradient={false}
          style={{ direction: `${direction}` }}
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
  );
};

export default VideosSlider;
