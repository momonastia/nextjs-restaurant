import Head from "next/head";
import { useContext } from "react";
import InitailContext from "@/store/context";
import MenuItem from "components/menuItem/MenuItem";
import styles from "@/styles/cart.module.scss";

const Cart = () => {
  const context = useContext(InitailContext);
  console.log("context qui", context.state.orders);
  return (
    <>
      <Head>
        <title>Pizza restaurant | Cart </title>
        <meta name="title" content="pizza restaurant" />
      </Head>
      <div>
        <h1>Cart</h1>
        {context.state.orders.map((item) => (
          <MenuItem pizza={item} />
        ))}
      </div>
    </>
  );
};

export default Cart;
