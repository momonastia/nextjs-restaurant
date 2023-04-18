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

  let totalOrder = 0;
  context.state.orders.forEach((element) => {
    totalOrder += Number.parseFloat(element.price);
  });

  return (
    <>
      <Head>
        <title>Pizza restaurant | Cart </title>
        <meta name="title" content="pizza restaurant" />
      </Head>
      <div>
        <h1>Cart</h1>

        {context.state.orders.length > 0 ? (
          <div className={styles.cartList}>
            {context.state.orders.map((item) => (
              <div>
                <MenuItem pizza={item} key={item.id} />
                <DeleteBtn pizza={item} removeFromOrder={removeFromOrder} />
              </div>
            ))}
            <p>Total: {totalOrder} EUR </p>
          </div>
        ) : (
          <h2>You cart is empty</h2>
        )}
      </div>
    </>
  );
};

export default Cart;
