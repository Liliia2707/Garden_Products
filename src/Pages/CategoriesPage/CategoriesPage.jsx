import { useContext } from "react";
import { CategoriesList } from "../../Components/CategoriesList/CategoriesList";
import { ThemeContext } from "../../Providers/Context";
import styles from "./CategoriesPage.module.css";

export const CategoriesPage = () => {
  const [, , textColor, backgroung] = useContext(ThemeContext);
  return (
    <div style={backgroung}>
      <div className="container">
        <div className={styles.button_box}>
          <button>Main page</button>
          <div className={styles.line}></div>
          <button>Categories</button>
        </div>
        <p className={styles.title} style={textColor}>
          Categories
        </p>
        <CategoriesList />
      </div>
    </div>
  );
};
