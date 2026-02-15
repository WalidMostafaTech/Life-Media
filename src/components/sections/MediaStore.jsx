import { useState } from "react";
import { useTranslation } from "react-i18next";
import MediaModal from "../../components/modals/MediaModal";
import SkeletonMediaStore from "../Loading/SkeletonLoading/SkeletonMediaStore";

const MediaStore = ({ data, type, loading }) => {
  const { t } = useTranslation();
  const [modal, setModal] = useState({
    openModal: false,
    media: null,
  });

  if (loading) return <SkeletonMediaStore />;

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {data?.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setModal({
                openModal: true,
                media: type === "videos" ? item.full_path : item.image_url,
              })
            }
            className="bg-light-gray rounded-2xl space-y-2 p-4 cursor-pointer"
          >
            <div className="w-full aspect-square overflow-hidden rounded-xl relative group">
              <div
                className="absolute inset-0 w-full h-full bg-light-red/40 flex items-center justify-center 
                text-xl font-bold opacity-0 group-hover:opacity-100 duration-300"
              >
                {t(
                  type === "videos"
                    ? "videos_slider.play"
                    : "images_slider.play",
                )}
              </div>
              {type === "videos" ? (
                <video
                  src={item.full_path}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="text-lg">{item.paragraph}</p>
          </div>
        ))}
      </section>

      <MediaModal
        openModal={modal.openModal}
        setOpenModal={setModal}
        media={modal.media}
        type={type}
      />
    </>
  );
};

export default MediaStore;
