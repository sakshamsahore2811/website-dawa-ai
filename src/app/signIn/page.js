import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import dawalogo from "./images/dawaa.png";


const Login = () => {

        

    return (
        <div style={{ backgroundColor: "rgb(9 9 28)", opacity: "0.9", backgroundSize:"cover" }}  className={styles.container}>
                <Image src={dawalogo} alt="Cover" />
            <div className={styles.partner}>
                <div style={{ backgroundColor: "rgb(63 123 97)", opacity: "0.9", width:"500", height: "500" }} className={styles.cover}>        
                <h6>Our Partnership, <br/> Your Benefits</h6>
                    <p> Next Gen B2B Saas platform for health care <br /> professionals created by IITians & IIMs</p>
                </div>
              
                <div className={styles.right}>
                    <form>
                        <h3>Login Via e-mail address</h3>
                        <p>Email address</p>
                        <input type='text' /> <br />
                        <button>Login Via Mobile</button> <br />
                        <span>or</span> <br />
                        <button>Login Via Email</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login