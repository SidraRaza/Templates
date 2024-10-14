
import React from 'react'
import Link from 'next/link'
import { SiOpenfaas } from "react-icons/si";
import { GrAnnounce } from "react-icons/gr";
import { SiAffinitydesigner } from "react-icons/si";
import {  FaFacebook, FaGithub, FaHeart, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaArrowTurnUp } from "react-icons/fa6";
import Image from 'next/image'
const ContactPage = () => {
  return (
    <section className="h-[400px] bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat relative mt-16">
    <div className="flex justify-between items-start h-full px-4 md:px-16">
      <div className="text-center lg:text-left mt-36 lg:mt-28 ml-3">
        <h1 className="text-3xl md:text-5xl font-bold  font-[rufina] ">
       My Projects
        </h1>
        <Link href="/" className=" text-xl font-bold text-red-500 leading-loose ">Home / </Link>
        <Link href="#" className=" text-xl font-bold text-red-500 leading-loose "> My Projects</Link>
       
        
      </div>
     
    </div>

  
      
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

      </section>
 
  )
}

export default ContactPage