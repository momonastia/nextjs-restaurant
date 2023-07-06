import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import InitailContext from "@/store/context";
import CartItem from "components/cartItem/CartItem";
import styles from "@/styles/cart.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";

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

  const updateQuantity = (item, quantity) => {
    if (quantity <= 0) {
      removeFromOrder(item)
    } else {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        id: item.id,
        quantity: quantity,
      },
    });
  }
  };

  let totalOrder = 0;
context.state.orders.forEach((element) => {
  totalOrder += Number.parseFloat(element.price) * element.count;
});

  return (
    <>
      <Head>
        <title>Pizza restaurant | Cart </title>
        <meta name="title" content="pizza restaurant" />
      </Head>
      <div>
        <h1 className={styles.cartTitle}>Cart</h1>

        {context.state.orders.length > 0 ? (
          <div className={styles.cartList}>
            {context.state.orders.map((item) => (
              <div key={item.id}>
                <CartItem pizza={item} removeFromOrder={removeFromOrder} updateQuantity={updateQuantity} />
              </div>
            ))}
            <p className={styles.cartListTotal}>Total: {totalOrder} EUR </p>
          </div>
        ) : (
          <div className={styles.emptyCartSection}>
            <AiOutlineShoppingCart className={styles.cartIcon} />
            <h2>You cart is empty</h2>
            <Link href="/products" className={styles.btn}>
              Order now
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
