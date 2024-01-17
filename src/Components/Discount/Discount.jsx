import { useContext } from "react";
import { ThemeContext } from "../../Providers/Context";
import styles from "./Discount.module.css";

export const Discount = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <div
      className={
        theme === false
          ? styles.discount
          : `${styles.discount} ${styles.discount_dark}`
      }
    >
      <div className="container">
        <div className={styles.discount_wrapper}>
          <h1>Amazing Discounts on Garden Products!</h1>
          <button>Check out</button>
        </div>
      </div>
    </div>
  );
};
