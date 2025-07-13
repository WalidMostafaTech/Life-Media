import logoImg from "../../../assets/images/small-logo.png";

const AboutUs = () => {
  return (
    <article className="container sectionPadding flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-8">
      <img src={logoImg} alt="logo" loading="lazy" className="w-40 lg:w-64" />

      <div className="flex flex-col gap-4 lg:gap-8 text-xl lg:text-3xl">
        <p>
          We’re not just another creative agency — we’re your strategic partner
          in digital transformation. At our core, we blend design, technology,
          and storytelling to craft experiences that connect, inspire, and drive
          results.
        </p>
        <p>
          From startups to industry leaders, we help ambitious brands stand out
          in a crowded digital world. With a focus on clean aesthetics, bold
          visuals, and smart functionality, we deliver projects that leave
          lasting impressions.
        </p>
        <p>
          With every collaboration, we aim to challenge the ordinary — because
          your brand deserves more than average.
        </p>
      </div>
    </article>
  );
};

export default AboutUs;
