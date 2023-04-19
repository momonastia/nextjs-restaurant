import Image from "next/image";
import styles from "./styles.module.scss";
import DeleteBtn from "components/deleteBtn/DeleteBtn";

const CartItem = ({ pizza, removeFromOrder }) => {
  return (
    <div className={styles.pizzaOrderItem}>
      <div className={styles.imageOrderContainer}>
        <Image
          src={`${pizza.image}`}
          alt={`${pizza.name}`}
          width="80"
          height="50"
          Layout="responsive"
        ></Image>
      </div>
      <div className={styles.pizzaInfo}>{pizza.name}</div>

      <div>{pizza.count}</div>
      <div>{pizza.price} euro </div>
      <DeleteBtn removeFromOrder={removeFromOrder} pizza={pizza} />
    </div>
  );
};

export default CartItem;
