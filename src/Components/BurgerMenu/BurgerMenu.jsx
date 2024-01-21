import React, { useContext } from "react";
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
    </div>
  );
};

export default BurgerMenu;
