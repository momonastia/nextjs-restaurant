import Image from "next/image";
import styles from ".//styles.module.scss";

const TeamCard = ({ res }) => {
  return (
    <div className={styles.teamCard}>
      <div className={styles.imageContainer}>
        <Image
          src={`${res.image}`}
          alt={`${res.name}`}
          width="250"
          height="150"
          Layout="responsive"
        ></Image>
      </div>
      <div className={styles.teamInfo}>
        <h4>{res.name}</h4>
      </div>
    </div>
  );
};

export default TeamCard;
