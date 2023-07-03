import styles from "./styles.module.scss";

const OrderBtn = ({ pizza, addToOrder }) => {
  return (
    <button className={styles.btn} onClick={() => addToOrder(pizza)}>
      Add
    </button>
  );
};

export default OrderBtn;
