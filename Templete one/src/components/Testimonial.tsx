'use client';
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Testimonial = () => {
  const testimonials = [
    {
      imgSrc: '/5.jpg',
      name: 'Petey Cruiser',
      position: 'Designer at Colorlib',
      feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque alias explicabo quibusdam harum nisi, ad sapiente minus, amet delectus aperiam doloribus modi adipisci itaque unde animi! Porro facere exercitationem.'
    },
    {
      imgSrc: '/5.jpg',
      name: 'Petey Cruiser',
      position: 'Designer at Colorlib',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et lectus sit amet urna tristique condimentum.'
    },
    {
      imgSrc: '/5.jpg',
      name: 'Petey Cruiser',
      position: 'Manager at Google',
      feedback: 'Amet consectetur adipiscing elit. Nulla ac volutpat ligula, non consequat sapien. Nam pretium ultricies mauris.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className='bg-amber-100 text-center mt-10 relative'>
      <div className='w-[400px] mx-auto h-[400px] pt-24'>
        <h2 className='text-3xl font-semibold'>Customer Testimonial</h2>
        <p className='text-justify mt-8'>{currentTestimonial.feedback}</p>
        <div className='flex flex-col-1 justify-center'>
          <img
            src={currentTestimonial.imgSrc}
            alt='testimonial'
            width={50}
            height={50}
            className='rounded-full mt-4 ml-7'
          />
          <div className='space-x-4 mt-4'>
            <h1>{currentTestimonial.name}</h1>
            <p className='text-gray-700'>{currentTestimonial.position}</p>
          </div>
        </div>
      </div>

      {/* Arrows for navigation */}
      <IoIosArrowBack
        onClick={handlePrev}
        className='absolute left-[200px] top-1/2 transform -translate-y-1/2 text-black cursor-pointer'
        size={30}
      />
      <IoIosArrowForward
        onClick={handleNext}
        className='absolute right-[200px] top-1/2 transform -translate-y-1/2 text-black cursor-pointer'
        size={30}
      />
    </div>
  );
};

export default Testimonial;
