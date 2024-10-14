'use client';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const Ro2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images (you can add more images here)
  const images = [
    '/2563117.jpg',
    '/banner 1.jpg',
    '/wp8065044.jpg',
    '/3.jpg',
    '/4.jpg'

  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex justify-center items-center">
      <img
        src={images[currentIndex]}
        alt="banner"
        width={200}
          height={300}
        className="mx-auto"
      />
      <FaArrowLeft 
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer text-red-700"
        onClick={prevSlide}
      />
      <FaArrowRight
        className="absolute right-2 border hover:text-red-700 rounded-3xl top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer text-black"
        onClick={nextSlide}
      />
      
    </div>
  );
};

export default Ro2;
