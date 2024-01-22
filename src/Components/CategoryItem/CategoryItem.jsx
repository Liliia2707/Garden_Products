import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Providers/Context";
import { baseUrl } from "../../utils/api";
import style from "./CategoryItem.module.css";

export const CategoryItem = ({ title, image, id }) => {
  const [theme, , ,] = useContext(ThemeContext);

  const imageUrl = `${baseUrl}${image}`;
  return (
    <div
      className={
        theme === false ? style.card : `${style.card} ${style.card_dark}`
      }
    >
      <Link to={`/categories/${title.toLowerCase()}`} className={style.link}>
        <img src={imageUrl} alt={title} />
        <p>{title}</p>
      </Link>
    </div>
  );
};
