import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/pizzas.module.scss";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/items");
  const data = await res.json();

  return {
    props: { pizzas: data },
  };
};

const Pizza = ({ pizzas }) => {
  return (
    <div>
      <h1>Our pizzas</h1>
      <div className={styles.pizzaCard}>
        {pizzas.map((pizza) => {
          return (
            <Link href={`/products/${pizza.id}`} key={pizza.id}>
              <div>
                <div className={styles.imageContainer}>
                  <Image
                    src={`${pizza.image}`}
                    alt={`${pizza.name}`}
                    width="100"
                    height="100"
                    Layout="responsive"
                  ></Image>
                </div>
                <div>
                  <h3>{pizza.name}</h3>
                  <p>{pizza.desc}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Pizza;
