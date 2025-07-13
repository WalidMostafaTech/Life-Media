import { useState } from "react";

const FilterProjects = () => {
  const categories = ["All", "Web", "Mobile", "Desktop", "UI/UX"];
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="flex flex-wrap gap-4 mb-4 lg:mb-8">
      {categories.map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveCategory(item)}
          className={`mainBtn transparent ${
            activeCategory === item ? "active" : ""
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FilterProjects;
