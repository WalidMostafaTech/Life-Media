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

            <section className="grid lg:grid-cols-2 gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  to={`/solutions-we-offer/${solutions[0]?.id}`}
                  className="group relative rounded-4xl overflow-hidden sm:col-span-2"
                >
                  <img
                    loading="lazy"
                    src={solutions[0]?.image_url}
                    alt={solutions[0]?.title}
                    className="w-full h-full object-cover grayscale-100 group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />

                  <div
                    className="absolute left-0 bottom-0 w-full flex flex-col justify-end px-8 
                translate-y-[calc(100%-50px)] group-hover:-translate-y-4 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold">
                      {solutions[0]?.title}
                    </h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {solutions[0]?.short_description}
                    </p>
                  </div>
                </Link>
                <Link
                  to={`/solutions-we-offer/${solutions[1]?.id}`}
                  className="group relative rounded-4xl overflow-hidden"
                >
                  <img
                    loading="lazy"
                    src={solutions[1]?.image_url}
                    alt={solutions[1]?.title}
                    className="w-full h-full object-cover grayscale-100 group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />

                  <div
                    className="absolute left-0 bottom-0 w-full flex flex-col justify-end px-8 
                translate-y-[calc(100%-50px)] group-hover:-translate-y-4 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold">
                      {solutions[1]?.title}
                    </h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {solutions[1]?.short_description}
                    </p>
                  </div>
                </Link>
                <Link
                  to={`/solutions-we-offer/${solutions[2]?.id}`}
                  className="group relative rounded-4xl overflow-hidden"
                >
                  <img
                    loading="lazy"
                    src={solutions[2]?.image_url}
                    alt={solutions[2]?.title}
                    className="w-full h-full object-cover grayscale-100 group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />

                  <div
                    className="absolute left-0 bottom-0 w-full flex flex-col justify-end px-8 
                translate-y-[calc(100%-50px)] group-hover:-translate-y-4 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold">
                      {solutions[2]?.title}
                    </h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {solutions[2]?.short_description}
                    </p>
                  </div>
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  to={`/solutions-we-offer/${solutions[3]?.id}`}
                  className="group relative rounded-4xl overflow-hidden"
                >
                  <img
                    loading="lazy"
                    src={solutions[3]?.image_url}
                    alt={solutions[3]?.title}
                    className="w-full h-full object-cover grayscale-100 group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />

                  <div
                    className="absolute left-0 bottom-0 w-full flex flex-col justify-end px-8 
                translate-y-[calc(100%-50px)] group-hover:-translate-y-4 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold">
                      {solutions[3]?.title}
                    </h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {solutions[3]?.short_description}
                    </p>
                  </div>
                </Link>
                <Link
                  to={`/solutions-we-offer/${solutions[4]?.id}`}
                  className="group relative rounded-4xl overflow-hidden"
                >
                  <img
                    loading="lazy"
                    src={solutions[4]?.image_url}
                    alt={solutions[4]?.title}
                    className="w-full h-full object-cover grayscale-100 group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />

                  <div
                    className="absolute left-0 bottom-0 w-full flex flex-col justify-end px-8 
                translate-y-[calc(100%-50px)] group-hover:-translate-y-4 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold">
                      {solutions[4]?.title}
                    </h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {solutions[4]?.short_description}
                    </p>
                  </div>
                </Link>
                <Link
                  to={`/solutions-we-offer/${solutions[5]?.id}`}
                  className="group relative rounded-4xl overflow-hidden sm:col-span-2"
                >
                  <img
                    loading="lazy"
                    src={solutions[5]?.image_url}
                    alt={solutions[5]?.title}
                    className="w-full h-full object-cover grayscale-100 group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />

                  <div
                    className="absolute left-0 bottom-0 w-full flex flex-col justify-end px-8 
                translate-y-[calc(100%-50px)] group-hover:-translate-y-4 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold">
                      {solutions[5]?.title}
                    </h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {solutions[5]?.short_description}
                    </p>
                  </div>
                </Link>
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
