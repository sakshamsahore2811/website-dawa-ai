import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import img_1 from "../../../../public/images/built.png";
import img_2 from "../../../../public/images/desai.png";
import img_3 from "../../../../public/images/catalyst.png";


const Incabution = () => {
  return (
    <div className={styles.container}>
        <h1>OUR INCUBATORS</h1>
        <div className={styles.cards}>
            <Image src={img_1} width={300}  />
            <Image src={img_2} width={300} height={200} />
            <Image src={img_3} width={300} />
        </div>
    </div>
  )
}

export default Incabution;