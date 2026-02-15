import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import {  getSuccessStoryPage } from "../../api/pagesServices";
import { useParams } from "react-router-dom";
import StoryDetails from "../../components/sections/StoryDetails";
import SkeletonStoryDetails from "../../components/Loading/SkeletonLoading/SkeletonStoryDetails";

const SuccessStoryPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["successStoryPage", id],
    queryFn: () => getSuccessStoryPage(id),
  });

  if (isLoading) return <SkeletonStoryDetails />;

  return (
    <>
      <Helmet>
        <title>
          {data?.title ? `${data.title} | Life Media` : "Life Media"}
        </title>
        <meta
          name="description"
          content={data?.paragraph?.slice(0, 160) || ""}
        />
        <meta property="og:title" content={data?.title || ""} />
        <meta
          property="og:description"
          content={data?.paragraph?.slice(0, 160) || ""}
        />
        <meta property="og:image" content={data?.image_url || "/logo.png"} />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <StoryDetails data={data} />
    </>
  );
};

export default SuccessStoryPage;
