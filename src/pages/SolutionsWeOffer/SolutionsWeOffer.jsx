import { useParams } from "react-router-dom";

import { Helmet } from "react-helmet";
import HeroSection from "../../components/sections/HeroSection";
import { useQuery } from "@tanstack/react-query";
import { getSolutionsDetails } from "../../api/SolutionsServices";
import SkeletonSolutionsWeOffer from "../../components/Loading/SkeletonLoading/SkeletonSolutionsWeOffer";

const SolutionsWeOffer = () => {
  const { id } = useParams();

  const { data: solution = [], isLoading } = useQuery({
    queryKey: ["solution"],
    queryFn: () => getSolutionsDetails(id),
  });

  if (isLoading) return <SkeletonSolutionsWeOffer />;

  const bannersData = [
    {
      id: solution?.id,
      mobile_image_url: solution?.banner_url,
      desktop_image_url: solution?.banner_url,
      title: solution?.title,
      paragraph: solution?.short_description,
      buttons: [],
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {solution?.title ? `${solution.title} | Life Media` : "Life Media"}
        </title>
        <meta name="description" content={solution?.short_description} />
        <meta property="og:title" content={solution?.title} />
        <meta property="og:description" content={solution?.short_description} />
        <meta
          property="og:image"
          content={solution?.banner_url || "/logo.png"}
        />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <article>
        <HeroSection page="solutions" bannersData={bannersData} />

        {solution?.content && (
          <section className="container sectionPadding xl:max-w-6xl mx-auto">
            <div
              className="htmlContent bg-light-gray rounded-2xl p-4 break-words overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: solution?.content }}
            />
          </section>
        )}
      </article>
    </>
  );
};

export default SolutionsWeOffer;
