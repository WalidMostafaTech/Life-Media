import SectionTitle from "../../../../components/common/SectionTitle";
import { useSelector } from "react-redux";
import { GoArrowUpRight } from "react-icons/go";
import { useTranslation } from "react-i18next";
import CTA from "../../../../components/common/CTA";
import { Link } from "react-router-dom";
import ServicesCard from "./ServicesCard";
import { useQuery } from "@tanstack/react-query";
import { getSolutionsHome } from "../../../../api/homeServices";
import SkeletonServicesSection from "../../../../components/Loading/SkeletonLoading/SkeletonServicesSection";

const ServicesSection = () => {
  const { t } = useTranslation();

  const { setting } = useSelector((state) => state.setting);

  const { data: solutions, isLoading } = useQuery({
    queryKey: ["solutions_home"],
    queryFn: getSolutionsHome,
  });

  if (isLoading) return <SkeletonServicesSection />;

  if (!solutions?.length || !solutions) return null;

  return (
    <article id="Services" className="container sectionPadding">
      <SectionTitle title={t("services.title")} />

      <section className="grid xl:grid-cols-2 gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <ServicesCard solution={solutions[0]} size="large" />
          <ServicesCard solution={solutions[1]} size="small" />
          <ServicesCard solution={solutions[2]} size="small" />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <ServicesCard solution={solutions[3]} size="small" />
          <ServicesCard solution={solutions[4]} size="small" />
          <ServicesCard solution={solutions[5]} size="large" />
        </div>
      </section>

      <Link
        to="/services"
        className="flex items-center gap-1 w-max mx-auto mt-6 font-semibold text-light-red hover:underline"
      >
        {t("services.learn_more")} <GoArrowUpRight className="text-3xl" />
      </Link>

      <CTA
        text1={t("cta.not_sure")}
        text2={t("cta.build_together")}
        btnText={t("cta.book_call")}
        link={`https://wa.me/${setting?.whatsapp}`}
        newTab
      />
    </article>
  );
};

export default ServicesSection;
