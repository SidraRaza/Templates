import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Next.js Image component for optimization

const Products = () => {
  return (
    <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-4 pt-10 '>
     {/* Product 1 */}
<div className="flex justify-center">
  <div className="w-[400px] h-[300px] relative border border-gray-300 shadow-lg rounded-lg hover:scale-105 duration-300 overflow-hidden">
    <Image
      src="/shoes.avif"
      alt="Men's Latest Fashion Sale"
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
    />
    {/* Text Overlay */}
    <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-4 ">
      <p className="dark:text-white text-xl font-bold mb-2">Women's Fashion</p>
      <Link
        href="#"
        className="text-sm bg-white text-black px-4 py-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
      >
        Shop Now
      </Link>
    </div>
  </div>
</div>
    

      {/* Product 2 */}
      <div className="flex justify-center">
        <div className="w-[400px] h-[300px] relative border border-gray-300 shadow-lg rounded-lg">
          <Image
            src="/cosmetics.jpg"
            alt="Women's Latest Fashion Sale"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
           <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-4 ">
      <p className="text-white text-xl font-bold mb-2">Women's Fashion</p>
      <Link
        href="#"
        className="text-sm bg-white text-black px-4 py-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
      >
        Shop Now
      </Link>
    </div>
        </div>
      </div>

      {/* Product 3 */}
      <div className="flex justify-center">
        <div className="w-[400px] h-[300px] relative border border-gray-300 shadow-lg rounded-lg ">
          <Image
            src="/th.jpeg"
            alt="Cosmetics Sale"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
           <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-4 ">
      <p className="text-white text-xl font-bold mb-2">Women's Fashion</p>
      <Link
        href="#"
        className="text-sm bg-white text-black px-4 py-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
      >
        Shop Now
      </Link>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
