import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getBanners } from "../../../store/banners/bannersAction";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import EmptySection from "../../layout/EmptySection/EmptySection";
import LoadingSection from "../../layout/Loading/LoadingSection";

const Hero = () => {
  const { banners, loading } = useSelector((state) => state.banners);
  const dispatch = useDispatch();

  const direction = document.body.getAttribute("dir") || "ltr";

  useEffect(() => {
    dispatch(getBanners());
  }, [dispatch]);

  if (loading) {
    return <LoadingSection />;
  }

  return (
    <>
      {banners.length > 0 ? (
        <Swiper
          key={direction}
          dir={direction}
          slidesPerView={1}
          autoplay={{ delay: 1000 }}
          speed={3000}
          loop={true}
          modules={[Autoplay]}
        >
          {banners?.map((banner) => (
            <SwiperSlide key={banner.id}>
              <article
                id="Home"
                style={{ backgroundImage: `url(${banner?.desktop_image_url})` }}
                className="h-screen bg-cover bg-center bg-no-repeat"
              >
                <div className="container mx-auto px-4 h-full flex flex-col justify-end">
                  <div className="max-w-xl mb-20 flex flex-col items-center lg:items-start text-center lg:text-start mx-auto lg:mx-0 gap-4 text-white">
                    <h1 className="text-3xl lg:text-5xl font-bold">
                      {banner?.title}
                    </h1>
                    <p className="lg:text-lg">{banner?.paragraph}</p>
                    <div className="flex flex-col lg:flex-row flex-wrap gap-4">
                      {banner?.buttons.map((button, index) => (
                        <Link
                          key={index}
                          to={button.url}
                          className={`mainBtn ${
                            button.outline && "transparent"
                          }`}
                        >
                          {button.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <EmptySection />
      )}
    </>
  );
};

export default Hero;
