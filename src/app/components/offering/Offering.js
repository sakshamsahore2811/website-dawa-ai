import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import laptop from "../../../../public/images/laptop.png";
import mobile from "../../../../public/images/mobile.png";
import tree from "../../../../public/images/tree.png"
import saleserp from "../../../../public/images/saleserp.png";
import sales from "../../../../public/images/sales.png";
import basket from "../../../../public/images/basket.png";
import billing from "../../../../public/images/Billing.png";
import inventary from "../../../../public/images/invetary.png";
import lapi from "../../../../public/images/lapi.png";
import sale from "../../../../public/images/sales1.png";
import salereturn from "../../../../public/images/return1.png";
import pmodule from "../../../../public/images/module.png";
import bmodule from "../../../../public/images/module.png"; 
import inventarym from "../../../../public/images/inventarym.png"
import mbilling from "../../../../public/images/billingm.png"




const Offering = () => {
    return (
        // <div className={styles.container}>
        //     <h1>OFFERINGS</h1>

        //     <div className={styles.card}>

        //         <div className={styles.cards}>
        //             <Image  style={{height:"80%", objectFit:"contain"}} src={laptop} />
        //             <p style={{ fontFamily: 'Poppins',fontWeight: 600, fontSize:"3vh"}}>Web Application</p>
        //         </div>
        //         <div className={styles.cards}>
        //             <Image  style={{height:"80%", objectFit:"contain"}} src={mobile} />
        //             <p style={{ fontFamily: 'Poppins',fontWeight: 600, fontSize:"3vh"}}>Mobile Applications</p>
        //         </div>
        //     </div>
        //     <Image className={styles.tree} src={tree}  />

        //     <div className={styles.module}>
        //         <div className={styles.modulecard}>
        //             <Image style={{height:"70%", objectFit:"contain"}} src={saleserp} />
        //             <p style={{ fontFamily: 'Poppins',fontWeight: 600, fontSize:"2vh", padding:"2%"}}>Sales Module</p>
        //         </div>
        //         <div className={styles.modulecard}>
        //             <Image style={{height:"70%", objectFit:"contain"}} src={sales} />
        //             <p style={{ fontFamily: 'Poppins',fontWeight: 600, fontSize:"2vh"}}> Sales return Module</p>
        //         </div>
        //         <div className={styles.modulecard}>
        //             <Image style={{height:"70%", objectFit:"contain"}} src={basket} />
        //             <p style={{ fontFamily: 'Poppins',fontWeight: 600, fontSize:"2vh"}}>Procurement Module</p>
        //         </div>
        //         <div className={styles.modulecard}>
        //             <Image style={{height:"70%", objectFit:"contain"}} src={billing} />
        //             <p style={{ fontFamily: 'Poppins',fontWeight: 600, fontSize:"2vh"}}>Billing Module</p>
        //         </div>
        //         <div className={styles.modulecard}>
        //             <Image style={{height:"70%", objectFit:"contain"}} src={inventary} />
        //             <p style={{ fontFamily: 'Poppins',fontWeight: 600, fontSize:"2vh"}}>Inventary Module</p>
        //         </div>
        //     </div>
        // </div>


        <div className={styles.container} id='ourofferings'>
            <h1>OFFERINGS</h1>

            <div className={styles.card}>

                <div className={styles.cards}>
                    <Image  style={{height:"80%", objectFit:"contain"}} src={lapi} />
                    <p style={{ fontFamily: 'Poppins',fontWeight: 600, fontSize:"3vh"}}>Web Application</p>
                </div>
                <div className={styles.cards}>
                    <Image  style={{height:"80%", objectFit:"contain"}} src={mobile} />
                    <p style={{ fontFamily: 'Poppins',fontWeight: 600, fontSize:"3vh"}}>Mobile Applications</p>
                </div>
            </div>
            <Image className={styles.tree} src={tree}  />

            <div className={styles.module}>
                <div className={styles.modulecard}>
                    <Image style={{height:"70%", objectFit:"contain"}} src={sale} />
                    <p style={{ fontFamily: 'Poppins',fontWeight: 600,  padding:"2%"}}>Sales </p>
                    <p style={{ fontFamily: 'Poppins',fontWeight: 600,  padding:"2%"}}>Module </p>
                </div>
                <div className={styles.modulecard}>
                    <Image style={{height:"70%", objectFit:"contain"}} src={salereturn} />
                    <p style={{ fontFamily: 'Poppins',fontWeight: 600 }}> Return    </p>
                    <p style={{ fontFamily: 'Poppins',fontWeight: 600 }}> Module    </p>
                </div>
                <div className={styles.modulecard}>
                    <Image style={{height:"70%", objectFit:"contain"}} src={pmodule} />
                    <p style={{ fontFamily: 'Poppins',fontWeight: 600 }}>Procurement  </p>
                    <p style={{ fontFamily: 'Poppins',fontWeight: 600 }}>  Module</p>
                </div>
                <div className={styles.modulecard}>
                    <Image style={{height:"70%", objectFit:"contain"}} src={mbilling} />
                    <p style={{ fontFamily: 'Poppins',fontWeight: 600 }}>Billing  </p>
                    <p style={{ fontFamily: 'Poppins',fontWeight: 600 }}>  Module</p>
                </div>
                <div className={styles.modulecard}>
                    <Image style={{height:"70%", objectFit:"contain"}} src={inventarym} />
                    <p style={{ fontFamily: 'Poppins',fontWeight: 600 }}>Inventory  </p>
                    <p style={{ fontFamily: 'Poppins',fontWeight: 600 }}>  Module</p>
                </div>
            </div>
        </div>
    )   
}

export default Offering