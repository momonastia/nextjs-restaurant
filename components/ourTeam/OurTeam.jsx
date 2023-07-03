import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import MTeamCard from "components/teamCard/TeamCard";

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

const menuVariants = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.5,
    },
  }),
  hidden: { opacity: 0 },
};

const OurTeam = () => {
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/momonastia/nextjs-restaurant/team"
    )
      .then((response) => response.json())
      .then((data) => setTeamList(data));
  }, []);

  console.log(teamList);

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
        {teamList.map((member, i) => {
          return (
            <MTeamCard
              member={member}
              key={member.id}
              variants={menuVariants}
              viewport={{ amount: 0.2, once: true }}
              initial="hidden"
              whileInView="visible"
              custom={i + 1}
            />
          );
        })}
      </motion.section>
    </motion.div>
  );
};

export default OurTeam;
