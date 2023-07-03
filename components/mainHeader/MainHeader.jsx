import { CiPizza } from "react-icons/ci";
import Navbar from "../navbar/Navbar";
import React from "react";
import styles from "./styles.module.scss";

const MainHeader = () => {
  return (
    <header>
      <div className={styles.logo}>
        <CiPizza /> Pizzeria
      </div>
      <Navbar />
    </header>
  );
};

export default MainHeader;
