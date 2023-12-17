import { DataForm } from "../DataForm/DataForm";
import styles from "./Form.module.css";
import handsImage from "../../Media/hands.svg";

export const Form = () => {
  return (
    <div className={styles.form}>
      <div className="container">
        <h3>5% off on the first order</h3>
        <div className={styles.formBox}>
          <img src={handsImage} alt="hands" />
          <DataForm />
        </div>
      </div>
    </div>
  );
};
