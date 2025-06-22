import SectionTitle from "../../../components/common/SectionTitle";
import noiseImg from "../../../assets/images/noise.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTestimonials } from "../../../store/testimonials/testimonialsAction";
import Loading from "../../../components/layout/Loading/Loading";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  const { testimonials, loading } = useSelector((state) => state.testimonials);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTestimonials());
  }, [dispatch]);

  const direction = document.body.getAttribute("dir") || "ltr";

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="sectionPadding">
      <SectionTitle title={t("testimonials.title")} />

      <Swiper
        key={direction}
        dir={direction}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 1000 }}
        speed={3000}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          1020: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials?.map((item) => (
          <SwiperSlide key={item.id} className="px-4">
            <div
              style={{ backgroundImage: `url(${noiseImg})` }}
              className="space-y-4 p-4 rounded-2xl relative overflow-hidden 
                after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-0 after:h-0 
                after:shadow-[0px_0px_100px_70px] after:shadow-red-500 after:opacity-0 
                after:transition-all after:duration-300 hover:after:opacity-100"
            >
              <div className="h-14">
                <img
                  src={item.logo_url}
                  alt="Brand"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-xl line-clamp-1">{item.testimonial_text}</p>

              <div className="flex items-center gap-2">
                <div className="w-12 h-12 overflow-hidden rounded-full">
                  <img
                    src={item.image_url}
                    className="w-full h-full object-cover"
                    alt={item.name}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-sm">{item.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
