import styles from "./DataForm.module.css";

export const DataForm = () => {
  return (
    <div className={styles.dataForm}>
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone number" />
        <input type="text" placeholder="Email" />
        <input type="submit" value="Get a discount" id={styles.submit_button} />
      </form>
    </div>
  );
};
