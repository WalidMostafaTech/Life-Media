import { useTranslation } from "react-i18next";
import SectionTitle from "../../../components/common/SectionTitle";

const OurValue = () => {
  const { t } = useTranslation();

  const ourValue = [
    {
      title: "title title",
      description:
        "description description description description description description description description",
    },
    {
      title: "title title",
      description:
        "description description description description description description description description",
    },
    {
      title: "title title",
      description:
        "description description description description description description description description",
    },
    {
      title: "title title",
      description:
        "description description description description description description description description",
    },
  ];

  return (
    <article className="container sectionPadding">
      <SectionTitle title={"Our Value"} />

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {ourValue.map((item, index) => (
          <div
            key={index}
            className="h-48 flex flex-col justify-end gap-2 p-4 bg-light-gray rounded-xl"
          >
            <h2 className="text-3xl lg:text-5xl font-bold">{item.title}</h2>
            <p className="text-lg">{item.description}</p>
          </div>
        ))}
      </section>
    </article>
  );
};

export default OurValue;
