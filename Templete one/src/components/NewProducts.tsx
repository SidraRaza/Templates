'use client';
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const TrendingProducts = () => {
  const products = [
    {
      imgSrc: '/latest1.jpg.webp',
      name: 'Cashmere Tag + Bag',
      price: '$50.00',
      originalPrice: '$120.00'
    },
    {
      imgSrc: '/latest2.jpg.webp',
      name: 'Cashmere Tag + Bag',
      price: '$50.00',
      originalPrice: '$120.00'
    },
    {
      imgSrc: '/latest3.jpg.webp',
      name: 'Cashmere Tag + Bag',
      price: '$50.00',
      originalPrice: '$120.00'
    },
    {
      imgSrc: '/latest4.jpg.webp',
      name: 'Cashmere Tag + Bag',
      price: '$50.00',
      originalPrice: '$120.00'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
    <div className='py-10'>
      <div className='w-[95%] mx-auto relative py-20'>
        <div className='w-[93%] mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {products.map((product, index) => (
            <div key={index}>
              <img
                src={products[(currentIndex + index) % products.length].imgSrc}
                alt='trending'
                className='w-full h-[300px]'
              />
              <p className='text-center leading-loose pt-2 hover:text-red-700 cursor-pointer'>
                {products[(currentIndex + index) % products.length].name}
              </p>
              <p className='text-center '>
                {products[(currentIndex + index) % products.length].price}
                <del className='text-gray-500 ml-1'>
                  {products[(currentIndex + index) % products.length].originalPrice}
                </del>
              </p>
            </div>
          ))}
        </div>
        <IoIosArrowBack  onClick={handlePrev}
          className='absolute left-0  top-1/2 transform -translate-y-1/2 text-black   '
       size={30}/>
         
      
      
        <IoIosArrowForward  onClick={handleNext}
          className='absolute right-0 top-1/2 transform -translate-y-1/2  text-black  '
          size={30} />
        
       
      </div>
    </div>
    <div>
      
    </div>
    </>
  );
};

export default TrendingProducts;
