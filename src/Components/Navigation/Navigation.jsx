import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
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
  );
};
