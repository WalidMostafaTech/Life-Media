const SectionTitle = ({ title, subTitle }) => {
  return (
    <hgroup className="mb-4 lg:mb-8 text-center">
      <h2 className="text-3xl lg:text-4xl">{title}</h2>
      {subTitle && (
        <p className="text-lg lg:text-2xl text-center mt-2">{subTitle}</p>
      )}
    </hgroup>
  );
};

export default SectionTitle;
