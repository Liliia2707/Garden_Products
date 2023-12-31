import { ProductsItem } from "../ProductItem/ProductItem";
import { baseUrl } from "../../utils/api";
import styles from "./ProductsList.module.css";
import { useEffect, useState } from "react";

export const ProductsList = () => {
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
      {productsList
        .filter((product) => product.discont_price)
        .map((product) => <ProductsItem key={product.id} {...product} />)
        .slice(0, 4)}
    </div>
  );
};
