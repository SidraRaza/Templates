import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-[98%] mx-auto h-[200px] bg-gray-100 mt-32 flex flex-col justify-center items-center space-y-4">
        <div className="w-[95%] flex-cols-1 justify-center items-center flex ">
          <div className="flex flex-col w-[90%] gap-2">
            <Label htmlFor="picture" className="text-xl font-bold ">
              Subscribe to Newsletter
            </Label>
            <div className="flex flex-row gap-2 w-[1000px]">
              <Input placeholder="Enter your email" className="bg-white h-12" />

              <button className="px-4 py-2 w-[500px] bg-orange-500 shadow-lg hover:bg-white hover:text-orange-500 text-white rounded-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[350px] flex flex-col justify-center items-center">
        <div className="flex flex-row gap-4">
          <FaFacebook
            size={40}
            className="mt-[-10px] bg-gray-300 p-2 rounded-full"
          />
          <FaTwitter
            size={40}
            className="mt-[-10px] bg-gray-300 p-2 rounded-full"
          />
          <FaInstagram
            size={40}
            className="mt-[-10px] bg-gray-300 p-2 rounded-full"
          />
          <FaYoutube
            size={40}
            className="mt-[-10px] bg-gray-300 p-2 rounded-full"
          />
        </div>
        <span className="text-gray-400 flex justify-center items-center my-5">
          Copyright ©2024 All rights reserved | This template is made with 
          <FaHeart size={20} className="text-red-500 mx-2" />  by Colorlib
        </span>
        <span className="flex flex-row gap-4 text-gray-400 "><h1 className="border-b-4 hover:border-orange-500">Terms & Conditions</h1>/<h1 className="border-b-4 hover:border-orange-500"> Privacy Policy</h1></span>
      </div>
    </>
  );
};

export default Footer;
