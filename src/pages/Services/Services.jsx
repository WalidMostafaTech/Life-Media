import ContactUsSection from "../../components/sections/ContactUsSection/ContactUsSection";
import Hero from "../../components/sections/Hero/Hero";
import Partners from "../../components/sections/Partners/Partners";
import ServicesSection from "./ServicesSection";

const Services = () => {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <ContactUsSection />
      <Partners />
    </div>
  );
}

export default Services;
