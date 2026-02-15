import { useTranslation } from "react-i18next";
import { getCategories } from "../../../api/projectsServices";
import { useQuery } from "@tanstack/react-query";

const FilterProjects = ({ setActiveCategory, activeCategory }) => {
  const { t } = useTranslation();

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return (
    <div className="flex flex-wrap gap-4 container pt-8">
      <button
        onClick={() => setActiveCategory("all")}
        className={`mainBtn transparent ${
          activeCategory === "all" ? "active" : ""
        }`}
      >
        {t("all")}
      </button>

      {categories?.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveCategory(item.name)}
          className={`mainBtn transparent ${
            activeCategory === item.name ? "active" : ""
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default FilterProjects;
