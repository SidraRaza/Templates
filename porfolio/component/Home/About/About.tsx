import SectionHeadind from "@/component/Helper/SectionHeadind";
import { aboutInfo } from "@/data/data";
import React from "react";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeadind>about me</SectionHeadind>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mt-20 "
      >
        <div  data-aos="fade-left"
        data-aos-anchor-placement="top-center">
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-sm md:text-base text-gray-300">
            {aboutInfo.description}
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6 ">
              <div className="w-7 h-7 bg-blue-800 flex flex-col justify-center items-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Frontened Development
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6 ">
              <div className="w-7 h-7 bg-orange-800 flex flex-col justify-center items-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Backend Development
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6 ">
              <div className="w-7 h-7 bg-green-800 flex flex-col justify-center items-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Full Stack Development
              </p>
            </div>
          </div>
        </div>
        <div  data-aos="zoom-in"
        data-aos-anchor-placement="top-center"
        data-aos-delay="50"
        className="grid grid-cols-2 items-center gap-12 lg:mx-auto">
          <div>
            <Image
              src={"/images/customer.png"}
              width={80}
              height={80}
              alt="customers"
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.client}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center ">
              Statisfied Customers
            </p>
          </div>
          <div>
            <Image
              src={"/images/experience.png"}
              width={80}
              height={80}
              alt="customers"
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.experience}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center ">
              Years Experience
            </p>
          </div>
          <div>
            <Image
              src={"/images/completed.png"}
              width={80}
              height={80}
              alt="customers"
              className="mx-auto "
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.project}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center ">
              Completed Project
            </p>
          </div>
          <div>
            <Image
              src={"/images/rocket.png"}
              width={80}
              height={80}
              alt="customers"
              className="mx-auto  "
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.website}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center ">
              Website Launched
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
