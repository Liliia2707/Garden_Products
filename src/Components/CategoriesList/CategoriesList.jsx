import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
                <Link
                  to={`/categories/${category.id}`}
                  key={category.id}
                  className={styles.link}
                >
                  <CategoryItem {...category} />
                </Link>
              ))
              .slice(0, 4)
          : categories.map((category) => (
              <Link
                to={`/categories/${category.id}`}
                key={category.id}
                className={styles.link}
              >
                <CategoryItem {...category} key={category.id} />
              </Link>
            ))}
      </div>
    </div>
  );
};
