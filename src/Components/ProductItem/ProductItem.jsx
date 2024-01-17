import { useContext } from "react";
import { ThemeContext } from "../../Providers/Context";
import { baseUrl } from "../../utils/api";
import styles from "./ProductItem.module.css";

export const ProductsItem = ({ image, title, price, discont_price }) => {
  const [theme] = useContext(ThemeContext);
  const imageUrl = `${baseUrl}${image}`;
  const discount = price - discont_price;
  const discountPercentage = parseInt(
    ((discount / price) * 100).toFixed(0),
    10
  );

  return (
    <div
      className={styles.productCard}
      data-discount-percentage={discountPercentage}
    >
      <img src={imageUrl} alt={title} />
      <div className={styles.text_descriptoin}>
        <p
          className={
            theme === false
              ? styles.title
              : `${styles.title} ${styles.title_dark}`
          }
        >
          {title}
        </p>
        <div
          className={
            theme === false
              ? styles.prices
              : `${styles.prices} ${styles.prices_dark}`
          }
        >
          <p>${price}</p>
          <p>${discont_price}</p>
        </div>
      </div>
    </div>
  );
};
