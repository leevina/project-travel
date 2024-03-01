import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.css'

const HomePage = () => {
  const headerStyle = {
    color: 'white',
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h1>LEE TRAVEL</h1>
      <h1 style={headerStyle}></h1>
      <Slider {...settings}>
        <div>
          <img src="/img/bg5.jpeg" alt="bg5.jpeg" />
        </div>
        <div>
          <img src="/img/bg2.jpg" alt="bg2.jpg" />
        </div>
        <div>
          <img src="/img/bg3.jpg" alt="bg3.jpg" />
        </div>
      </Slider>
    </div>
  );
};

export default HomePage;
