import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import styles from "@/styles/pizzas.module.scss";
import MenuItem from "components/menuItem/MenuItem";

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
              <Link href={`/products/${pizza.id}`} key={pizza.id}>
                <motion.div
                  className={styles.pizzaCard}
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  <MenuItem pizza={pizza} />
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pizza;
