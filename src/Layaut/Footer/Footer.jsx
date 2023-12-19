import styles from "./Footer.module.css";
import instImage from "../../Media/ic-instagram.svg";
import wAppImage from "../../Media/ic-whatsapp.svg";
import mapImage from "../../Media/map.svg";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer_wrapper}>
          <h3>Contact</h3>
          <div className={styles.contact_container}>
            <div>
              <span>Phone</span>
              <p>+49 999 999 99 99</p>
            </div>
            <div id={styles.socials_box}>
              <span>Socials</span>
              <div className={styles.logo_box}>
                <a href="https://www.instagram.com/">
                  <img src={instImage} alt="instagram-logo" />
                </a>
                <a href="https://web.whatsapp.com/">
                  <img src={wAppImage} alt="whatsApp-logo" />
                </a>
              </div>
            </div>
            <div>
              <span>Address</span>
              <p>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</p>
            </div>
            <div>
              <span>Working Hours</span>
              <p>24 hours a day</p>
            </div>
          </div>
          <div className={styles.mapImage}>
            <img src={mapImage} alt="map" />
          </div>
        </div>
      </div>
    </div>
  );
};
