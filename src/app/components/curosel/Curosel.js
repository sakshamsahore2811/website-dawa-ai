'use client'
import React from 'react';
import { useEffect } from 'react';
// import { Carousel } from 'bootstrap';
import styles from "./style.module.css"
import Image from 'next/image';
// import built from "../../../../public/images/built.png"
// import desai from "../../../../public/images/desai.png"
// import catalyst from "../../../../public/images/catalyst.png"
// import jic from "../../../../public/images/jic.png"
// import bi from "../../../../public/images/bi.png"
// import rsn from "../../../../public/images/rsn.png"
// import iimb from "../../../../public/images/iimb.png"
// import iit from "../../../../public/images/iit.png"
// import ideas from "../../../../public/images/ideas.png"
import bincube from "../../../../public/images/bincube.png";
import catalyst from "../../../../public/images/catalyst.png";
import ciie from "../../../../public/images/ciie.png";
import ideas from "../../../../public/images/ideas.png";
import iimb from "../../../../public/images/iimb.png";
import iitb from "../../../../public/images/iitbombay.png";
import jic from "../../../../public/images/jic.png";
import rsn from "../../../../public/images/rsn.png";
import sine from "../../../../public/images/sine.png";










const Curosel = () => {
    
    return (
        <div className={styles.container}>
        <h1>OUR INCUBATORS</h1>
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="ms-5 carousel-inner">
            <div className="carousel-item">
              <Image className="ms-5" src={catalyst} height={200} alt="img" />
              <Image className="ms-5" src={iitb} height={200} alt="img" />
              <Image className="ms-5" src={ideas} height={200} alt="img" />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Curosel;