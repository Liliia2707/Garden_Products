import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../utils/api";
import { ProductsItem } from "../ProductItem/ProductItem";
import styles from "./ProductsList.module.css";

export const ProductsList = ({ content }) => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const fetchProductsList = async () => {
      const response = await fetch(`${baseUrl}/products/all`);
      const data = await response.json();
      setProductsList(data);
      console.log(data);
    };
    fetchProductsList();
  }, []);
  return (
    <div className={styles.products_block}>
      {content === "main"
        ? productsList
            .filter((product) => product.discont_price)
            .slice(0, 4)
            .map((product) => (
              <Link
                to={`/sales/${product.id}`}
                key={product.id}
                className={styles.link}
              >
                <ProductsItem {...product} />
              </Link>
            ))
        : content === "sale"
        ? productsList
            .filter((product) => product.discont_price)
            .map((product) => (
              <Link
                to={`/sales/${product.id}`}
                key={product.id}
                className={styles.link}
              >
                <ProductsItem {...product} />
              </Link>
            ))
        : productsList &&
          productsList.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className={styles.link}
            >
              <ProductsItem {...product} />
            </Link>
          ))}
    </div>
  );
};
