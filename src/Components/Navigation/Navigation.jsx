import { useContext } from "react";
import { ThemeContext } from "../../Providers/Context";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <div
      className={
        theme === false
          ? styles.navigation
          : `${styles.navigation} ${styles.navigation_dark}`
      }
    >
      <ul>
        <li>
          <a href="#">Main Page</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
        <li>
          <a href="#">All products</a>
        </li>
        <li>
          <a href="#">All sales</a>
        </li>
      </ul>
    </div>
  );
};
