import { motion } from "framer-motion";
import Image from "next/image";
import styles from "@/styles/pizzas.module.scss";
import { Fragment } from "react";

const MenuItem = ({ pizza, i }) => {
  return (
    <Fragment>
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
      </div>
    </Fragment>
  );
};

export default MenuItem;
