import { useContext, useState } from "react";
import BurgerMenu from "../../Components/BurgerMenu/BurgerMenu";
import { Navigation } from "../../Components/Navigation/Navigation";
import bagIcon from "../../Media/bag-icon.png";
import bagWhite from "../../Media/bag-white.png";
import logo from "../../Media/logo.svg";
import menuImage from "../../Media/menu-black.svg";
import menuWhite from "../../Media/menu-white.svg";
import { ThemeContext } from "../../Providers/Context";
import styles from "./Header.module.css";

export const Header = () => {
  const [theme, setTheme, , backgroung] = useContext(ThemeContext);
  const [click, setClick] = useState(false);

  const openLinks = () => {
    setClick(true);
  };

  const toggleTheme = () => {
    setTheme(theme === false ? true : false);
  };

  return (
    <div className={styles.header} style={backgroung}>
      <div className="container">
        <div className={styles.header_wrapper}>
          <img src={logo} alt="logo" />
          {click ? (
            <div>
              <BurgerMenu setClick={setClick} />
              <img
                src={theme ? bagWhite : bagIcon}
                alt="bagIcon"
                id={styles.bagIcon}
              />
            </div>
          ) : (
            <>
              <Navigation />
              <div className={styles.image_box}>
                <img
                  src={theme ? bagWhite : bagIcon}
                  alt="bagIcon"
                  id={styles.bagIcon}
                />
                <img
                  onClick={openLinks}
                  src={theme ? menuWhite : menuImage}
                  alt="burger-menu"
                  id={styles.burger_menu}
                />
              </div>
            </>
          )}
        </div>
        <div className={styles.mode}>
          <button onClick={toggleTheme}>Change mode</button>
        </div>
      </div>
    </div>
  );
};
