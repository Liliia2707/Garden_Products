import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../Providers/Context";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  const [theme, , textColor] = useContext(ThemeContext);

  return (
    <div className={styles.navigation}>
      <ul>
        <li>
          <NavLink
            to="/main_page"
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${theme ? styles.link_dark : ""} ${
                    styles.active
                  }`
                : `${styles.link} ${theme ? styles.link_dark : ""}`
            }
          >
            Main Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${theme ? styles.link_dark : ""} ${
                    styles.active
                  }`
                : `${styles.link} ${theme ? styles.link_dark : ""}`
            }
          >
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${theme ? styles.link_dark : ""} ${
                    styles.active
                  }`
                : `${styles.link} ${theme ? styles.link_dark : ""}`
            }
          >
            All products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sales"
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${theme ? styles.link_dark : ""} ${
                    styles.active
                  }`
                : `${styles.link} ${theme ? styles.link_dark : ""}`
            }
          >
            All sales
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
