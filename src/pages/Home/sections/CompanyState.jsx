import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "../../../components/common/SectionTitle";
import { useEffect } from "react";
import { getSetting } from "../../../store/setting/settingAction";
import Loading from "../../../components/layout/Loading/Loading";
import { useTranslation } from "react-i18next";

const CompanyState = () => {
  const { setting, loading } = useSelector((state) => state.setting);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getSetting());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section id="Careers" className="container sectionPadding">
      <SectionTitle title={t("company_state_title")} />

      <div className="hidden xl:flex flex-wrap gap-4 justify-center">
        {setting?.provenResults?.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col min-w-[200px] gap-4 justify-end h-[400px] bg-black/30 p-6 rounded-lg shadow-lg 
            hover:bg-dark-red hover:flex-grow transition-all duration-700"
          >
            <span className="text-4xl group-hover:text-7xl duration-700">
              {item.count}
            </span>
            <p className="text-2xl group-hover:text-4xl duration-700">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div className="xl:hidden grid grid-cols-2 md:grid-cols-4 gap-4">
        {setting?.provenResults?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 bg-black/30 p-6 rounded-lg shadow-lg 
              hover:bg-dark-red hover:scale-105 transition-all duration-700"
          >
            <span className="text-4xl">{item.count}</span>
            <p className="text-2xl">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyState;
