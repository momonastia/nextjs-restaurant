export const getStaticProps = async (url, propsData) => {
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { propsData: data },
  };
};

/* export const getStaticProps = async () => {
  const res = await fetch(
    "https://my-json-server.typicode.com/momonastia/nextjs-restaurant/items"
  );
  const data = await res.json();

  return {
    props: { pizzas: data },
  };
};
 */
