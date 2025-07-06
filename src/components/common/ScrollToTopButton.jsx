import { useEffect, useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.scrollY;
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const threshold = pageHeight * 0.1;

      setIsVisible(scrollTop > threshold);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-0 start-4 z-50 p-3 rounded-full bg-dark-gray text-white border border-dark-red 
        cursor-pointer transition-all duration-300 ${
          isVisible
            ? "opacity-100 bottom-4 lg:bottom-24"
            : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <IoIosArrowUp className="text-2xl" />
      </button>

      <div
        className={`fixed bottom-0 end-4 z-50 hidden lg:flex flex-col gap-4 transition-all duration-300 ${
          isVisible
            ? "opacity-100 bottom-4 lg:bottom-24"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <span className="text-white text-3xl bg-dark-red p-2 rounded-xl cursor-pointer">
          <FaPhoneAlt />
        </span>
        <span className="text-white text-3xl bg-dark-red p-2 rounded-xl cursor-pointer">
          <FaWhatsapp />
        </span>
      </div>
    </>
  );
};

export default ScrollToTopButton;
