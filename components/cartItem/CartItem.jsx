import Image from "next/image";
import styles from "./styles.module.scss";
import DeleteBtn from "components/deleteBtn/DeleteBtn";

const CartItem = ({ pizza, removeFromOrder, updateQuantity }) => {
  return (
    <div className={styles.pizzaOrderItem}>
      <div className={styles.imageOrderContainer}>
        <Image
          src={`${pizza.image}`}
          alt={`${pizza.name}`}
          width="80"
          height="50"
        ></Image>
      </div>
      <div className={styles.pizzaInfo}>{pizza.name}</div>

      <div className={styles.cartQuantity}>
       <button 
        className={styles.cartBtn} 
        onClick={()=> updateQuantity (pizza, pizza.count - 1)}
        disabled={pizza.count <= 1}
       >-</button>  
       <span>{pizza.count}</span>
       <button className={styles.cartBtn} onClick={()=> updateQuantity (pizza, pizza.count + 1)}>+</button>
      </div>

      <div className={styles.pizzaInfo}>{pizza.price * pizza.count} euro </div>

      <DeleteBtn removeFromOrder={removeFromOrder} pizza={pizza} />
    </div>
  );
};

export default CartItem;
