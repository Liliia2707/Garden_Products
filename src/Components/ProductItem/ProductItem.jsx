import { useContext } from "react";
import { ThemeContext } from "../../Providers/Context";
import { baseUrl } from "../../utils/api";
import styles from "./ProductItem.module.css";

export const ProductsItem = ({ image, title, price, discont_price }) => {
  const [theme] = useContext(ThemeContext);
  const imageUrl = `${baseUrl}${image}`;
  const discount = price - discont_price;
  const discountPercentage = discont_price
    ? parseInt(((discount / price) * 100).toFixed(0), 10)
    : "";

  return (
    <div
      className={`${styles.productCard} ${
        discountPercentage ? styles["has-discount"] : ""
      }`}
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
          {discont_price === null ? (
            <p className={styles.price}>${price}</p>
          ) : (
            <>
              <p className={styles.price}>${discont_price}</p>
              <p className={styles.discont_price}>${price}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
