import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import minus from "../../Media/minus.svg";
import plus from "../../Media/plus.svg";
import { ThemeContext } from "../../Providers/Context";
import { baseUrl } from "../../utils/api";
import styles from "./SingleProductPage.module.css";

export const SingleProductPage = () => {
  const [, , textColor, background] = useContext(ThemeContext);
  const [value, setValue] = useState(1);
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const { categoryId, categoryTitle } = location.state || {};

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`${baseUrl}/products/${id}`);
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProduct();
  }, [id]);

  let buttonText = "";
  let linkTo = "";

  if (location.pathname.startsWith("/products/")) {
    buttonText = "All products";
    linkTo = "/products";
  } else if (location.pathname.startsWith("/categories/")) {
    buttonText = "Categories";
    linkTo = "/categories";
  } else if (location.pathname.startsWith("/sales/")) {
    buttonText = "All sales";
    linkTo = "/sales";
  }

  return (
    <div style={background}>
      <div className="container">
        <div className={styles.buttons}>
          <Link to={"/main_page"}>
            <button>Main page</button>
          </Link>
          <div className={styles.line}></div>
          <Link to={linkTo}>
            <button>{buttonText}</button>
          </Link>
          <div className={styles.line}></div>
          <Link to={`/categories/${categoryId}`}>
            <button style={{ display: categoryTitle ? "block" : "none" }}>
              {categoryTitle || "Default Text"}
            </button>
          </Link>
          <div
            style={{ display: categoryTitle ? "block" : "none" }}
            className={styles.line}
          ></div>
          <button id={styles.last_button}>
            {products.length > 0 ? products[0].title : ""}
          </button>
        </div>

        {products.map((product) => (
          <div key={product.id} className={styles.card_product}>
            <img
              src={`${baseUrl}${product.image}`}
              alt={product.title}
              className={styles.image_card}
            />
            <div className={styles.card_descriptoin}>
              <h2 style={textColor}>{product.title}</h2>
              <div className={styles.prices_box}>
                {product.discont_price === null ? (
                  <p className={styles.price} style={textColor}>
                    ${product.price}
                  </p>
                ) : (
                  <>
                    <p style={textColor} className={styles.price}>
                      ${product.discont_price}
                    </p>
                    <p className={styles.discont_price}>${product.price}</p>
                  </>
                )}
                {product.discont_price && (
                  <p className={styles.discountPercentage}>
                    -
                    {Math.round(
                      ((product.price - product.discont_price) /
                        product.price) *
                        100
                    )}
                    %
                  </p>
                )}
              </div>
              <div className={styles.button_box}>
                <div className={styles.counter_box}>
                  <div className={styles.minus}>
                    <img
                      src={minus}
                      alt="minus"
                      onClick={() => setValue(value > 1 ? value - 1 : 1)}
                    />
                  </div>
                  <div className={styles.counter}>
                    <p style={textColor}>{value}</p>
                  </div>
                  <div className={styles.plus}>
                    <img
                      src={plus}
                      alt="plus"
                      onClick={() => setValue(value + 1)}
                    />
                  </div>
                </div>
                <button>Add to cart</button>
              </div>
              <div className={styles.text_box}>
                <p style={textColor}>Description</p>
                <p style={textColor}>{product.description}</p>
              </div>
            </div>
          </div>
        ))}

        <div className={styles.text_box_hidden}>
          <p>Description</p>
          <p style={textColor}>
            {products.length > 0 ? products[0].description : ""}
          </p>
        </div>
      </div>
    </div>
  );
};
