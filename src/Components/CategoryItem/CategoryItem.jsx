import { useContext } from "react";
import { ThemeContext } from "../../Providers/Context";
import { baseUrl } from "../../utils/api";
import style from "./CategoryItem.module.css";

export const CategoryItem = ({ title, image }) => {
  const [theme, , ,] = useContext(ThemeContext);

  const imageUrl = `${baseUrl}${image}`;
  return (
    <div
      className={
        theme === false ? style.card : `${style.card} ${style.card_dark}`
      }
    >
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
};
