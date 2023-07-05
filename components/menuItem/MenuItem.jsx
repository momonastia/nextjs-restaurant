import Image from "next/image";
import styles from "@/styles/pizzas.module.scss";

const MenuItem = ({ pizza }) => {
  return (
    <div className={styles.pizzaCard}>
      <div className={styles.imageContainer}>
        <Image
          src={`${pizza.image}`}
          alt={`${pizza.name}`}
          width="250"
          height="150"
          Layout="responsive"
        ></Image>
      </div>
      <div className={styles.pizzaInfo}>
        <h4>{pizza.name}</h4>
        <p>
          {pizza.desc.length > 50
            ? `${pizza.desc.substring(0, 50)}...`
            : pizza.desc}
        </p>
        <div className={styles.orderInfo}>
          <div>{pizza.price} euro </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
