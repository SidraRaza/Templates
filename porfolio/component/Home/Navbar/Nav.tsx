"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";

//props type

type Props = {
  openNav: () => void;
};
const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll",handler)
    return()=>{
      window.removeEventListener("scroll",handler)
    }
  });
  return (
    <div className={`fixed h-[12vh] ${navBg ?'bg-[#240b39]' :"fixed"} z-[10]  w-full transition-all duration-200`}>
      <div className="flex justify-between items-center w-[95%] sm:w-[90%] xl:w-[80%] mx-auto h-full">
        {/* LOGO */}
        <Image
          src="/images/logo2_footer.png.webp"
          alt="logo"
          width={170}
          height={170}
          className="ml-[-28px] sm:ml-0"
        />
        {/* NAV Links */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navLink) => {
              return (
                <Link key={navLink.id} href={navLink.url}>
                  <p className="nav__link">{navLink.label}</p>
                </Link>
              );
            })}
          </div>
          {/* button */}
          <div className="flex items-center space-x-4">
            <button className="md-px-10 md:py-3 px-8 py-3 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg text-blue-800">
              Hire Me
            </button>
            {/* button */}
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
