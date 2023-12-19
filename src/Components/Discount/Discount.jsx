import styles from "./Discount.module.css";

export const Discount = () => {
  return (
    <div className={styles.discount}>
      <div className="container">
        <div className={styles.discount_wrapper}>
          <h1>Amazing Discounts on Garden Products!</h1>
          <button>Check out</button>
        </div>
      </div>
    </div>
  );
};
