import { useContext } from "react";
import instImage from "../../Media/ic-instagram.svg";
import wAppImage from "../../Media/ic-whatsapp.svg";
import { ThemeContext } from "../../Providers/Context";
import styles from "./Footer.module.css";

export const Footer = () => {
  const [, , textColor, backgroundColor] = useContext(ThemeContext);
  return (
    <div className={styles.footer} style={backgroundColor}>
      <div className="container">
        <div className={styles.footer_wrapper}>
          <h3 style={textColor}>Contact</h3>
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4095605981133!2d13.370224494198737!3d52.507926765083326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdeaf3909%3A0x6a061918b5f3ff91!2sLinkstra%C3%9Fe%202%2F8%20OG%2C%2010%2C%2010785%20Berlin!5e0!3m2!1sru!2sde!4v1704340379087!5m2!1sru!2sde"
              width="100%"
              height="250"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
