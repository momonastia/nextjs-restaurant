import { CiPizza } from "react-icons/ci";
import Image from "next/image";
import Navbar from "../navbar/Navbar";
import React from "react";
import styles from "./styles.module.scss";

const MainHeader = () => {
  return (
    <header>
      <div className={styles.logo}>
        {/* <CiPizza /> Pizzeria */}
        <Image
          src="/static/images/logopizza.png"
          alt="logo pizza colori neon"
          width="300"
          height="110"
        ></Image>
      </div>
      <Navbar />
    </header>
  );
};

export default MainHeader;
