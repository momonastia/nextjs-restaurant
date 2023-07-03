import { BiFoodMenu, BiHomeAlt } from "react-icons/bi";
import { MdOutlineRateReview, MdOutlineContactSupport } from "react-icons/md";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Link from "next/link";
import React from "react";
import { useState, useContext } from "react";
import InitailContext from "@/store/context";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const Navbar = () => {
  const router = useRouter();

  const [nav, setNav] = useState(false);

  const context = useContext(InitailContext);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.logo_image}></div>
      </div>
      <ul
        className={nav ? [styles.menu, styles.active].join(" ") : [styles.menu]}
      >
        <li onClick={() => setNav(!nav)}>
          <Link
            href="/"
            className={router.pathname == "/" ? styles.activeLink : ""}
          >
            <BiHomeAlt /> Home
          </Link>
        </li>
        <li onClick={() => setNav(!nav)}>
          <Link
            href="/products"
            className={router.pathname == "/products" ? styles.activeLink : ""}
          >
            <BiFoodMenu /> Our menu
          </Link>
        </li>
        <li onClick={() => setNav(!nav)}>
          <Link
            href="/reviews"
            className={router.pathname == "/reviews" ? styles.activeLink : ""}
          >
            <MdOutlineRateReview /> Reviews
          </Link>
        </li>
        <li onClick={() => setNav(!nav)}>
          <Link
            href="/about"
            className={router.pathname == "/about" ? styles.activeLink : ""}
          >
            <MdOutlineContactSupport /> About us
          </Link>
        </li>
        <li onClick={() => setNav(!nav)} className={styles.cartNavItem}>
          <Link
            href="/cart"
            className={router.pathname == "/cart" ? styles.activeLink : ""}
          >
            <AiOutlineShoppingCart /> Cart
            {context.state.orders.length > 0 && (
              <div className={styles.cartNotEmptySign}>
                {context.state.orders.length}
              </div>
            )}
          </Link>
        </li>
      </ul>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <p>test2</p>
    </div>
  );
};

export default Navbar;
