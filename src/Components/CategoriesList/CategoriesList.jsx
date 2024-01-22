import { useEffect, useState } from "react";
import { baseUrl } from "../../utils/api";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import styles from "./CategoriesList.module.css";

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
      <div className={styles.categories_block}>
        {content === "main"
          ? categories
              .map((category) => (
                // <Link to={`/categories/${category.id}`}  >
                <CategoryItem {...category} key={category.id} />
                // </Link>
              ))
              .slice(0, 4)
          : categories.map((category) => (
              <CategoryItem {...category} key={category.id} />
            ))}
      </div>
    </div>
  );
};
