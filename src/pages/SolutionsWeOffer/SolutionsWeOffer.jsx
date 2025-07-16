import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBanners } from "../../store/banners/bannersAction";
import Hero from "../../components/sections/Hero/Hero";
import { useParams } from "react-router-dom";
import { getSolutionsDetails } from "../../store/solutions/solutionsAction";
import LoadingSection from "../../components/layout/Loading/LoadingSection";

const SolutionsWeOffer = () => {
  const { solution, loading: solutionLoading } = useSelector(
    (state) => state.solutions
  );
  const dispatch = useDispatch();
  const { solution_id } = useParams();

  useEffect(() => {
    dispatch(getBanners("home"));
    dispatch(getSolutionsDetails(solution_id));
  }, [dispatch, solution_id]);

  console.log(solution);

  const banners = [
    {
      id: solution?.id,
      mobile_image_url: solution?.banner_url,
      desktop_image_url: solution?.banner_url,
      title: solution?.title,
      paragraph: solution?.short_description,
      buttons: [],
    },
  ];

  if (solutionLoading) {
    return <LoadingSection />;
  }

  return (
    <article>
      <Hero banners={banners} loading={solutionLoading} />

      {solutionLoading ? (
        <LoadingSection />
      ) : (
        <section className="container sectionPadding">
          <div
            className="bg-light-gray rounded-2xl p-4 break-words overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: solution?.content }}
          ></div>
        </section>
      )}
    </article>
  );
};

export default SolutionsWeOffer;
