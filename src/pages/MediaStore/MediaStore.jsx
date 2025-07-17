import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideosSlider } from "../../store/videosSlider/videosSliderAction";
import { getImagesSlider } from "../../store/imagesSlider/imagesSliderAction";
import LoadingSection from "../../components/layout/Loading/LoadingSection";
import SectionTitle from "../../components/common/SectionTitle";
import { useTranslation } from "react-i18next";
import MediaModal from "../../components/modals/MediaModal";
import { Helmet } from "react-helmet";

const MediaStore = () => {
  const { type } = useParams();
  const { t } = useTranslation();
  const [modal, setModal] = useState({
    openModal: false,
    media: null,
  });

  const { videosSlider, loading: videosSliderLoading } = useSelector(
    (state) => state.videosSlider
  );

  const { imagesSlider, loading: imagesSliderLoading } = useSelector(
    (state) => state.imagesSlider
  );

  const data = type === "videos" ? videosSlider : imagesSlider;

  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "videos") {
      dispatch(getVideosSlider());
    } else {
      dispatch(getImagesSlider());
    }
  }, [dispatch, type]);

  if (videosSliderLoading || imagesSliderLoading) {
    return <LoadingSection />;
  }

  return (
    <>
      <Helmet>
        <title>
          {type === "videos"
            ? t("helmet.videos_title")
            : t("helmet.images_title")}
        </title>
        <meta
          name="description"
          content={
            type === "videos"
              ? t("helmet.videos_description")
              : t("helmet.images_description")
          }
        />
        <meta
          property="og:title"
          content={
            type === "videos"
              ? t("helmet.videos_title")
              : t("helmet.images_title")
          }
        />
        <meta
          property="og:description"
          content={
            type === "videos"
              ? t("helmet.videos_description")
              : t("helmet.images_description")
          }
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <article className="container sectionPadding mt-[70px] min-h-[60vh]">
        <SectionTitle
          title={
            type === "videos"
              ? t("videos_slider.title")
              : t("images_slider.title")
          }
        />

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
              <div className="w-full h-[250px] overflow-hidden rounded-xl relative group">
                <div
                  className="absolute inset-0 w-full h-full bg-light-red/40 flex items-center justify-center 
                text-xl font-bold opacity-0 group-hover:opacity-100 duration-300"
                >
                  {t(
                    type === "videos"
                      ? "videos_slider.play"
                      : "images_slider.play"
                  )}
                </div>
                {type === "videos" ? (
                  <video
                    src={item.full_path}
                    alt={item.title}
                    className="w-full h-full object-cover"
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
      </article>

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
