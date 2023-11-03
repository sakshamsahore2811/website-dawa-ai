import React from 'react';
import Image from 'next/image';
import styles from "./style.module.css";
import section_img from "../../../../public/images/shopper.png"

const Dawa = () => {
    return (
        <div className={styles.container} id='whydawa'>
            <h1>WHY DAWA.AI?</h1>
            <p>We are dedicated team consisting of graduates from IITs</p> 
            <div className={styles.shopper}>
                <div>
                    <Image src={section_img} width={630} height={490} />
                </div>
                <div>
                    <div className={styles.card}>
                        <h2 className={styles.card_1}>Increase Efficiency</h2>
                    </div>
                    <div className={styles.card}>
                        <h2  className={styles.card_2}>User Friendly</h2>
                    </div>
                    <div className={styles.card}>
                        <h2 className={styles.card_3}>Pocket Friendly</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dawa