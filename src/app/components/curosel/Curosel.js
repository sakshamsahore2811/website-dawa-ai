import React from 'react';
import Slider from 'react-slick';
import styles from "./style.module.css"
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
  const settings = {
    
    infinite: true,
    speed: 500,
    autoplay: true,            // Enable autoplay
    autoplaySpeed: 2000, 
    slidesToShow: 4,
    centerMode: true, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const images = [catalyst, ideas,bincube,iimb,rsn,jic,sine,ciie];

  return (
    <div className={styles.container}>
      <h1>OUR INCUBATORS</h1>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div className='slidepic' key={index}>
            <Image src={img} height={125}  alt={`img${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Curosel;
