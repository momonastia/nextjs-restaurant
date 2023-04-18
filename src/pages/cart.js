import Head from "next/head";
import { useContext } from "react";
import InitailContext from "@/store/context";
import MenuItem from "components/menuItem/MenuItem";
import styles from "@/styles/cart.module.scss";
import DeleteBtn from "components/deleteBtn/DeleteBtn";

const Cart = () => {
  const context = useContext(InitailContext);
  /* console.log("context qui", context.state.orders); */
  const { dispatch } = useContext(InitailContext);

  const removeFromOrder = (item) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: item.id,
    });
  };
  return (
    <>
      <Head>
        <title>Pizza restaurant | Cart </title>
        <meta name="title" content="pizza restaurant" />
      </Head>
      <div>
        <h1>Cart</h1>
        {context.state.orders.map((item) => (
          <>
            <MenuItem pizza={item} key={item.id} />
            <DeleteBtn pizza={item} removeFromOrder={removeFromOrder} />
          </>
        ))}
      </div>
    </>
  );
};

export default Cart;
