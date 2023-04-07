import Image from "next/image";
import { forwardRef } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

const TeamCard = forwardRef(({ member }, ref) => {
  return (
    <div className={styles.teamCard} ref={ref}>
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
        <div className={styles.teamMemberName}>{member.name}</div>
        <div className={styles.teamMemberRole}>{member.role}</div>
      </div>
    </div>
  );
});

const MTeamCard = motion(TeamCard);

export default MTeamCard;
