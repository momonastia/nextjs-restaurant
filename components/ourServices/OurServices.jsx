import { GiCook, GiTomato } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { motion } from "framer-motion";
import styles from ".//styles.module.scss";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const listAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.5 },
  }),
};

const OurServices = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={styles.ServicesContainer}
    >
      <section className={styles.ServicesTitle}>
        <motion.h2 variants={textAnimation} custom={1}>
          Our services
        </motion.h2>
        <motion.p variants={textAnimation} custom={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odit,
          tempore laudantium dolorum molestiae.
        </motion.p>
      </section>
      <motion.section
        className={styles.ServicesList}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <motion.div
          className={styles.ServicesListItem}
          variants={listAnimation}
          custom={1}
        >
          <GiCook className={styles.ServicesIcon} />
          <h3>Profecional chiefs</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </motion.div>
        <motion.div
          className={styles.ServicesListItem}
          variants={listAnimation}
          custom={2}
        >
          <GiTomato className={styles.ServicesIcon} />
          <h3>Fresh ingredients</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </motion.div>
        <motion.div
          className={styles.ServicesListItem}
          variants={listAnimation}
          custom={3}
        >
          <MdDeliveryDining className={styles.ServicesIcon} />
          <h3>Fast delivery</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default OurServices;
