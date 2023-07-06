import styles from "./styles.module.scss";

const OrderBtn = ({ pizza, addToOrder }) => {
  return (
    <button className={styles.orderBtn} onClick={() => addToOrder(pizza)}>
      Add
    </button>
  );
};

export default OrderBtn;
