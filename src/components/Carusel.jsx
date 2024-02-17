import { useState, useRef } from 'react';
import Slider from 'react-slick';
import stafaj from '../assets/images/logo-white.png';
import bear from '../assets/images/bear.jpg';

const Carusel = () => {
  let sliderRef = useRef(null);
  const settings = {
    fade: true,
    dots: true,
    infinite: true,
    waitForAnimate: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2500,
    cssEase: 'linear',
  };

  return (
    <div className='slider-container'>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div>
          <img src={stafaj} />
        </div>
        <div>
          <img src={bear} />
        </div>
      </Slider>
    </div>
  );
};

export default Carusel;
