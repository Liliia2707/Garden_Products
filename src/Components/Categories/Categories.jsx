import { useContext } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/categories">
            <button>All categories </button>
          </Link>
        </div>
        <CategoriesList content="main" />
        <div className={style.hidden_button}>
          <Link to="/categories">
            <button>All categories</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
