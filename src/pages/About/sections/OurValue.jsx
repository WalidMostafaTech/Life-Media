import { useTranslation } from "react-i18next";
import SectionTitle from "../../../components/common/SectionTitle";

const OurValue = ({ data }) => {
  const { t } = useTranslation();

  return (
    <article className="container sectionPadding">
      <SectionTitle title={t("about.our_value")} />

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-auto">
        {data?.map((item, index) => (
          <div
            key={index}
            className="min-h-48 flex flex-col justify-end gap-2 p-4 pt-8 bg-light-gray rounded-xl"
          >
            <h2 className="text-3xl lg:text-5xl font-bold">{item.title}</h2>
            <p className="text-lg">{item.body}</p>
          </div>
        ))}
      </section>
    </article>
  );
};

export default OurValue;
