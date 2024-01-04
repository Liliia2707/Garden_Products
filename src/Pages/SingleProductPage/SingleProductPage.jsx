import { useState, useEffect } from "react";
import { baseUrl } from "../../utils/api";

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

  return (
    <div>
      <h2>{product[0].title}</h2>
      <img src={imageUrl} alt={product[0].title} />
      <h3>{product[0].price}</h3>
      <h4>{product[0].discont_price}</h4>
      <p>{product[0].description}</p>
    </div>
  );
};
