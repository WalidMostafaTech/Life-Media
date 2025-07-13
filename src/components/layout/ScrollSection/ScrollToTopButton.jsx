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
      className={`fixed bottom-0 end-4 z-50 p-2 lg:p-4 rounded-full bg-light-gray text-white border border-dark-red 
        cursor-pointer transition-all duration-300 ${
          isVisible
            ? "opacity-100 bottom-4 lg:bottom-24"
            : "opacity-0 pointer-events-none"
        }`}
      aria-label="Scroll to top"
    >
      <IoIosArrowUp className="text-2xl" />
    </button>
  );
};

export default ScrollToTopButton;
