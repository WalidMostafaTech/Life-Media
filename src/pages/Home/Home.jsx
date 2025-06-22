import CompanyState from "./sections/CompanyState";
import Partenars from "./sections/Partenars";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import SuccessStory from "./sections/SuccessStory/SuccessStory";
import FAQ from "./sections/FAQ";
import CTA from "../../components/common/CTA";
import ContactUS from "./sections/ContactUS";
import Hero from "./sections/Hero/Hero";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section>
      <Hero />
      <CompanyState />
      <Partenars />

      <CTA text1={t("cta.ready")} btnText={t("cta.become_client")} />

      <Projects />

      <CTA
        text1={t("cta.seen_something")}
        text2={t("cta.next_success")}
        btnText={t("cta.start_project")}
      />

      <Services />

      <CTA
        text1={t("cta.not_sure")}
        text2={t("cta.build_together")}
        btnText={t("cta.book_call")}
      />

      <Testimonials />
      <SuccessStory />
      <FAQ />
      <ContactUS />
    </section>
  );
};

export default Home;
