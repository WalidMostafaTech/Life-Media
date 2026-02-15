import { useSelector } from "react-redux";
import Marquee from "react-fast-marquee";

const SkewMarquee = ({ media, type }) => {
  const { lang } = useSelector((state) => state.language);

  return (
    <section
      className="overflow-hidden py-8 lg:py-20"
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: lang === "en" ? "right" : "left",
        transform: lang === "ar" ? "rotateY(-20deg)" : "rotateY(20deg)",
      }}
    >
      <div
        className={`absolute top-0 end-0 w-24 lg:w-64 h-full ${
          lang === "en" ? "bg-gradient-to-l" : "bg-gradient-to-r"
        } from-light-gray via-light-gray/70 to-transparent z-10 pointer-events-none`}
      />

      <Marquee
        direction={lang === "ar" ? "right" : "left"}
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
  );
};

export default SkewMarquee;
