import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import facebook from "../../../../public/images/facebook.png";
import instagram from "../../../../public/images/instagram.png";
import twitter from "../../../../public/images/twitter.png";
import linkedin from "../../../../public/images/linkedin.png";


const Footer = () => {
  return (
    <div className={styles.container}>
      <h1>Dawa.ai</h1>

      <div className={styles.input_group}>
        <input type="text" placeholder="Enter Your Email" />
        <div className={styles.input_group_append}>
          <span className={styles.input_group_text}>Subscribe</span>
        </div>
      </div>

      <div>
        <ul>
          <li><a href="https://twitter.com/DawaAi19789" target="_blank"><Image src={twitter} /></a></li>
          <li><a href="https://www.facebook.com/profile.php?id=61554040680529" target="_blank"><Image src={facebook} /></a></li>
          <li><a href="https://www.instagram.com/dawa_ai" target="_blank"><Image src={instagram} /></a></li>
          <li><a href="https://www.linkedin.com/company/dawa-ai" target="_blank"><Image src={linkedin} /></a></li>

        </ul>
      </div>
      <hr/>
      <div className={styles.end}>
        <span>&copy; Copyright Dawa.ai All Rights Reserved</span>
        <span>Designed by Dawa.ai Web Team</span>
      </div>
    </div>
  )
}

export default Footer;