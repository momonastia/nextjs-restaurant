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

const OurTeam = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={styles.TeamContainer}
    >
      <div className={styles.TeamTitle}>
        <motion.h2 variants={textAnimation} custom={1}>
          Our team
        </motion.h2>
      </div>
      <motion.section
        className={styles.TeamList}
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

export default OurTeam;
