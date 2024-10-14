'use client';

import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "./ui/button";
import { FaArrowTurnUp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <>
    <div className="bg-black border-b border-gray-800 text-white py-10 px-10">
      <div className="flex justify-between items-center space-x-6">
        {/* Subscribe Text */}
        <div>
          <h1 className="text-xl font-semibold leading-loose">Subscribe Newsletter</h1>
          <p className="text-gray-400 text-sm leading-relaxed">Subscribe newsetletter to get 5% on all <br /> products</p>
        </div>

        {/* Input and Button */}
        <div className="flex items-center space-x-3 ">
          <Input className="w-96 p-7 text-gray-900 rounded-none" placeholder="Enter your email" />
          <Button className="bg-red-600 hover:bg-red-500 text-white p-7 rounded-none">
            Subscribe
          </Button>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 pr-10 ">
          <FaFacebook className="text-2xl hover:text-red-600 cursor-pointer transition duration-300" />
          <FaInstagram className="text-2xl  hover:text-red-600 cursor-pointer transition duration-300" />
          <FaYoutube className="text-2xl  hover:text-red-600 cursor-pointer transition duration-300" />
        </div>
      </div>
    </div>
    <div className="bg-black text-white py-8 pb-32">
  <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
    {/* Logo Section */}
    <div className="space-y-4 ">
      <ul className="flex items-center space-x-4">
        <li>
          <img
            src="/300s.jpg"
            alt="logo"
            width={50}
            height={50}
            className="rounded-3xl ml-2"
          />
        </li>
        <li>
        <b className="text-3xl font-Metro">Small</b>
        <b className="text-gray-400 text-3xl font-thin pl-1 ">Shop</b>
        </li>
      </ul>
    </div>

    {/* Shop Men Links */}
    <div className="space-y-2 ml-10">
      <h2 className="font-semibold text-lg">Shop Men</h2>
      <Link href="#" className="block hover:underline text-gray-500 ">Clothing Fashion</Link>
      <Link href="#" className="block hover:underline text-gray-500">Winter</Link>
      <Link href="#" className="block hover:underline text-gray-500">Summer</Link>
      <Link href="#" className="block hover:underline text-gray-500">Formal</Link>
      <Link href="#" className="block hover:underline text-gray-500">Casual</Link>
    </div>

    {/* Shop Women Links */}
    <div className="space-y-2">
      <h2 className="font-semibold text-lg">Shop Women</h2>
      <Link href="#" className="block hover:underline text-gray-500">Clothing Fashion</Link>
      <Link href="#" className="block hover:underline text-gray-500">Winter</Link>
      <Link href="#" className="block hover:underline text-gray-500">Summer</Link>
      <Link href="#" className="block hover:underline text-gray-500">Formal</Link>
      <Link href="#" className="block hover:underline text-gray-500">Casual</Link>
    </div>

    {/* Baby Collection Links */}
    <div className="space-y-2">
      <h2 className="font-semibold text-lg">Baby Collection</h2>
      <Link href="#" className="block hover:underline text-gray-500">Clothing Fashion</Link>
      <Link href="#" className="block hover:underline text-gray-500">Winter</Link>
      <Link href="#" className="block hover:underline text-gray-500">Summer</Link>
      <Link href="#" className="block hover:underline text-gray-500">Formal</Link>
      <Link href="#" className="block hover:underline text-gray-500">Casual</Link>
    </div>

    {/* Quick Links */}
    <div className="space-y-2">
      <h2 className="font-semibold text-lg">Quick Links</h2>
      <Link href="#" className="block hover:underline text-gray-500">Track Your Order</Link>
      <Link href="#" className="block hover:underline text-gray-500">Support</Link>
      <Link href="#" className="block hover:underline text-gray-500">FAQ</Link>
      <Link href="#" className="block hover:underline text-gray-500">Carrier</Link>
      <Link href="#" className="block hover:underline text-gray-500">About</Link>
      <Link href="#" className="block hover:underline text-gray-500">Contact Us</Link>
    </div>
  </div>
  <FaArrowTurnUp
  className="fixed bottom-10 right-0 text-2xl text-white border-2 hover:bg-red-500 mr-6 mt-6 bg-red-600 p-2 border-red-500 rounded-full cursor-pointer transition duration-300 float-right"
  size={40}
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
/>
</div>


    </>
  );
};

export default Footer;
