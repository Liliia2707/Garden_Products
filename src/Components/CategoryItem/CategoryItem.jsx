import style from "./CategoryItem.module.css";
import { baseUrl } from "../../utils/api";

export const CategoryItem = ({ title, image }) => {
  const imageUrl = `${baseUrl}${image}`;
  return (
    <div className={style.card}>
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
};
