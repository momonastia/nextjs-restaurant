import Image from "next/image";
import styles from "./styles.module.scss";

const TeamCard = ({ member }) => {
  return (
    <div className={styles.teamCard}>
      <div className={styles.imageContainer}>
        <Image
          src={`${member.image}`}
          alt={`${member.name}`}
          width="150"
          height="150"
          Layout="responsive"
        ></Image>
      </div>
      <div className={styles.teamInfo}>
        <h4>{member.name}</h4>
        <h5>{member.role}</h5>
      </div>
    </div>
  );
};

export default TeamCard;
