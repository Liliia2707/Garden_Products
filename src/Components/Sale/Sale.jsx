import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Providers/Context";
import { ProductsList } from "../ProductsList/ProductsList";
import style from "./Sale.module.css";

export const Sale = () => {
  const [, , textColor] = useContext(ThemeContext);
  return (
    <div>
      <div className="container">
        <div className={style.title_box}>
          <h3 style={textColor}>Sale</h3>
          <div className={style.line}></div>
          <Link to="/sales">
            <button>All sales</button>
          </Link>
        </div>
        <div className={style.link}>
          <ProductsList content="main" />
        </div>
        <div className={style.hidden_button}>
          <Link to="/sales">
            <button>All sales</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
