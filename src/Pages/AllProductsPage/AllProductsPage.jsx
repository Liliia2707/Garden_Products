import { useContext } from "react";
import { ProductsList } from "../../Components/ProductsList/ProductsList";
import { ThemeContext } from "../../Providers/Context";
import styles from "./AllProductsPage.module.css";

const AllProductsPage = () => {
  const [, , textColor, backgroung] = useContext(ThemeContext);
  return (
    <div style={backgroung}>
      <div className="container">
        <div className={styles.button_box}>
          <button>Main page</button>
          <div className={styles.line}></div>
          <button>All products</button>
        </div>
        <p className={styles.title} style={textColor}>
          All products
        </p>
        <ProductsList />
      </div>
    </div>
  );
};

export default AllProductsPage;
