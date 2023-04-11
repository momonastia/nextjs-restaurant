import Image from "next/image";
import styles from "./styles.module.scss";

const AboutSection = () => {
  return (
    <section className={styles.AboutSection}>
      <h3>Welcome to our pizzeria</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
        praesentium officia consectetur ut possimus! Exercitationem totam, fuga
        voluptates, quos molestiae iste aut nobis culpa autem pariatur ea
        veritatis deserunt hic?
      </p>
      {/*  <Image
        src="/static/images/kisspng-bush-tomato-diet-food-basil-png-hintergrund-5b4af9c40741a6.7427943815316402600297.png"
        alt="Tomatoes"
        width={350}
        height={180}
        className={styles.AboutSectionImage}
      /> */}
      <Image
        src="/static/images/NicePng_tomatoe-png_1630087.png"
        alt="Tomatoes"
        width={350}
        height={350}
        className={styles.AboutSectionImage}
      />
    </section>
  );
};

export default AboutSection;
