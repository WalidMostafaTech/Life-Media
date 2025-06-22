import SectionTitle from "../../../../components/common/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./SuccessStory.css";
import Loading from "../../../../components/layout/Loading/Loading";
import { getSuccessStories } from "../../../../store/success_stories/success_storiesAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const SuccessStory = () => {
  const { t } = useTranslation();
  const { successStories, loading } = useSelector(
    (state) => state.successStories
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSuccessStories());
  }, [dispatch]);

  const direction = document.body.getAttribute("dir") || "ltr";

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="container sectionPadding">
      <SectionTitle title={t("success_story.title")} />

      <Swiper
        key={direction}
        dir={direction}
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        autoplay={{ delay: 5000 }}
        speed={1000}
        loop={true}
        modules={[Navigation, Autoplay]}
        className="successStorySwiper"
      >
        {successStories?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col lg:flex-row bg-light-gray rounded-xl overflow-hidden max-w-4xl mx-auto">
              <div className="h-auto overflow-hidden rounded-lg">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="mb-4">{item.paragraph}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SuccessStory;
