const Skeleton = ({
  className = "",
  width = "w-full",
  height = "h-4",
  rounded = "rounded-md",
}) => {
  return (
    <div
      className={`
        animate-pulse
        bg-black/60
        ${width}
        ${height}
        ${rounded}
        ${className}
      `}
    />
  );
};

export default Skeleton;
