import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsList } from "../../Components/ProductsList/ProductsList";
import { ThemeContext } from "../../Providers/Context";
import styles from "./SalePage.module.css";

const SalePage = () => {
  const [, , textColor, backgroung] = useContext(ThemeContext);
  return (
    <div style={backgroung}>
      <div className="container">
        <div className={styles.button_box}>
          <Link to="/main_page">
            <button>Main page</button>
          </Link>
          <div className={styles.line}></div>
          <button>All sales</button>
        </div>
        <p className={styles.title} style={textColor}>
          Discounted items
        </p>
        <ProductsList content="sale" />
      </div>
    </div>
  );
};

export default SalePage;
