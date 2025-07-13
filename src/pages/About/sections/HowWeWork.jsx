import SectionTitle from "../../../components/common/SectionTitle";

const HowWeWork = () => {
  const howWeWork = [
    {
      title: "title title",
      description:
        "description description description description description description description description",
      number: "01",
    },
    {
      title: "title title",
      description:
        "description description description description description description description description",
      number: "02",
    },
    {
      title: "title title",
      description:
        "description description description description description description description description",
      number: "03",
    },
    {
      title: "title title",
      description:
        "description description description description description description description description",
      number: "04",
    },
  ];

  return (
    <article className="container sectionPadding">
      <SectionTitle
        title={"How We Work"}
        subTitle={
          "We follow a clear, collaborative, and proven workflow that keeps you involved at every step"
        }
      />

      <section className="space-y-4">
        {howWeWork.map((item, index) => (
          <div key={index} className="flex justify-start even:justify-end">
            <div className="bg-light-gray rounded-xl flex items-center gap-4 p-4 lg:p-8 w-full lg:w-3/4">
              <h2 className="text-6xl lg:text-8xl font-bold text-dark-red">
                {item.number}
              </h2>

              <div>
                <h3 className="text-2xl lg:text-5xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-lg">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
};

export default HowWeWork;
