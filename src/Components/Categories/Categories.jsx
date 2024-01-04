import { CategoriesList } from "../CategoriesList/CategoriesList";
import style from "./Categories.module.css";

export const Categories = () => {
  return (
    <div>
      <div className="container">
        <div className={style.title_box}>
          <h3>Categories</h3>
          <div className={style.line}></div>
          <button>All categories </button>
        </div>
      </div>
      <CategoriesList content="main" />
    </div>
  );
};
