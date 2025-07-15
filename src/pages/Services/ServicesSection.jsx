import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSolutions } from "../../store/solutions/solutionsAction";
import LoadingSection from "../../components/layout/Loading/LoadingSection";

const ServicesSection = () => {
  const { solutions, loading } = useSelector((state) => state.solutions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSolutions());
  }, [dispatch]);

  if (loading) {
    return <LoadingSection />;
  }

  return (
    <section className="container sectionPadding">
      <div className="space-y-8">
        {solutions?.map((solution) => (
          <div
            key={solution.id}
            className="flex flex-col lg:flex-row lg:even:flex-row-reverse gap-4"
          >
            <img
              src={solution.image_url}
              alt={solution.title}
              loading="lazy"
              className="w-full lg:w-1/2 lg:aspect-square object-cover rounded-4xl"
            />

            <div className="space-y-2 lg:space-y-4 w-full lg:w-1/2 content-center">
              <h2 className="text-4xl font-bold">{solution.title}</h2>
              <p className="text-lg">{solution.short_description}</p>

              {solution.points?.map((point, index) => (
                <p
                  key={index}
                  className="bg-light-gray p-4 lg:p-8 rounded-xl text-lg"
                >
                  {point}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
