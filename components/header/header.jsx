import { CiPizza } from "react-icons/ci";
import { BiFoodMenu, BiHomeAlt } from "react-icons/bi";
import { MdOutlineRateReview, MdOutlineContactSupport } from "react-icons/md";
import Link from "next/link";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.logo}>
        <CiPizza />
      </div>
      <nav className={styles.NavBar}>
        <Link href="/">
          <BiHomeAlt /> Home
        </Link>
        <Link href="/products">
          <BiFoodMenu /> Our menu
        </Link>
        <Link href="/reviews">
          <MdOutlineRateReview />
          Reviews
        </Link>
        <Link href="/about">
          <MdOutlineContactSupport /> About us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
