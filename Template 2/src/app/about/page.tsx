import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {  FaFacebook, FaGithub, FaHeart, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaArrowTurnUp } from "react-icons/fa6";
const AboutPage = () => {
  return (
    <section className="h-[400px] bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat relative mt-16">
    <div className="flex justify-between items-start h-full px-4 md:px-16">
      <div className="text-center lg:text-left mt-36 lg:mt-28 ml-3">
        <h1 className="text-3xl md:text-5xl font-bold  font-[rufina] ">
       About Me
        </h1>
        <Link href="/" className=" text-xl font-bold text-red-500 leading-loose ">Home / </Link>
        <Link href="#" className=" text-xl font-bold text-red-500 leading-loose "> About</Link>
       
        
      </div>
     
    </div>

    <div className="max-w-[1200px] mx-auto py-[150px]  flex lg:pl-8  flex-col sm:flex-row items-center  ">
        <div className="basis-[50%]">
          <Image src="/me.jpg" alt="About Us" className=" rounded-2xl h-[500px]" width={500} height={500} />
        </div>
        <div className="basis-[50%] ">
          <h1 className="lg:text-6xl text-3xl font-[rufina]">I Create Products</h1>
          <h1 className="lg:text-6xl text-3xl  font-[rufina]">Not Just Art.</h1>
        <p className="sm:text-lg md:text-1xl text-gray-700 pt-4 md:pt-10 text-justify lg:mr-14  mr-4">
          Unlimited rewards. enjoy attractive discounts flexible Payme options global usage. Unlimited rewards. enjoy attracti exible ayment options global usage.
          </p>
          <p className='text-black  text-2xl border-l-2 border-red-500 lg:pl-10 pl-5 font-[rufina] my-10 ml-2 lg:ml-0'>
          Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum.
          </p>
          <p className='sm:text-lg md:text-1xl text-gray-700  text-justify mr-14'>Unlimited rewards. enjoy attractive discounts flexible Payme options global usage. Unlimited rewards. enjoy attracti exible ayment options global usage.</p>
        </div>
      </div>
      <div className="w-full bg-white">
  <div className="max-w-[1320px] mx-auto md:py-20 py-12 px-4 lg:px-8 flex flex-col lg:flex-row">
    <div className="basis-[35%] mb-12 lg:mb-0">
      <h1 className="text-3xl lg:text-4xl font-[rufina] font-semibold leading-snug">
        Designing With Passion
      </h1>
      <h1 className="text-3xl lg:text-4xl font-[rufina] font-semibold leading-snug">
        While Exploring The World
      </h1>
      <p className="pt-6 leading-loose text-gray-600 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facere mollitia aperiam odio sed asperiores quod dolorem pariatur accusamus excepturi tempora?
      </p>
      <p className="pt-6 leading-loose text-gray-600 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum consequatur saepe molestias atque sequi.
      </p>
    </div>
    <div className="basis-[65%] lg:pl-44 ">
      <h1 className="text-4xl lg:text-5xl leading-relaxed">
        Any Type Of Query
      </h1>
      <h1 className="text-4xl lg:text-5xl">
        & Discussion
      </h1>
      <p className="py-6 lg:py-8 text-gray-600">Late Talk With Me</p>
      <Link href="#" className="text-3xl lg:text-4xl underline">
        hire@sidra.com
      </Link>
    </div>
  </div>
</div>
  
      {/* contact section */}
 
      <section className="h-[400px] bg-cover bg-center bg-no-repeat relative bg-[url('/bg.jpg')]">
  <div className="flex flex-col justify-center items-start h-full px-4 sm:px-6 md:px-10">
    <div className="text-left mt-8 ">
      <h1 className="text-2xl sm:text-2xl lg:text-4xl font-bold text-red-500 font-[rufina] leading-tight">
        Don’t worry about contacting
      </h1>
      <h1 className="text-2xl sm:text-2xl lg:text-4xl font-bold text-red-500 font-[rufina] mt-4">
        I’m available
      </h1>
    </div>
    <div className="mt-8 sm:mt-12 mb-5  ">
      <Link
        href="#"
        aria-label="Contact Me Now"
        className="bg-red-500 text-sm sm:text-sm md:text-xl  hover:bg-red-600 transition duration-300 ease-in-out text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
      >
        Contact Me Now
      </Link>
    </div>
  </div>
</section>
           {/* feedback section */}

      
           <section className="py-20">
  <div className="mb-20">
    <h1 className="text-3xl md:text-5xl ml-4 md:ml-10 font-semibold text-black font-[rufina]">
      Some Positive Feedback
    </h1>
    <h1 className="text-3xl md:text-5xl ml-4 md:ml-10 font-semibold text-black font-[rufina] mt-3">
      That Encourages Us
    </h1>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-16">
    {Array.from({ length: 3 }).map((_, index) => (
      <div
        key={index}
        className="border bg-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 duration-300"
      >
        <div className="flex items-center gap-3 mb-4">
          <img
            src="/blog1.png.webp"
            alt="feedback"
            className="w-16 h-16 rounded-full shadow-md"
          />
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-left text-red-400">
              Bradley Gardner
            </h2>
            <h3 className="text-gray-500">UI/UX Designer</h3>
          </div>
        </div>
        <p className="text-gray-600 mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          cupiditate! Lorem ipsum dolor sit amet cupiditate! Lorem ipsum
          dolor sit amet.
        </p>
      </div>
    ))}
  </div>
</section>

      {/* contact section */}

      <section className="bg-pink-50 py-12 px-6 lg:px-12 shadow-lg shadow-pink-100">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
    <div className="flex flex-col justify-center">
      <h2 className="text-3xl lg:text-5xl font-[rufina] text-black mb-4">
        If Not Now, When? Let’s Work Together!
      </h2>
      <p className="text-gray-600 text-lg mb-6 mt-6">
        Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra.
      </p>
      
    </div>
    <div>
      <form className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <input type="text" name="name" placeholder="Your Name"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"/>
        <input type="email" name="email" placeholder="Your Email"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"/>
        <textarea name="message" placeholder="Your Message"
          className="w-full p-4 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
        <button type="submit"
          className="w-full bg-red-400 text-white py-3 rounded-lg hover:bg-red-500 transition duration-300 shadow-lg">
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>
{/* footer section */}
<section className="bg-[#10112e] text-white py-8 px-4">
  <div className="container mx-auto">
    {/* Logo and contact info */}
    <div className="text-center my-16 md:my-28">
      <img
        src="/logo2_footer.png.webp"
        alt="logo"
        className="w-20 md:w-30 mx-auto mb-6"
      />
      <h2 className="text-3xl md:text-6xl mt-6">sidra@porfolio.com</h2>
      <p className="text-sm md:text-lg mt-4 md:mt-10 text-gray-400 leading-loose">
        221B Baker Street, Post office Box 353
      </p>
      <p className="text-sm md:text-lg text-gray-400">
        Park Road, Pakistan - 215431
      </p>
    </div>

    {/* Copyright and social media icons */}
    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 my-8">
      <h2 className="text-xs md:text-sm text-center md:text-left">
        Copyright ©2024 All rights reserved | This template is made with{" "}
        <FaHeart className="inline text-red-500" /> by Colorlib
      </h2>
      <div className="flex justify-center md:justify-end space-x-4">
        <p className="text-sm">Stay Connected</p>
        <Link href="#" className="text-blue-500 hover:text-blue-700">
          <FaTwitter />
        </Link>
        <Link href="#" className="text-blue-700 hover:text-blue-900">
          <FaFacebook />
        </Link>
        <Link href="#" className="text-red-500 hover:text-red-700">
          <FaYoutube />
        </Link>
        <Link href="#" className="text-gray-400 hover:text-gray-600">
          <FaGithub />
        </Link>
      </div>
    </div>

    {/* Scroll to top icon */}
    <div className="fixed bottom-4 right-4">
      <Link href="#">
        <FaArrowTurnUp
          className="text-2xl bg-red-400 p-4 rounded-full hover:bg-red-500 cursor-pointer"
          size={50}
        />
      </Link>
    </div>
  </div>
</section>

      </section>

  )
}

export default AboutPage