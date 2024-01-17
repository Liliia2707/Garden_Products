import { useContext } from "react";
import { CategoriesList } from "../../Components/CategoriesList/CategoriesList";
import { Footer } from "../../Layaut/Footer/Footer";
import { Header } from "../../Layaut/Header/Header";
import { ThemeContext } from "../../Providers/Context";
import style from "./CategoriesPage.module.css";

export const CategoriesPage = () => {
  const [, , textColor, backgroung] = useContext(ThemeContext);
  return (
    <div style={backgroung}>
      <Header />
      <div className="container">
        <div className={style.button_box}>
          <button>Main page</button>
          <div className={style.line}></div>
          <button>Categories</button>
        </div>
        <p className={style.title} style={textColor}>
          Categories
        </p>
        <CategoriesList />
      </div>
      <Footer />
    </div>
  );
};
