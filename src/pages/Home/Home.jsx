import CompanyState from "./sections/CompanyState/CompanyState";
import Partners from "./sections/Partners/Partners";
import Projects from "./sections/Projects/Projects";
import Services from "./sections/Services/Services";
import Testimonials from "./sections/Testimonials/Testimonials";
import SuccessStory from "./sections/SuccessStory/SuccessStory";
import FAQ from "./sections/FAQ/FAQ";
import ContactUS from "./sections/ContactUS/ContactUS";
import Hero from "./sections/Hero/Hero";
import VideoSection from "./sections/VideoSection/VideoSection";
import VideosSlider from "./sections/VideosSlider/VideosSlider";

const Home = () => {
  return (
    <section>
      <Hero />
      <CompanyState />
      <VideoSection />
      <Partners />
      <VideosSlider />
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
