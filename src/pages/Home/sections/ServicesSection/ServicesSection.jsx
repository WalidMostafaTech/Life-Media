import SectionTitle from "../../../../components/common/SectionTitle";
import { useEffect } from "react";
import { getSolutions } from "../../../../store/solutions/solutionsAction";
import { useDispatch, useSelector } from "react-redux";
import { GoArrowUpRight } from "react-icons/go";
import { useTranslation } from "react-i18next";
import EmptySection from "../../../../components/layout/EmptySection/EmptySection";
import CTA from "../../../../components/common/CTA";
import LoadingSection from "../../../../components/layout/Loading/LoadingSection";
import { Link } from "react-router-dom";
import ServicesCard from "./ServicesCard";

const ServicesSection = () => {
  const { t } = useTranslation();
  const { solutions, loading } = useSelector((state) => state.solutions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSolutions(true));
  }, [dispatch]);

  if (loading) {
    return <LoadingSection />;
  }

  return (
    <>
      {solutions.length > 0 ? (
        <>
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
          </article>

          <CTA
            text1={t("cta.not_sure")}
            text2={t("cta.build_together")}
            btnText={t("cta.book_call")}
          />
        </>
      ) : (
        <EmptySection />
      )}
    </>
  );
};

export default ServicesSection;
