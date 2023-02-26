import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Fat burgers | Home page</title>
        <meta name="title" content="fat burgers" />
      </Head>
      <div>
        <h1 className={`${styles.title}`}>Home page</h1>
        <div className={styles.mainImage}>
          <Image
            src="/fatburger.png"
            alt="fat burger"
            width={400}
            height={300}
          />
        </div>
        <p className={styles.text}>
          Что такое идеальный бургер? Лист свежего салата, мягкие булочки,
          сочное мясо. О других составляющих начинки можно поспорить, ведь это
          дело вкуса.
        </p>
        <p className={styles.text}>
          Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество
          обслуживания, правильная атмосфера заведения.
        </p>
        <Link href="/products" className={styles.btn}>
          All burgers
        </Link>
      </div>
    </>
  );
}
