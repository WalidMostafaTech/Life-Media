import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./SliderSection.css";
import { Link } from "react-router-dom";

const SliderSection = ({ data, link }) => {
  const { lang } = useSelector((state) => state.language);

  return (
    <Swiper
      dir={lang === "ar" ? "rtl" : "ltr"}
      spaceBetween={20}
      slidesPerView={1}
      navigation={true}
      autoplay={{ delay: 5000 }}
      speed={500}
      loop={true}
      modules={[Navigation, Autoplay]}
      className="sliderSectionSwiper"
    >
      {data?.map((item) => (
        <SwiperSlide key={item.id}>
          <Link
            to={`/${link}/${item.id}`}
            className="grid grid-cols-1 sm:grid-cols-5 bg-light-gray rounded-xl overflow-hidden max-w-4xl mx-auto"
          >
            <div className="aspect-square content-center sm:col-span-2 overflow-hidden rounded-lg">
              <img
                loading="lazy"
                src={item.image_url}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 rounded-lg shadow-lg sm:col-span-3">
              <h3 className="text-xl font-semibold mb-4 line-clamp-2">{item.title}</h3>
              <div
                className="htmlContent line-clamp-6"
                dangerouslySetInnerHTML={{ __html: item.paragraph }}
              />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderSection;
