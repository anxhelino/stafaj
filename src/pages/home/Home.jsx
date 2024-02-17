import React from 'react';
import Carusel from '../../components/Carusel';
import ProductCart from '../../components/ProductCart';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='sliderContainer'>
        <Carusel />
      </div>
      <div className='homeProducts'>
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
    </div>
  );
};

export default Home;
