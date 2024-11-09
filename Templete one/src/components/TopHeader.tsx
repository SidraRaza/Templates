import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6';

const TopHeader = () => {
  return (
    <div className="hidden sm:flex flex-col md:flex-row justify-between items-center border-b border-gray-300 p-4 gap-5 text-sm">
      
      <div>
        <ul className="flex flex-wrap justify-center md:justify-start space-x-6 ml-0 md:ml-14">
          <li><Link href="#">About Us</Link></li>
          <li><Link href="#">Privacy</Link></li>
          <li><Link href="#">FAQ</Link></li>
          <li><Link href="#">Careers</Link></li>
        </ul>
      </div>

      <div>
        <ul className="flex flex-wrap justify-center md:justify-end space-x-4 items-center ml-0 md:mr-10">
          <li><Link href="#" className="border-r pr-2">My Wishlist</Link></li>
          <li><Link href="#">Track Your Order</Link></li>
          <li><Link href="#"><FaFacebook className="hover:text-[#fd6fff]" /></Link></li>
          <li><Link href="#"><FaInstagram className="hover:text-[#fd6fff]" /></Link></li>
          <li><Link href="#"><FaTwitter className="hover:text-[#fd6fff]" /></Link></li>
          <li><Link href="#"><FaYoutube className="hover:text-[#fd6fff]" /></Link></li>
          <li><Link href="#"><FaLinkedin className="hover:text-[#fd6fff]" /></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
