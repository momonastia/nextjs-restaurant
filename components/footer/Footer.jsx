import { CiPizza } from "react-icons/ci";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";

import Image from "next/image";
import styles from "./styles.module.scss";

/* const textAnimation = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
 */
const Footer = () => {
  return (
    <footer>
      <section className={styles.FooterMain}>
        <div className={styles.FooterContacts}>
          <div className={styles.logo}>
            <CiPizza /> Pizzeria
          </div>
          <div className={styles.FooterName}>Pizzeria LLC</div>
          <div className={styles.FooterAdress}>
            203 Fake St. Mountain View, San Francisco, California, USA +2 392
            3929 210 info@yourdomain.com
          </div>
        </div>
        <div className={styles.FooterAbout}>
          <h4>About us</h4>
          <div className={styles.division}> </div>
          <div className={styles.FooterAboutText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            accusantium illo mollitia dolor sapiente, officiis earum officia
            quibusdam, culpa ipsa veniam distinctio excepturi repudiandae
            debitis laborum ad. Quae, incidunt corporis.
          </div>
        </div>
        <div className={styles.FooterMap}>
          <Image
            className={styles.mainImage}
            src="/../public/images/map.png"
            alt="pizza"
            width={200}
            height={100}
          />
        </div>
      </section>
      <section className={styles.FooterSocial}>
        <GrFacebookOption />
        <AiOutlineInstagram />
        <AiOutlineYoutube />
        <RiLinkedinFill />
      </section>
    </footer>
  );
};

export default Footer;