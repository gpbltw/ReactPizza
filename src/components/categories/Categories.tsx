import React from "react";
import { useWhyDidYouUpdate } from "ahooks";

type categoriesProps = {
  value: number;
  onClickCategory: (i: number) => void;
};

const Categories: React.FC<categoriesProps> = ({ value, onClickCategory }) => {
  useWhyDidYouUpdate("Categories", { value, onClickCategory });
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            className={value === i ? "active" : ""}
            onClick={() => onClickCategory(i)}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
