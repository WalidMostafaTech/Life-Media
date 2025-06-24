import CompanyState from "./sections/CompanyState/CompanyState";
import Partners from "./sections/Partners/Partners";
import Projects from "./sections/Projects/Projects";
import Services from "./sections/Services/Services";
import Testimonials from "./sections/Testimonials/Testimonials";
import SuccessStory from "./sections/SuccessStory/SuccessStory";
import FAQ from "./sections/FAQ/FAQ";
import ContactUS from "./sections/ContactUS/ContactUS";
import Hero from "./sections/Hero/Hero";

const Home = () => {

  return (
    <section>
      <Hero />
      <CompanyState />
      <Partners />
      <Projects />
      <Services />
      <Testimonials />
      <SuccessStory />
      <FAQ />
      <ContactUS />
    </section>
  );
};

export default Home;
