import Link from "next/link";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart, LuUser2 } from "react-icons/lu";

const MainHeader = () => {
  return (
    <div className="flex bg-white w-[95%] flex-col md:flex-row justify-between items-center border-b border-gray-300 p-4 gap-5 text-sm mx-auto">
      
      {/* Left Section: Logo and Title */}
      <div>
        <ul className="flex space-x-1 items-center sm:space-y-0 sm:flex-col">
          <li>
            <img
              src="/300s.jpg"
              alt="logo"
              width={50}
              height={50}
              className="rounded-3xl"
            />
          </li>
          <li>
            <Link href="#">
              <h1 className="text-3xl font-Metro flex flex-col sm:flex-row sm:items-right">
                <b>Small</b>
                <b className="text-gray-400 font-thin pl-1">Shop</b>
              </h1>
            </Link>
          </li>
        </ul>
      </div>

      {/* Navigation Links (Hidden on Small Screens) */}
      <div className="hidden md:flex">
        <ul className="flex space-x-6 lg:space-x-16 font-bold text-[15px] mt-2 font-Metro">
          <li>
            <Link href="/" className="hover:text-orange-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-600">
              Men
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-600">
              Women
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-600">
              Baby Collection
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-600">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-600">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Menu Button on Small Screens */}
      <div className="flex md:hidden">
        <button className="px-4 py-2 bg-orange-600 text-white rounded">
          Menu
        </button>
      </div>

      {/* Right Section: Icons */}
      <div>
        <ul className="flex space-x-4 md:space-x-6 items-center">
          <li>
            <Link href="#" className="hover:text-orange-600">
              <IoSearch size={25} />
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-600">
              <LuUser2 size={25} />
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-600">
              <LuShoppingCart size={25} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainHeader;
