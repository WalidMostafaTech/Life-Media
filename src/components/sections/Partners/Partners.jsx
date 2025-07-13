import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBrands } from "../../../store/brands/brandsAction";
import { useTranslation } from "react-i18next";
import CTA from "../../common/CTA";
import EmptySection from "../../layout/EmptySection/EmptySection";
import LoadingSection from "../../layout/Loading/LoadingSection";
import Marquee from "react-fast-marquee";

const Partners = () => {
  const { t } = useTranslation();
  const { brands, loading } = useSelector((state) => state.brands);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  const direction = document.body.getAttribute("dir") || "ltr";

  if (loading) {
    return <LoadingSection />;
  }

  return (
    <>
      {brands.length > 0 ? (
        <>
          <section className="sectionPadding">
            <div className="container mb-10">
              <h2 className="text-2xl lg:text-3xl mb-2">
                {t("partners.title")}
              </h2>
              <p className="text-sm lg:text-base">
                {t("partners.description")}
              </p>
            </div>

            <div className="overflow-hidden">
              <Marquee
                direction={direction === "rtl" ? "right" : "left"}
                speed={100}
                gradient={false}
                style={{ direction: "ltr" }}
              >
                {brands?.map((item, index) => (
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
          </section>

          <CTA text1={t("cta.ready")} btnText={t("cta.become_client")} />
        </>
      ) : (
        <EmptySection />
      )}
    </>
  );
};

export default Partners;
