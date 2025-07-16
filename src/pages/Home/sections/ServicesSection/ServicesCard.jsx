import { Link } from "react-router-dom";

const ServicesCard = ({ solution, size = "small" }) => {
  return (
    <Link
      to={`/solutions-we-offer/${solution?.id}`}
      className={`group relative rounded-4xl overflow-hidden ${
        size === "large" ? "sm:col-span-2 lg:h-[500px]" : "lg:h-[550px]"
      }`}
    >
      <img
        loading="lazy"
        src={solution?.image_url}
        alt={solution?.title}
        className="w-full h-full object-cover grayscale-100 group-hover:grayscale-0 transition-all duration-300 ease-in-out"
      />

      <div
        className="absolute left-0 bottom-0 w-full flex flex-col justify-end px-8 
                  translate-y-[calc(100%-50px)] group-hover:-translate-y-4 transition-all duration-300"
      >
        <h3 className="text-2xl font-bold line-clamp-1">{solution?.title}</h3>
        <p className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
          {solution?.short_description}
        </p>
      </div>
    </Link>
  );
};

export default ServicesCard;
