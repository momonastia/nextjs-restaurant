import styles from "@/styles/pizzas.module.scss";
import Image from "next/image";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://my-json-server.typicode.com/momonastia/nextjs-restaurant/items"
  );
  const data = await res.json();

  const paths = data.map((pizza) => {
    return {
      params: { id: pizza.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch(
    `https://my-json-server.typicode.com/momonastia/nextjs-restaurant/items/${id}`
  );
  const data = await res.json();

  return {
    props: { pizza: data },
  };
};

const Details = ({ pizza }) => {
  console.log("details pizza >>>>", pizza);

  return (
    <div className={styles.singlePizza}>
      <h1>{pizza.name}</h1>
      <div className={styles.imageContainer}>
        <Image
          src={`${pizza.image}`}
          alt={`${pizza.name}`}
          width="250"
          height="150"
          Layout="responsive"
        ></Image>
      </div>
      <div>
        <p>{pizza.desc}</p>
      </div>
    </div>
  );
};

export default Details;
