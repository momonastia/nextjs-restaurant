import { BiFoodMenu, BiHomeAlt } from "react-icons/bi";
import { MdOutlineRateReview, MdOutlineContactSupport } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const Navbar = () => {
  const router = useRouter();

  const [nav, setNav] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.logo_image}></div>
      </div>
      <ul
        className={nav ? [styles.menu, styles.active].join(" ") : [styles.menu]}
      >
        <li onClick={() => setNav(!nav)}>
          <Link href="/" className={router.pathname == "/" ? "activeLink" : ""}>
            <BiHomeAlt /> Home
          </Link>
        </li>
        <li onClick={() => setNav(!nav)}>
          <Link
            href="/products"
            className={router.pathname == "/products" ? "activeLink" : ""}
          >
            <BiFoodMenu /> Our menu
          </Link>
        </li>
        <li onClick={() => setNav(!nav)}>
          <Link
            href="/reviews"
            className={router.pathname == "/reviews" ? "activeLink" : ""}
          >
            <MdOutlineRateReview /> Reviews
          </Link>
        </li>
        <li onClick={() => setNav(!nav)}>
          <Link
            href="/about"
            className={router.pathname == "/about" ? "activeLink" : ""}
          >
            <MdOutlineContactSupport /> About us
          </Link>
        </li>
      </ul>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </div>
  );
};

export default Navbar;
