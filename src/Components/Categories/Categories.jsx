import { useState } from "react";
import style from "./Categories.module.css";
import { useEffect } from "react";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import { baseUrl } from "../../utils/api";

export const Catigories = () => {
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
      <div className="container">
        <div className={style.title_box}>
          <h3>Categories</h3>
          <div className={style.line}></div>
          <button>All categories </button>
        </div>
        <div className={style.categories_block}>
          {categories
            .map((category) => <CategoryItem key={category.id} {...category} />)
            .splice(0, 4)}
        </div>
      </div>
    </div>
  );
};
