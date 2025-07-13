import SectionTitle from "../../../components/common/SectionTitle";

const WhyUS = () => {
  const whyUS = [
    {
      title: "title title title title title title",
    },
    {
      title: "title title title title title title",
    },
    {
      title: "title title title title title title",
    },
    {
      title: "title title title title title title",
    },
    {
      title: "title title title title title title",
    },
    {
      title: "title title title title title title",
    },
  ];

  return (
    <article className="container sectionPadding">
      <SectionTitle title={"Why Us?"} />

      <p className="text-lg mb-4">
        Because we don’t just deliver projects — we deliver impact.We combine
        creativity with strategy to craft digital experiences that are not only
        beautiful but built to perform. Our team dives deep into your brand to
        understand your goals, audience, and challenges — then we turn that
        insight into powerful design and smart solutions.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {whyUS.map((item, index) => (
          <div key={index} className="h-48 p-4 bg-light-gray rounded-xl">
            <h3 className="text-4xl font-bold">{item.title}</h3>
          </div>
        ))}
      </section>
    </article>
  );
};

export default WhyUS;
