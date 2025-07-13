import CompanyState from "../../components/sections/CompanyState/CompanyState";
import ContactUsSection from "../../components/sections/ContactUsSection/ContactUsSection";
import FAQ from "../../components/sections/FAQ/FAQ";
import Hero from "../../components/sections/Hero/Hero";
import Partners from "../../components/sections/Partners/Partners";
import Testimonials from "../../components/sections/Testimonials/Testimonials";
import AboutUs from "./sections/AboutUs";
import HowWeWork from "./sections/HowWeWork";
import OurValue from "./sections/OurValue";
import WhyUS from "./sections/WhyUS";

const About = () => {
  return (
    <section>
      <Hero />
      <AboutUs />
      <CompanyState />
      <OurValue />
      <Partners />
      <HowWeWork />
      <WhyUS />
      <Testimonials />
      <FAQ />
      <ContactUsSection />
    </section>
  );
}

export default About;
