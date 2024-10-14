import Link from 'next/link'
import React from 'react'
import { FaShareAlt } from 'react-icons/fa'
import {  FaStar,FaRegStarHalfStroke } from 'react-icons/fa6'

const ReadMore = () => {
  return (
    <>
      {/* Header Section */}
      <div className="bg-gray-100 p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Details</h1>
        </div>
        <div className="flex justify-center space-x-4 text-blue-600">
          <Link href='/' className="hover:underline">Home</Link>
          <Link href='#' className="hover:underline">Product Details</Link>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-start gap-8 p-6 bg-red-600 h-[400px]  mt-16">
        {/* Product Image */}
        <div className="w-full md:w-[250px]">
          <img src="/latest1.jpg.webp" alt="Product" className="w-full rounded-lg shadow-lg h-[350px] ml-10"/>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 space-y-4 ml-16 mt-10">
          <h1 className="text-4xl font-bold text-white">The Rage of Dragons</h1>
          <p className="text-white">By Evan Winter</p>
          <p className="text-2xl font-semibold text-white">$50.00</p>

          {/* Star Ratings */}
          <div className="flex items-center space-x-1 text-white">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStarHalfStroke />
            <p className="text-white">(120 Review)</p>
          </div>

         

        <div className='flex flex-col-1 '>
          <button className="px-6 py-3 bg-white hover:text-white text-black font-semibold transition  hover:bg-blue-700 rounded-3xl">
            Add To Cart
          </button>

        
            <FaShareAlt size={50}  className="text-white bg-red-600 border border-white rounded-full p-4 ml-4 cursor-pointer"/>
            </div>
        </div>
      </div>
    </>
  )
}

export default ReadMore
