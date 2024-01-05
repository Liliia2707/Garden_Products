import { ProductsList } from "../ProductsList/ProductsList";
import style from "./Sale.module.css";

export const Sale = () => {
  return (
    <div>
      <div className="container">
        <div className={style.title_box}>
          <h3>Sale</h3>
          <div className={style.line}></div>
          <button>All sales</button>
        </div>
        <ProductsList />
        <div className={style.hidden_button}>
          <button>All sales</button>
        </div>
      </div>
    </div>
  );
};
