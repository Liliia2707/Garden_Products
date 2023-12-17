import { Navigation } from "../../Components/Navigation/Navigation";
import logo from "../../Media/logo.svg";
import bagIcon from "../../Media/bag-icon.svg";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header_wrapper}>
          <img src={logo} alt="logo" />
          <Navigation />
          <img src={bagIcon} alt="bagIcon" />
        </div>
      </div>
    </div>
  );
};
