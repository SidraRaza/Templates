'use client'
import React from 'react';
import Slider from "react-slick";
import Slide from './Slide';
import "slick-carousel/slick/slick.css";       // Slick Carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Slick Carousel Theme

const Hero = () => {
  // Slider settings
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 3000,
  };

  // Slide data array
  const slideData = [
    {
      id: 0,
      img: "/banner2.jpg", 
      title: "Summer Sale",
      mainTitle: "Men's Latest Fashion Sale.",
      price: "$50",
    },
    {
      id: 1,
      img: "/banner1.jpg",
      title: "Cosmetics Sale",
      mainTitle: "Women's Latest Cosmetics Sale.",
      price: "$20",
    },
    // Uncomment if needed
    // {
    //   id: 2,
    //   img: "/wp8065044.jpg",
    //   title: "Cosmetics Sale",
    //   mainTitle: "Women's Latest Cosmetics Sale.",
    //   price: "$20",
    // },
  ];

  return (
    <div>
      <div className='w-full h-auto pt-6 lg:pt-0'>
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide 
              key={item.id}
              img={item.img} 
              title={item.title} 
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
