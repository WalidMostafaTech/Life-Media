import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "../../../../components/common/SectionTitle";
import { useEffect } from "react";
import { getSetting } from "../../../../store/setting/settingAction";
import { useTranslation } from "react-i18next";
import EmptySection from "../../../../components/layout/EmptySection/EmptySection";
import LoadingSection from "../../../../components/layout/Loading/LoadingSection";

const CompanyState = () => {
  const { setting, loading } = useSelector((state) => state.setting);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getSetting());
  }, [dispatch]);

  if (loading) {
    return <LoadingSection />;
  }

  return (
    <>
      {setting?.provenResults?.length > 0 ? (
        <section id="Careers" className="container sectionPadding">
          <SectionTitle title={t("company_state_title")} />

          {/* Desktop View */}
          <div className="hidden xl:flex flex-wrap gap-4 justify-center">
            {setting?.provenResults?.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col min-w-1/5 gap-4 justify-end h-[400px] bg-black/30 p-6 rounded-lg shadow-lg 
              hover:bg-dark-red hover:flex-grow transition-all duration-600"
              >
                <span className="text-4xl group-hover:text-7xl duration-600">
                  {item.count}
                </span>
                <p className="text-2xl group-hover:text-4xl duration-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="xl:hidden grid grid-cols-2 md:grid-cols-4 gap-4">
            {setting?.provenResults?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 bg-black/30 p-6 rounded-lg shadow-lg 
                hover:bg-dark-red hover:scale-105 transition-all duration-600"
              >
                <span className="text-4xl">{item.count}</span>
                <p className="text-2xl">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <EmptySection />
      )}
    </>
  );
};

export default CompanyState;
