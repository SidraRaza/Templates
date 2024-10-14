"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SiOpenfaas } from "react-icons/si";
import { GrAnnounce } from "react-icons/gr";
import { SiAffinitydesigner } from "react-icons/si";
import {  FaFacebook, FaGithub, FaHeart, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaArrowTurnUp } from "react-icons/fa6";


const Page = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:h-[800px] h-[600px]  bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat relative px-4 lg:px-10 ">
        <div className="text-center lg:text-left mb-8 lg:mb-0 lg:mr-12 mt-32 sm:mt-6">
          <h2 className="text-red-500 text-lg lg:text-xl uppercase mb-10">
            Get Every Single Solution
          </h2>
          <h2 className="text-4xl lg:text-6xl font-[rufina] dark:text-[#002147] mb-4">
            I&apos;m Web Developer
          </h2>
          <h2 className="text-4xl lg:text-6xl font-[rufina] dark:text-[#002147] mb-4">
            Sidra G. Raza
          </h2>
          <p className="text-gray-500 lg:text-lg  mt-8 text-justify">
          I bring creativity and functionality together to design visually <br className="hidden lg:block"/> stunning I ensure every website looks great on any device.
          </p>
          <p className="text-gray-500 lg:text-lg   text-justify">
          I ensure every website looks great on any device
          </p>
          <div className="flex space-x-4 justify-center lg:justify-start mt-12">
            <Link
              href="/about"
              className="lg:px-10 px-6 py-3 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition"
            >
              Learn More
            </Link>
            <Link
              href="#"
              className="lg:px-14 px-10  py-3 border border-red-500 text-gray-500 hover:text-white rounded-md shadow hover:bg-red-500 transition"
            >
              Hire Me
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-20 lg:mt-30 sm:block hidden ">
          <Image
            src="/me.jpg"
            alt="Profile picture of Sidra G. Raza"
            width={400}
            height={600}
            className="h-[400px] rounded-full shadow-gray-500 shadow-2xl "
          />
        </div>
      </div>
      {/* // About section */}
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

      {/* Services */}
      <section className="bg-gray-50 py-16">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-[rufina] md:text-5xl font-bold text-gray-800 leading-tight">
            What Services You Will <br /> Get from Me!
          </h1>
        </div>

        {/* Services Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[90%] mx-auto px-4 items-center justify-center">
          {/* Service 1: UI/UX Design */}
          <div className="group h-[450px] p-8 border border-gray-300 hover:bg-red-500 transition-all duration-300">
            <SiOpenfaas
              size={50}
              className="text-red-500 p-3  bg-pink-100 border border-pink-100 rounded-full ml-28 mb-4 mt-28"
            />
            <h2 className="text-2xl font-semibold font-[rufina] text-gray-800 mb-3 text-center group-hover:text-white transition-colors duration-300">
              UI/UX Design
            </h2>
            <p className="text-gray-600 text-center leading-loose group-hover:text-white transition-colors duration-300">
              A free resource that will help you understand the design process
              and improve the quality of your user interfaces and experiences.
            </p>
          </div>

          {/* Service 2: Digital Marketing */}
          <div className="group h-[450px] p-8 border border-gray-300 hover:bg-red-500 transition-all duration-300">
            <GrAnnounce
              size={50}
              className="text-red-500  p-3 bg-pink-100 border border-pink-100 rounded-full ml-28 mb-4 mt-28"
            />
            <h2 className="text-2xl font-semibold font-[rufina] text-gray-800 mb-3 text-center group-hover:text-white transition-colors duration-300">
              Digital Marketing
            </h2>
            <p className="text-gray-600 text-center leading-loose group-hover:text-white transition-colors duration-300">
              A free resource to help you understand the digital marketing
              process and boost your online presence with effective strategies.
            </p>
          </div>

          {/* Service 3: Website Design */}
          <div className="group h-[450px] p-8 border border-gray-300 hover:bg-red-500 transition-all duration-300">
            <SiAffinitydesigner
              size={50}
              className="text-red-500 hover:text-white p-3 bg-pink-100  hover:bg-white border border-pink-100 rounded-full ml-28 mb-4 mt-28"
            />
            <h2 className="text-2xl font-[rufina] font-semibold text-gray-800 mb-3 text-center group-hover:text-white transition-colors duration-300">
              Website Design
            </h2>
            <p className="text-gray-600 text-center leading-loose group-hover:text-white transition-colors duration-300">
              A free resource to guide you through the website design process,
              helping you create visually appealing and highly functional
              websites.
            </p>
          </div>
        </div>
      </section>

      <section className=" flex flex-col-1 py-12  mt-12 ml-12">
        <div className="mb-8 leading-10">
          <h2 className="text-3xl md:text-5xl font-bold text-black font-[rufina] ">
            What Services you will <br /> Get from me!
          </h2>
        </div>
        <div className="sm:block hidden">
          <ul className="flex flex-col-1   my-16 ml-[200px]">
            <li>
              <Link
                href="#"
                className="text-black font-medium py-2 px-6   border-b-4 hover:border-red-500   "
              >
                All
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-black font-medium py-2 px-6   border-b-4 hover:border-red-500   "
              >
                Branding
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-black font-medium py-2 px-6   border-b-4 hover:border-red-500   "
              >
                Logo
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-black font-medium py-2 px-6   border-b-4 hover:border-red-500   "
              >
                UI/UX
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-black font-medium py-2 px-6   border-b-4 hover:border-red-500   "
              >
                Web Design
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <div className="max-w-[98%] min-w-[40%] mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* First Row (Large Image Spanning Two Columns on Large Screens) */}
        <div className="lg:col-span-2 pl-0 md:ml-5 lg:ml-10 ">
        <Link href="https://countdowntimer-mu.vercel.app/">
        <Image
            src="/countdown.jpeg"
            alt="service"
            width={400}
            height={400}
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover hover:scale-105 transition-all duration-300"
          />
        </Link>
  
        </div>

        {/* Smaller Images in Second Column */}
        <div className="grid grid-rows-2 gap-5 lg:col-span-1">
          <div className="flex justify-center">
           <Link href="https://wheather-widge.vercel.app/">
           <Image
              src="/wheather widge.png"
              alt="service"
              width={200}
              height={200}
              className="w-full md:w-[350px] h-[250px] md:h-[290px] object-cover hover:scale-105 transition-all duration-300"
            />
           </Link>
          </div>
          <div className="flex justify-center">
          <Link href="https://birthday-wishes-beta-hazel.vercel.app/">
          <Image
              src="/happy birthday.jpg"
              alt="service"
              width={200}
              height={200}
              className="w-full md:w-[350px] h-[250px] md:h-[290px] object-cover hover:scale-105 transition-all duration-300"
            />
          </Link>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-[94%] mx-auto grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-9 mb-[200px]">
        <div className="flex justify-center">
        <Link href="https://wheather-widge.vercel.app/">
           <Image
              src="/wheather widge.png"
              alt="service"
              width={200}
              height={200}
              className="w-full md:w-[350px] h-[250px] md:h-[290px] object-cover hover:scale-105 transition-all duration-300"
            />
           </Link>
        </div>
        <div className="flex justify-center">
       <Link href="https://simple-calculator-delta-three.vercel.app/">
       <Image
            src="/R.png"
            alt="service"
            width={200}
            height={200}
             className="w-full md:w-[350px] h-[250px] md:h-[290px] object-cover hover:scale-105 transition-all duration-300"
          />
       </Link>
        </div>
        <div className="flex justify-center">
      <Link href="https://number-gussing-game-ten.vercel.app/">
      <Image
            src="/hqdefault.jpg"
            alt="service"
            width={200}
            height={200}
          className="w-full md:w-[350px] h-[250px] md:h-[290px] object-cover hover:scale-105 transition-all duration-300"
          />
      </Link>
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
          <Image
          width={64}
          height={64}
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
      <Image
        src="/logo2_footer.png.webp"
        alt="logo"
        width={300}
        height={100}
        className="w-30 md:w-50 mx-auto mb-6"
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


    </>
  );
};

export default Page;
