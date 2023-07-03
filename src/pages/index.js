import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";

import styles from "@/styles/Home.module.scss";
import OurServices from "components/ourServices/OurServices";
import OurTeam from "components/ourTeam/OurTeam";
import AboutSection from "components/aboutSection/AboutSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizza restaurant | Home page</title>
        <meta name="title" content="pizza restaurant" />
      </Head>
      <div className={styles.Hero}>
        <motion.div
          initial={{ y: +50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ /* delay: 0.5, */ ease: "easeOut", duration: 1 }}
          speed={0.1}
          className={`${styles.title}`}
        >
          Best pizza
        </motion.div>
        <motion.p
          initial={{ y: +50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, ease: "easeOut", duration: 1 }}
          speed={0.1}
          className={`${styles.titleText}`}
        >
          Delicious italian pizza
        </motion.p>
        <motion.div
          initial={{ y: +50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, ease: "easeOut", duration: 1 }}
          speed={0.1}
          className={`${styles.btnContainer}`}
        >
          <Link href="/products" className={styles.btn}>
            Order now
          </Link>
        </motion.div>
        <div className={styles.mainImageContainer}>
          <Image
            className={styles.mainImage}
            src="/static/images/pizzaHero.jpg"
            alt="pizza"
            width={1000}
            height={500}
          />
        </div>
        <AboutSection />
        <OurServices />
        <OurTeam />
      </div>
    </>
  );
}
