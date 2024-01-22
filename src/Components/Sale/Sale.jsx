import { useContext } from "react";
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
          <button>All sales</button>
        </div>
        <ProductsList content="main" />
        <div className={style.hidden_button}>
          <button>All sales</button>
        </div>
      </div>
    </div>
  );
};
