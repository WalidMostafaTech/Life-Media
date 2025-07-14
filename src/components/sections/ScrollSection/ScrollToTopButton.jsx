import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = ({ isVisible }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-0 end-4 z-50 flex items-center justify-center w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-dark-red text-white border
        cursor-pointer transition-all duration-300 ${
          isVisible
            ? "opacity-100 bottom-4 lg:bottom-24"
            : "opacity-0 pointer-events-none"
        }`}
      aria-label="Scroll to top"
    >
      <IoIosArrowUp className="text-2xl lg:text-3xl" />
    </button>
  );
};

export default ScrollToTopButton;
