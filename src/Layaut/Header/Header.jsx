import { Navigation } from "../../Components/Navigation/Navigation";
import logo from "../../Media/logo.svg";
import bagIcon from "../../Media/bag-icon.svg";
import menuImage from "../../Media/menu.svg";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header_wrapper}>
          <img src={logo} alt="logo" />
          <Navigation />
          <div className={styles.image_box}>
            <img src={bagIcon} alt="bagIcon" />
            <img src={menuImage} alt="burger-menu" id={styles.burger_menu} />
          </div>
        </div>
      </div>
    </div>
  );
};
