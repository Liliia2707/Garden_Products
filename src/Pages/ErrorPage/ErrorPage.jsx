import React, { useContext } from "react";
import img0 from "../../Media/img0.svg";
import img4 from "../../Media/img4.svg";
import img4black from "../../Media/img4_black.jpg";
import { ThemeContext } from "../../Providers/Context";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  const [theme, , textColor, backgroundColor] = useContext(ThemeContext);
  return (
    <div style={backgroundColor}>
      <div className="container">
        <div className={styles.error_block}>
          <div className={styles.img_block}>
            <img
              className={styles.imgError}
              style={backgroundColor}
              src={theme ? img4black : img4}
              alt="4"
            />
            <img className={styles.cactus_error} src={img0} alt="0" />
            <img
              className={styles.imgError}
              src={theme ? img4black : img4}
              alt="4"
            />
          </div>
          <h3 style={textColor}>Page Not Found</h3>
          <p>
            We’re sorry, the page you requested could not be found.
            <br />
            Please go back to the homepage.
          </p>

          <button>Go Home</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
