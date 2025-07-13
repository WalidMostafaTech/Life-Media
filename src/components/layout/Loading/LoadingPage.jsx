import Loader from "./Loader";

const LoadingPage = ({ overlay = false }) => {
  return (
    <article
      className={`h-screen flex items-center justify-center ${
        overlay
          ? "w-screen fixed inset-0 z-50 bg-light-gray/80"
          : "bg-light-gray"
      }`}
    >
      <Loader />
    </article>
  );
};

export default LoadingPage;
