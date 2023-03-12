import styles from "@/styles/pizzas.module.css";
import Image from "next/image";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/items");
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

  const res = await fetch(`http://localhost:5000/items/${id}`);
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
          width="100"
          height="100"
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
