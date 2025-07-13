import ContactUsSection from "../../components/sections/ContactUsSection/ContactUsSection";
import FAQ from "../../components/sections/FAQ/FAQ";
import Hero from "../../components/sections/Hero/Hero";
import ProjectsSection from "../../components/sections/ProjectsSection/ProjectsSection";

const Projects = () => {
  return (
    <section>
      <Hero />
      <ProjectsSection />
      <FAQ />
      <ContactUsSection />
    </section>
  );
}

export default Projects;
