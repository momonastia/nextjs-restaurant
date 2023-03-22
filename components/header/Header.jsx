import { CiPizza } from "react-icons/ci";
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
