import { useTranslation } from "react-i18next";
import LoadingSection from "../../layout/Loading/LoadingSection";

const FilterProjects = ({
  categories,
  loading,
  setActiveCategory,
  activeCategory,
}) => {
  const { t } = useTranslation();

  if (loading) {
    return <LoadingSection />;
  }

  return (
    <div className="flex flex-wrap gap-4 mb-4 lg:mb-8">
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
