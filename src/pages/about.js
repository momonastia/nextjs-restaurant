import Head from "next/head";
import styles from "@/styles/about.module.scss";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Pizza restaurant | About us </title>
        <meta name="title" content="pizza restaurant" />
      </Head>
      <div>
        <h1 className={styles.aboutUsTitle}>About us</h1>
        <section className={styles.aboutUsContent}></section>
      </div>
    </>
  );
};

export default AboutPage;
