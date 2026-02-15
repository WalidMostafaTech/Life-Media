import SectionTitle from "../common/SectionTitle";
import noiseImg from "../../assets/images/noise.png";
import "swiper/css";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import { useQuery } from "@tanstack/react-query";
import SkeletonTestimonials from "../Loading/SkeletonLoading/SkeletonTestimonials";
import { getTestimonials } from "../../api/homeServices";

const Testimonials = () => {
  const { t } = useTranslation();
  const { lang } = useSelector((state) => state.language);

  const {data: testimonials, isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
  });

  if (isLoading) return <SkeletonTestimonials />;

  if (!testimonials?.length || !testimonials) return null;

  return (
    <article className="sectionPadding">
      <SectionTitle title={t("testimonials.title")} />

      <section className="overflow-hidden">
        <Marquee
          direction={lang === "ar" ? "right" : "left"}
          speed={80}
          pauseOnHover={true}
          gradient={false}
          style={{ direction: "ltr" }}
        >
          {testimonials?.map((item, index) => (
            <div key={index} className="mx-4 w-xs lg:w-xl">
              <div
                style={{ backgroundImage: `url(${noiseImg})` }}
                className="space-y-4 p-4 rounded-2xl relative overflow-hidden 
                  after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-0 after:h-0 
                  after:shadow-[0px_0px_100px_70px] after:shadow-red-500 after:opacity-0 
                  after:transition-all after:duration-300 hover:after:opacity-100"
              >
                <div>
                  <img
                    loading="lazy"
                    src={item.logo_url}
                    alt="Brand"
                    className=""
                  />
                </div>

                <p className="text-xl line-clamp-4">{item.testimonial_text}</p>

                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 overflow-hidden rounded-full">
                    <img
                      loading="lazy"
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
            </div>
          ))}
        </Marquee>
      </section>
    </article>
  );
};

export default Testimonials;
