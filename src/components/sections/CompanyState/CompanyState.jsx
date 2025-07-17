import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "../../common/SectionTitle";
import { useEffect } from "react";
import { getSetting } from "../../../store/setting/settingAction";
import { useTranslation } from "react-i18next";
import EmptySection from "../../layout/EmptySection/EmptySection";
import LoadingSection from "../../layout/Loading/LoadingSection";

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
        <article id="Careers" className="container sectionPadding">
          <SectionTitle title={t("company_state_title")} />

          <section className="flex flex-wrap gap-4 justify-center">
            {setting?.provenResults?.map((item, index) => (
              <div
                key={index}
                className="group relative min-w-[250px] h-[300px] lg:h-[400px] bg-light-gray p-6 rounded-3xl overflow-hidden
                hover:bg-dark-red hover:flex-grow transition-all duration-500 ease-in-out"
              >
                <img
                  src={item.image}
                  alt="image"
                  loading="lazy"
                  className="w-full h-full object-cover absolute top-0 left-0"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-dark-red via-transparent to-transparent">
                  <span className="text-4xl group-hover:text-7xl duration-500 ease-in-out">
                    {item.count}
                  </span>
                  <p className="text-2xl group-hover:text-4xl duration-500 ease-in-out">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </article>
      ) : (
        <EmptySection />
      )}
    </>
  );
};

export default CompanyState;
