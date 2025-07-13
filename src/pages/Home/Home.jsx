import CompanyState from "../../components/sections/CompanyState/CompanyState";
import Partners from "../../components/sections/Partners/Partners";
import ServicesSection from "./sections/ServicesSection/ServicesSection";
import Testimonials from "../../components/sections/Testimonials/Testimonials";
import SuccessStory from "./sections/SuccessStory/SuccessStory";
import FAQ from "../../components/sections/FAQ/FAQ";
import ContactUsSection from "../../components/sections/ContactUsSection/ContactUsSection";
import Hero from "../../components/sections/Hero/Hero";
import VideoSection from "./sections/VideoSection/VideoSection";
import VideosSlider from "./sections/VideosSlider/VideosSlider";
import { Helmet } from "react-helmet";
import ProjectsSection from "../../components/sections/ProjectsSection/ProjectsSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>الرئيسية | Life Media</title>
        <meta
          name="description"
          content="شركة Life Media تقدم أفضل خدمات التصميم والتسويق الإلكتروني."
        />
        <meta property="og:title" content="الرئيسية | Life Media" />
        <meta
          property="og:description"
          content="تعرف على خدماتنا ومشاريعنا وآراء العملاء."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section>
        <Hero />
        <CompanyState />
        <VideoSection />
        <Partners />
        <VideosSlider />
        <ProjectsSection home />
        <ServicesSection />
        <Testimonials />
        <SuccessStory />
        <FAQ />
        <ContactUsSection />
      </section>
    </>
  );
};

export default Home;
