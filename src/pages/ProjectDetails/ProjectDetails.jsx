import { useTranslation } from "react-i18next";
import CTA from "../../components/common/CTA";
import ProjectHero from "./sections/ProjectHero";
import Partners from "../../components/sections/Partners";
import ProjectImages from "./sections/ProjectImages";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { getProjectDetails } from "../../api/projectsServices";
import SkeletonProjectDetails from "../../components/Loading/SkeletonLoading/SkeletonProjectDetails";

const ProjectDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const { data: project = [], isLoading } = useQuery({
    queryKey: ["projectDetails", id],
    queryFn: () => getProjectDetails(id),
  });

  if (isLoading) return <SkeletonProjectDetails />;

  const metaTitle = project?.title || t("helmet.project_title_fallback");
  const metaDescription =
    project?.short_description || t("helmet.project_description_fallback");
  const metaImage = project?.image_url || "/logo.png";

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <article>
        <ProjectHero project={project} />

        <div
          className="htmlContent container lg:max-w-3xl sectionPadding"
          dangerouslySetInnerHTML={{ __html: project?.long_description }}
        />

        <ProjectImages projectImages={project?.posters} />

        <CTA
          text1={t("cta.need_something")}
          text2={t("cta.next_success")}
          btnText={t("cta.start_project")}
        />

        <Partners />
      </article>
    </>
  );
};

export default ProjectDetails;
