'use client';
import React, { useState } from 'react';
import { SiOpenfaas } from "react-icons/si";
import { GrAnnounce } from "react-icons/gr";
import { SiAffinitydesigner } from "react-icons/si";

const Help = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true); // Show the section on hover and keep it visible
  };

  return (
    <div 
      className="relative h-[200px] w-full my-10 group"
      onMouseEnter={handleMouseEnter} // Trigger the visibility on hover
    >
    

      {/* Section that will show and stay visible after hover */}
      <section className={`${isVisible ? 'block' : 'hidden'} py-12 absolute inset-0`}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-[90%] mx-auto px-4 items-center justify-center">
          
          {/* Service 1: Free & Fast Delivery */}
          <div className="group h-[150px] border-r-2 border-gray-200 relative">
            <div className="p-4 flex flex-col items-center justify-center">
              <SiOpenfaas size={50} className="text-black mb-2" />
              <h2 className="text-[20px] font-semibold text-center">Free & Fast Delivery</h2>
              <p className="text-gray-600 text-center leading-loose">Free Delivery on All Orders</p>
            </div>
          </div>

          {/* Service 2: Secure Payment */}
          <div className="group h-[150px] border-r-2 border-gray-200 relative">
            <div className="p-4 flex flex-col items-center justify-center">
              <GrAnnounce size={50} className="text-black mb-2" />
              <h2 className="text-[20px] font-semibold text-center">Secure Payment</h2>
              <p className="text-gray-600 text-center leading-loose">Safe and Secure Payments</p>
            </div>
          </div>

          {/* Service 3: Money Back Guarantee */}
          <div className="group h-[150px] border-r-2 border-gray-200 relative">
            <div className="p-4 flex flex-col items-center justify-center">
              <SiAffinitydesigner size={50} className="text-black mb-2" />
              <h2 className="text-[20px] font-semibold text-center">Money Back Guarantee</h2>
              <p className="text-gray-600 text-center leading-loose">100% Money Back Guarantee</p>
            </div>
          </div>

          {/* Additional Service */}
          <div className="group h-[150px] relative">
            <div className="p-4 flex flex-col items-center justify-center">
              <SiAffinitydesigner size={50} className="text-black mb-2" />
              <h2 className="text-[20px] font-semibold text-center">Additional Service</h2>
              <p className="text-gray-600 text-center leading-loose">Free Delivery on All Orders</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Help;
