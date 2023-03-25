import { GiCook, GiTomato } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import styles from ".//styles.module.scss";

const OurServices = () => {
  return (
    <div className={styles.ServicesContainer}>
      <section className={styles.ServicesTitle}>
        <h2>Our services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odit,
          tempore laudantium dolorum molestiae.
        </p>
      </section>
      <section className={styles.ServicesList}>
        <div className={styles.ServicesListItem}>
          <GiCook className={styles.ServicesIcon} />
          <h3>Profecional chiefs</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={styles.ServicesListItem}>
          <GiTomato className={styles.ServicesIcon} />
          <h3>Fresh ingredients</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={styles.ServicesListItem}>
          <MdDeliveryDining className={styles.ServicesIcon} />
          <h3>Fast delivery</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
