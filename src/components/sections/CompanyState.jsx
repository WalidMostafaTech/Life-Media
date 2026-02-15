import { useSelector } from "react-redux";
import SectionTitle from "../common/SectionTitle";
import { useTranslation } from "react-i18next";
import SkeletonCompanyState from "../Loading/SkeletonLoading/SkeletonCompanyState";

const CompanyState = () => {
  const { setting, loading } = useSelector((state) => state.setting);
  const { t } = useTranslation();

  if (loading) return <SkeletonCompanyState />;
  if (!setting?.provenResults?.length) return null;

  return (
    <article id="Careers" className="container sectionPadding">
      <SectionTitle title={t("company_state_title")} />

      <section className="flex flex-wrap gap-4 lg:flex-nowrap">
        {setting.provenResults.map((item, index) => (
          <div
            key={index}
            className="group relative h-[400px] w-full sm:w-[calc(50%-12px)] lg:w-full lg:flex-1 lg:basis-0 rounded-3xl
            overflow-hidden transition-all duration-700 ease-out lg:hover:flex-[2]"
          >
            <img
              src={item.image}
              alt={item.text}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-dark-red/90 via-dark-red/40 to-transparent">
              <span className="text-4xl lg:text-6xl transition-all duration-500 group-hover:text-7xl">
                {item.count}
              </span>

              <p className="text-2xl lg:text-3xl transition-all duration-500 group-hover:text-4xl">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
};

export default CompanyState;
