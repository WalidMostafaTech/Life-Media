const AboutUs = ({ data }) => {
  return (
    <article className="container sectionPadding flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-8">
      <img
        src={data?.about_us_logo}
        alt="logo"
        loading="lazy"
        className="w-40 lg:w-64"
      />

      <div
        className="htmlContent"
        dangerouslySetInnerHTML={{ __html: data?.about_us_text }}
      />
    </article>
  );
};

export default AboutUs;
