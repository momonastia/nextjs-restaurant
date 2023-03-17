import Head from "next/head";
import styles from "@/styles/reviews.module.scss";

const Reviews = ({ reviews }) => {
  console.log(reviews);

  return (
    <>
      <Head>
        <title>Pizza restaurant | Reviews </title>
        <meta name="title" content="pizza restaurant" />
      </Head>
      <div>
        <h1>Client reviews</h1>
        <div className={styles.reviews}>
          {!!reviews.length &&
            reviews.slice(0, 20).map((res) => {
              return (
                <div key={res.id} className={styles.reviewItem}>
                  {res.id} {`${res.body.slice(0, 90)}...`}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();

  return {
    props: {
      reviews: data.slice(0, 20),
    },
  };
}

export default Reviews;

/* копия с fetch на стороне клиента */
/* const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json(); 
      setReviews(data);
    };
    getData();
  }, []);

  console.log(reviews);

  return (
    <>
      <Head>
        <title>Fat burgers | Home page</title>
        <meta name="title" content="fat burgers" />
      </Head>
      <div>
        <h1>Client reviews</h1>
        <div className="reviews">
          {!!reviews.length &&
            reviews.slice(0, 20).map((res) => {
              return (
                <div key={res.id} className="review">
                  {res.id} {`${res.body.slice(0, 90)}...`}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Reviews; */
