import { useState, useEffect } from "react";
import { baseUrl } from "../../utils/api";
import styles from "./SingleProductPage.module.css";
import plus from "../../Media/plus.svg";
import minus from "../../Media/minus.svg";

export const SingleProductPage = () => {
  const [product, setProduct] = useState([{}]);
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`${baseUrl}/products/1 `);
      const data = await response.json();
      console.log(data);
      setProduct(data);
    };
    fetchProduct();
  }, []);

  const imageUrl =
    product[0] && product[0].image ? `${baseUrl}${product[0].image}` : "";
  const discount = product[0].price - product[0].discont_price;
  const discountPercentage = parseInt(
    ((discount / product[0].price) * 100).toFixed(0),
    10
  );
  return (
    <div>
      <div className="container">
        <div className={styles.card_product}>
          <img src={imageUrl} alt={product[0].title} />
          <div className={styles.card_descriptoin}>
            <h2>{product[0].title}</h2>
            <div className={styles.prices_box}>
              <p>${product[0].price}</p>
              <p>${product[0].discont_price}</p>
              <p>-{discountPercentage}%</p>
            </div>
            <div className={styles.button_box}>
              <div className={styles.counter_box}>
                <div className={styles.minus}>
                  <img src={minus} alt="minus" />
                </div>
                <div className={styles.counter}>
                  <p>1</p>
                </div>
                <div className={styles.plus}>
                  <img src={plus} alt="plus" />
                </div>
              </div>
              <button>Add to cart</button>
            </div>
            <div className={styles.text_box}>
              <p>Description</p>
              <p>{product[0].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
