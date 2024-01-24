import { useEffect, useState } from "react";
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
    };
    fetchProductsList();
  }, []);
  return (
    <div className={styles.products_block}>
      {content === "main"
        ? productsList
            .filter((product) => product.discont_price)
            .map((product) => <ProductsItem key={product.id} {...product} />)
            .slice(0, 4)
        : content === "sale"
        ? productsList
            .filter((product) => product.discont_price)
            .map((product) => <ProductsItem key={product.id} {...product} />)
        : productsList.map((product) => (
            <ProductsItem key={product.id} {...product} />
          ))}
    </div>
  );
};
