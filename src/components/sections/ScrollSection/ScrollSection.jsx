import { useEffect, useState } from "react";
import ScrollToTopButton from "./ScrollToTopButton";
import ContactBtns from "./ContactBtns";

const ScrollSection = () => {
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

  return (
    <>
      {/* Scroll to top */}
      <ScrollToTopButton isVisible={isVisible} />

      {/* contact */}
      {/* <ContactBtns isVisible={isVisible} /> */}
    </>
  );
};

export default ScrollSection;
