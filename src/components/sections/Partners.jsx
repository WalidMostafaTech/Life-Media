import "swiper/css";
import { useTranslation } from "react-i18next";
import CTA from "../common/CTA";
import Marquee from "react-fast-marquee";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import SkeletonPartners from "../Loading/SkeletonLoading/SkeletonPartners";
import { getBrands } from "../../api/homeServices";

const Partners = () => {
  const { t } = useTranslation();
  const { lang } = useSelector((state) => state.language);

  const { data, isLoading } = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
  });

  if (isLoading) return <SkeletonPartners />;

  if (!data?.length || !data) return null;

  return (
    <section className="sectionPadding">
      <CTA text1={t("partners.title")} subText={t("partners.description")} />

      <div className="overflow-hidden">
        <Marquee
          direction={lang === "ar" ? "right" : "left"}
          speed={100}
          gradient={false}
          style={{ direction: "ltr" }}
        >
          {data?.map((item, index) => (
            <div key={index} className="mx-8 min-w-[100px]">
              <img
                loading="lazy"
                src={item.logo_url}
                alt={item.name}
                className="h-12 lg:h-16 mx-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <CTA text1={t("cta.ready")} btnText={t("cta.become_client")} />
    </section>
  );
};

export default Partners;
