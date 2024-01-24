import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsList } from "../../Components/ProductsList/ProductsList";
import { ThemeContext } from "../../Providers/Context";
import styles from "./AllProductsPage.module.css";

const AllProductsPage = () => {
  const [, , textColor, backgroung] = useContext(ThemeContext);
  return (
    <div style={backgroung}>
      <div className="container">
        <div className={styles.button_box}>
          <Link to="/main_page">
            <button>Main page</button>
          </Link>
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
