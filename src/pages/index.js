import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import styles from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizza restaurant | Home page</title>
        <meta name="title" content="pizza restaurant" />
      </Head>
      <div>
        <h1 className={`${styles.title}`}>Home page</h1>
        <div className={styles.mainImageContainer}>
          <Image
            className={styles.mainImage}
            src="https://api.lorem.space/image/pizza?w=1000&h=300&hash=8B7BCDC2"
            alt="pizza"
            width={1000}
            height={300}
          />
        </div>
        <p className={styles.text}>
          Pizza ipsum dolor amet pan meatball green bell peppers chicken and
          bacon sint. Incididunt ad extra sauce in mushrooms party broccoli,
          laborum NY style in burnt mouth. Veniam id banana peppers, lasagna
          officia Chicago style bbq sauce. Sausage stuffed crust et ex occaecat
          peppers esse. Bacon tempor sausage burnt mouth ricotta pan deep crust.
          Stuffed labore lasagna ullamco extra sauce thin crust.
        </p>
        <p className={styles.text}>
          Esse chicken and bacon commodo peppers. Bacon lorem white pizza steak
          irure. Consequat mayo aute bianca sed white pizza. Esse bianca mayo
          sint black olives red onions. Pork broccoli reprehenderit parmesan,
          string cheese ex philly chicken pizza roll aliqua. Pepperoni
          mozzarella marinara occaecat pineapple irure.
        </p>
        <Link href="/products" className={styles.btn}>
          All pizzas
        </Link>
      </div>
    </>
  );
}
