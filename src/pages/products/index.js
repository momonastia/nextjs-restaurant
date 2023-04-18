import Link from "next/link";
import Head from "next/head";
import { useContext } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/pizzas.module.scss";
import MenuItem from "components/menuItem/MenuItem";
import InitailContext from "@/store/context";
import OrderBtn from "components/orderBtn/OrderBtn";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://my-json-server.typicode.com/momonastia/nextjs-restaurant/items"
  );
  const data = await res.json();

  return {
    props: { pizzas: data },
  };
};

const Pizza = ({ pizzas }) => {
  const { dispatch } = useContext(InitailContext);
  const context = useContext(InitailContext);

  const addToOrder = (item) => {
    /* перед диспачем проверка чтобы продукт не добавлялся 
    более одного раза м.б. стоит убрать */
    let isInArray = false;
    context.state.orders.forEach((element) => {
      if (element.id === item.id) isInArray = true;
    });
    if (!isInArray)
      dispatch({
        type: "ADD_ITEM",
        payload: item,
      });
  };

  const menuVariants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.5,
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <>
      <Head>
        <title>Pizza restaurant | Our menu </title>
        <meta name="title" content="pizza restaurant" />
      </Head>
      <div>
        <h1 className={styles.cardsTitle}>Our pizzas</h1>
        <div className={styles.cardsContainer}>
          {pizzas.map((pizza, i) => {
            return (
              <div key={pizza.id}>
                <motion.div
                  className={styles.pizzaCard}
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  <Link href={`/products/${pizza.id}`}>
                    <MenuItem pizza={pizza} />
                  </Link>
                  <OrderBtn pizza={pizza} addToOrder={addToOrder} />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pizza;
