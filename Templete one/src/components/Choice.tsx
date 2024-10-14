import Link from "next/link";
import React from "react";

const Choice = () => {
  return (
    <div className="flex justify-between items-center  py-8  px-20 border-b border-gray-300">
      {/* Header Section */}
      <h2 className="text-3xl font-semibold text-gray-800">Trending This Week</h2>

      {/* Links Section */}
      <div className="flex space-x-6 ">
        <Link
          href="#"
          className="px-4 py-3   text-black font-medium hover:border-b-4 border-red-600 transition-all duration-200"
        >
          Men
        </Link>
        <Link
          href="#"
         className="px-4 py-3  text-black font-medium hover:border-b-4 border-red-600 transition-all duration-200"
        >
          Women
        </Link>
        <Link
          href="#"
          className="px-4 py-3  text-black font-medium hover:border-b-4 border-red-600 transition-all duration-200"
        >
          Baby
        </Link>
        <Link
          href="#"
          className="px-4 py-3  text-black font-medium hover:border-b-4 border-red-600 transition-all duration-200"
        >
          Fashion
        </Link>
      </div>
    </div>
  );
};

export default Choice;
