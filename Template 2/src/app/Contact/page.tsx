import React from 'react'
import Link from 'next/link'
import {  FaFacebook, FaGithub, FaHeart, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaArrowTurnUp } from "react-icons/fa6";
import Image from 'next/image'
const page = () => {
  return (
    <section className="h-[400px] bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat relative mt-16">
    <div className="flex justify-between items-start h-full px-4 md:px-16">
      <div className="text-center lg:text-left mt-36 lg:mt-28 ml-3">
        <h1 className="text-3xl md:text-5xl font-bold  font-[rufina] ">
       Contact Me
        </h1>
        <Link href="/" className=" text-xl font-bold text-red-500 leading-loose ">Home / </Link>
        <Link href="#" className=" text-xl font-bold text-red-500 leading-loose "> Contact</Link>
       
        
      </div>
     
    </div>
    
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

export default page