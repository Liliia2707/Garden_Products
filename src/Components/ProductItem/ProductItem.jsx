import styles from "./ProductItem.module.css";
import { baseUrl } from "../../utils/api";

export const ProductsItem = ({ image, title, price, discont_price }) => {
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
        <p>{title}</p>
        <div className={styles.prices}>
          <p>${price}</p>
          <p>${discont_price}</p>
        </div>
      </div>
    </div>
  );
};
