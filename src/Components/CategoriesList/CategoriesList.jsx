import { useState } from "react";
import style from "./CategoriesList.module.css";
import { useEffect } from "react";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import { baseUrl } from "../../utils/api";

export const CategoriesList = ({ content }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(`${baseUrl}/categories/all`);
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);
  return (
    <div>
      <div className={style.categories_block}>
        {content === "main"
          ? categories
              .map((category) => (
                <CategoryItem key={category.id} {...category} />
              ))
              .splice(0, 4)
          : categories.map((category) => (
              <CategoryItem key={category.id} {...category} />
            ))}
      </div>
    </div>
  );
};
