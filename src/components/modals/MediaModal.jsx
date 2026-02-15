import { useEffect, useRef } from "react";
import ModalContainer from "./ModalContainer";

const MediaModal = ({ openModal, setOpenModal, media, type }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (openModal && type === "videos" && videoRef.current) {
      // حاول تشغيل الفيديو بمجرد فتح المودال
      const playVideo = async () => {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.warn("Autoplay blocked by browser:", error);
        }
      };
      playVideo();
    }
  }, [openModal, type]);

  return (
    <ModalContainer openModal={openModal} setOpenModal={setOpenModal}>
      <div className="w-full h-full flex items-center">
        {type === "videos" ? (
          <video
            ref={videoRef}
            src={media}
            alt="media"
            controls
            className="w-full h-full object-contain"
          />
        ) : (
          <img
            src={media}
            alt="media"
            loading="lazy"
            className="w-full h-full object-contain"
          />
        )}
      </div>
    </ModalContainer>
  );
};

export default MediaModal;
