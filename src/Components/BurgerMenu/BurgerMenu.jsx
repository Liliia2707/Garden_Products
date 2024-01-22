import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import exitBlack from "../../Media/exit-black.png";
import exitWhite from "../../Media/exit-white.png";
import { ThemeContext } from "../../Providers/Context";
import styles from "./BurgerMenu.module.css";

const BurgerMenu = ({ setClick }) => {
  const [theme, , , backgroundColor] = useContext(ThemeContext);
  const closeLinks = () => {
    setClick(false);
  };

  return (
    <div className={styles.burger_container}>
      <div className={styles.burger_box} style={backgroundColor}>
        <img
          onClick={closeLinks}
          src={theme ? exitWhite : exitBlack}
          alt="exit"
          id={styles.exit_button}
        />
        <div
          className={
            theme === false
              ? styles.menu_list
              : `${styles.menu_list} ${styles.menu_list_dark}`
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
      </div>
    </div>
  );
};

export default BurgerMenu;
