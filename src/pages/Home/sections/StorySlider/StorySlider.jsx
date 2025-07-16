import SectionTitle from "../../../../components/common/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./StorySlider.css";
import { useTranslation } from "react-i18next";
import EmptySection from "../../../../components/layout/EmptySection/EmptySection";
import LoadingSection from "../../../../components/layout/Loading/LoadingSection";

const StorySlider = ({ loading, data, title }) => {
  const { t } = useTranslation();

  const direction = document.body.getAttribute("dir") || "ltr";

  if (loading) {
    return <LoadingSection />;
  }

  return (
    <>
      {data.length > 0 ? (
        <section className="container sectionPadding">
          <SectionTitle title={t(title)} />

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
            className="storySliderSwiper"
          >
            {data?.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="grid grid-cols-1 lg:grid-cols-5 bg-light-gray rounded-xl overflow-hidden max-w-4xl mx-auto">
                  <div className="h-auto lg:min-h-[500px] lg:col-span-2 overflow-hidden rounded-lg">
                    <img
                      loading="lazy"
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 rounded-lg shadow-lg lg:col-span-3">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <div
                      className="text-xl lg:text-3xl"
                      dangerouslySetInnerHTML={{ __html: item.paragraph }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      ) : (
        <EmptySection />
      )}
    </>
  );
};

export default StorySlider;
