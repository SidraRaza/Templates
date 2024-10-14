import React from 'react'
import Link from 'next/link'
import {  FaFacebook, FaGithub, FaHeart, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaArrowTurnUp } from "react-icons/fa6";
import Image from 'next/image'
const Porfolio= () => {
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
            height={200}
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
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
              height={200}
              width={200}
              className="w-full md:w-[350px] h-[250px] md:h-[290px] object-cover"
            />
           </Link>
          </div>
          <div className="flex justify-center">
          <Link href="https://birthday-wishes-beta-hazel.vercel.app/">
          <Image
              src="/happy birthday.jpg"
              alt="service"
              height={200}
              width={200}
              className="w-full md:w-[350px] h-[250px] md:h-[290px] object-cover"
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
              height={200}
              width={200}
              className="w-full md:w-[350px] h-[250px] md:h-[290px] object-cover"
            />
           </Link>
        </div>
        <div className="flex justify-center">
       <Link href="https://simple-calculator-delta-three.vercel.app/">
       <Image
            src="/R.png"
            alt="service"
            height={200}
            width={200}
             className="w-full md:w-[350px] h-[250px] md:h-[290px] object-cover"
          />
       </Link>
        </div>
        <div className="flex justify-center">
      <Link href="https://number-gussing-game-ten.vercel.app/">
      <Image
            src="/hqdefault.jpg"
            alt="service"
            height={200}
            width={200}
          className="w-full md:w-[350px] h-[250px] md:h-[290px] object-cover"
          />
      </Link>
        </div>
      </div>
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

export default Porfolio