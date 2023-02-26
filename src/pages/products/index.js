import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/burgers.module.css";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/items");
  const data = await res.json();

  return {
    props: { burgers: data },
  };
};

const Burgers = ({ burgers }) => {
  return (
    <div>
      <h1>Our burgers</h1>
      <div className={styles.burgerCard}>
        {burgers.map((burger) => {
          return (
            <Link href={`/products/${burger.id}`} key={burger.id}>
              <div>
                <div className={styles.imageContainer}>
                  <Image
                    src={`${burger.image}`}
                    alt={`${burger.name}`}
                    width="100"
                    height="100"
                    Layout="responsive"
                  ></Image>
                </div>
                <div>
                  <h3>{burger.name}</h3>
                  <p>{burger.desc}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Burgers;
