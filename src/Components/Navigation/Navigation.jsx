import { useContext } from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/main_page">Main Page</NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
        <li>
          <NavLink to="/products">All products</NavLink>
        </li>
        <li>
          <NavLink to="/sales">All sales</NavLink>
        </li>
      </ul>
    </div>
  );
};
