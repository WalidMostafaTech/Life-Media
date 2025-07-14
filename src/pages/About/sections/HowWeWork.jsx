import { useTranslation } from "react-i18next";
import SectionTitle from "../../../components/common/SectionTitle";
import LoadingSection from "../../../components/layout/Loading/LoadingSection";

const HowWeWork = ({ data, loading }) => {
  const { t } = useTranslation();

  if (loading) {
    return <LoadingSection />;
  }

  return (
    <article className="container sectionPadding">
      <SectionTitle
        title={t("about.how_we_work")}
        subTitle={t("about.how_we_work_sub_title")}
      />

      <section className="space-y-4">
        {data?.map((item, index) => (
          <div key={index} className="flex justify-start even:justify-end">
            <div className="bg-light-gray rounded-xl flex items-center gap-4 p-4 lg:p-8 w-full lg:w-3/4">
              <h2 className="text-6xl lg:text-8xl font-bold text-dark-red">
                0{index + 1}
              </h2>

              <div>
                <h3 className="text-2xl lg:text-5xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-lg">{item.body}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
};

export default HowWeWork;
