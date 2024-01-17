import { useContext } from "react";
import { ThemeContext } from "../../Providers/Context";
import { CategoriesList } from "../CategoriesList/CategoriesList";
import style from "./Categories.module.css";

export const Categories = () => {
  const [, , textColor] = useContext(ThemeContext);
  return (
    <div>
      <div className="container">
        <div className={style.title_box}>
          <h3 style={textColor}>Categories</h3>
          <div className={style.line}></div>
          <button>All categories </button>
        </div>
        <CategoriesList content="main" />
        <div className={style.hidden_button}>
          <button>All categories </button>
        </div>
      </div>
    </div>
  );
};
