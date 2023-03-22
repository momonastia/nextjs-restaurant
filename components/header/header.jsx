import { CiPizza } from "react-icons/ci";
import { BiFoodMenu, BiHomeAlt } from "react-icons/bi";
import { slide as Menu } from "react-burger-menu";
import { MdOutlineRateReview, MdOutlineContactSupport } from "react-icons/md";
import Link from "next/link";
import Navbar from "../navbar/Navbar";
import React from "react";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.logo}>
        <CiPizza />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
