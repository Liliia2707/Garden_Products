import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsItem } from "../../Components/ProductItem/ProductItem";
import { ThemeContext } from "../../Providers/Context";
import { baseUrl } from "../../utils/api";
import styles from "./SingleCategoryPage.module.css";

const SingleCategoryPage = () => {
  const [, , textColor, backgroung] = useContext(ThemeContext);

  const [category, setCategory] = useState({});
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(`${baseUrl}/categories/${id}`);
      const data = await response.json();
      setCategory(data.category);
      setData(data.data);
    };
    fetchCategory();
  }, [id]);

  return (
    <div style={backgroung}>
      <div className="container">
        <div className={styles.button_box}>
          <Link to="/main_page">
            <button>Main page</button>
          </Link>
          <div className={styles.line}></div>
          <button>All products</button>
        </div>
        <p style={textColor} className={styles.title}>
          {category && category.title}
        </p>
        <div className={styles.products_block}>
          {data &&
            data.map((product) => (
              <Link
                to={`/categories/${id}/${product.id}`}
                key={product.id}
                className={styles.link}
              >
                <ProductsItem {...product} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SingleCategoryPage;
