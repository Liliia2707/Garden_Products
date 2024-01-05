import { CategoriesList } from "../../Components/CategoriesList/CategoriesList";
import { Footer } from "../../Layaut/Footer/Footer";
import { Header } from "../../Layaut/Header/Header";
import style from "./CategoriesPage.module.css";

export const CategoriesPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className={style.button_box}>
          <button>Main page</button>
          <div className={style.line}></div>
          <button>Categories</button>
        </div>
        <p className={style.title}>Categories</p>
      </div>
      <CategoriesList />
      <Footer />
    </div>
  );
};
