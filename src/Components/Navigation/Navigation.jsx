import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../Providers/Context";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  const [theme, , textColor] = useContext(ThemeContext);

  return (
    <div
      className={
        theme === false
          ? styles.navigation
          : `${styles.navigation} ${styles.link_dark}`
      }
    >
      <ul>
        <li>
          <NavLink
            to="/main_page"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Main Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            All products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sales"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            All sales
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
