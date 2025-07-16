import { useTranslation } from "react-i18next";
import CTA from "../../components/common/CTA";
import ProjectHero from "./sections/ProjectHero";
import Partners from "../../components/sections/Partners/Partners";
import ProjectImages from "./sections/ProjectImages";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProjectDetails } from "../../store/projects/projectsAction";
import { useParams } from "react-router-dom";
import LoadingSection from "../../components/layout/Loading/LoadingSection";
import { Helmet } from "react-helmet";

const ProjectDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { project, loading } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectDetails(id));
  }, [dispatch, id]);

  if (loading) return <LoadingSection />;

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
          className="htmlContent container sectionPadding"
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
