import { useContext } from "react";
import handsImage from "../../Media/hands.svg";
import { ThemeContext } from "../../Providers/Context";
import { DataForm } from "../DataForm/DataForm";
import styles from "./Form.module.css";

export const Form = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <div className={styles.form}>
      <div className="container">
        <div className={styles.form_wrapper}>
          <h3>5% off on the first order</h3>
          <div className={styles.formBox}>
            <img src={handsImage} alt="hands" className={styles.hidden} />
            <DataForm />
          </div>
        </div>
      </div>
    </div>
  );
};
