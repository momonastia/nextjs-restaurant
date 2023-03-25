import { TbChefHat, TbSalad, TbTruckDelivery } from "react-icons/tb";
/* import styles from ".//styles.module.scss"; */

const OurServices = () => {
  return (
    <>
      <section>
        <h2>Our services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odit,
          tempore laudantium dolorum molestiae, officia obcaecati aspernatur,
          adipisci magnam deserunt voluptatibus iusto? Rem explicabo facilis,
          quibusdam suscipit quas doloremque odit.
        </p>
      </section>
      <section>
        <div>
          {/*  <TbChefHat /> */}
          <h3>Profecional chiefs</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          {/*   <TbSalad /> */}
          <h3>Fresh ingredients</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          {/*     <TbTruckDelivery /> */}
          <h3>Fast delivery</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </section>
    </>
  );
};

export default OurServices;
