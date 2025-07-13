import { useTranslation } from "react-i18next";
import CTA from "../../components/common/CTA";
import ProjectHero from "./sections/ProjectHero";
import Partners from "../../components/sections/Partners/Partners";
import ProjectImages from "./sections/ProjectImages";

const ProjectPage = () => {
  const { t } = useTranslation();
  return (
    <article>
      <ProjectHero />
      <ProjectImages />
      <CTA
        text1={t("cta.seen_something")}
        text2={t("cta.next_success")}
        btnText={t("cta.start_project")}
      />
      <Partners />
    </article>
  );
};

export default ProjectPage;
