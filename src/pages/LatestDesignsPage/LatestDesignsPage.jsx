import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import SectionTitle from "../../components/common/SectionTitle";
import MediaStore from "../../components/sections/MediaStore";
import { useQuery } from "@tanstack/react-query";
import { getLatestDesigns } from "../../api/mainServices";

const LatestDesignsPage = () => {
  const { t } = useTranslation();

  const { data, isLoading } = useQuery({
    queryKey: ["latest_designs"],
    queryFn: getLatestDesigns,
  });

  return (
    <>
      <Helmet>
        <title>{t("helmet.images_title")}</title>
        <meta name="description" content={t("helmet.images_description")} />
        <meta property="og:title" content={t("helmet.images_title")} />
        <meta
          property="og:description"
          content={t("helmet.images_description")}
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <article className="container sectionPadding mt-[70px]">
        <SectionTitle title={t("images_slider.title")} />

        <MediaStore type="images" data={data || []} loading={isLoading} />
      </article>
    </>
  );
};

export default LatestDesignsPage;
