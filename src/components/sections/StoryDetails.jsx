const StoryDetails = ({ data }) => {
  return (
    <article className="container sectionPadding mt-[70px] space-y-4">
      <div className="w-full lg:h-[60vh] overflow-hidden">
        <img
          src={data?.image_url}
          alt={data?.title}
          className="w-full h-full object-contain"
        />
      </div>

      <h1 className="text-2xl lg:text-4xl font-bold text-center max-w-2xl mx-auto">
        {data?.title}
      </h1>

      <div
        className="htmlContent"
        dangerouslySetInnerHTML={{
          __html: data?.paragraph,
        }}
      />
    </article>
  );
};

export default StoryDetails;
