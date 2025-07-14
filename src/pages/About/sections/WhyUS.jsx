import { useTranslation } from "react-i18next";
import SectionTitle from "../../../components/common/SectionTitle";
import LoadingSection from "../../../components/layout/Loading/LoadingSection";

const WhyUS = ({ data, loading }) => {
  const { t } = useTranslation();

  if (loading) {
    return <LoadingSection />;
  }

  return (
    <article className="container sectionPadding">
      <SectionTitle title={t("about.why_us")} />

      <div
        className="text-lg mb-4"
        dangerouslySetInnerHTML={{ __html: data?.why_us_text }}
      />

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {data?.why_us_boxes?.map((item, index) => (
          <div key={index} className="h-48 p-4 bg-light-gray rounded-xl">
            <h3 className="text-4xl font-bold">{item}</h3>
          </div>
        ))}
      </section>
    </article>
  );
};

export default WhyUS;
