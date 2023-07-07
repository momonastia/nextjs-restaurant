import styles from "./styles.module.scss";
import Link from "next/link";

const BackBtn = () => {
  return (
    <Link href="/products" className={styles.backBtn}>
      Back to menu
    </Link>
  );
};

export default BackBtn;
