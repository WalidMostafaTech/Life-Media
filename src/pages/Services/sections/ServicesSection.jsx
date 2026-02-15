import { useQuery } from "@tanstack/react-query";
import { getSolutions } from "../../../api/SolutionsServices";
import SkeletonServicesPage from "../../../components/Loading/SkeletonLoading/SkeletonServicesPage";

const ServicesSection = () => {
  const { data: solutions = [], isLoading } = useQuery({
    queryKey: ["solutions"],
    queryFn: getSolutions,
  });

  if (isLoading) return <SkeletonServicesPage />;

  return (
    <section className="container sectionPadding max-w-6xl mx-auto">
      <div className="space-y-8">
        {solutions?.map((solution) => (
          <div
            key={solution.id}
            className="flex flex-col md:flex-row md:even:flex-row-reverse gap-4"
          >
            <img
              src={solution.image_url}
              alt={solution.title}
              loading="lazy"
              className="w-full md:w-1/2 aspect-square object-cover rounded-4xl"
            />

            <div className="space-y-2 md:space-y-4 w-full md:w-1/2 content-center">
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
