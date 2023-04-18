import styles from "./styles.module.scss";

const DeleteBtn = ({ pizza, removeFromOrder }) => {
  return (
    <button className={styles.btn} onClick={() => removeFromOrder(pizza)}>
      Remove
    </button>
  );
};

export default DeleteBtn;
