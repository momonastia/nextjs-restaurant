import styles from "./styles.module.scss";
import { AiOutlineDelete } from "react-icons/ai";

const DeleteBtn = ({ pizza, removeFromOrder }) => {
  return (
    <button className={styles.btn} onClick={() => removeFromOrder(pizza)}>
      <AiOutlineDelete />
    </button>
  );
};

export default DeleteBtn;
