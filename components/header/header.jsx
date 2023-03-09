import { CiPizza } from "react-icons/ci";
import Link from "next/link";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header>
      <div>
        <CiPizza />
      </div>
      <nav className={styles.NavBar}>
        <Link href="/">Home</Link>
        <Link href="/about">About us</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/products">Our menu</Link>
      </nav>
    </header>
  );
};

export default Header;
