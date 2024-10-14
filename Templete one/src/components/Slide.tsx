import React from 'react';
import Image from 'next/image';
import  { Sacramento } from 'next/font/google'
const sacramento = Sacramento(
  {weight: '400', 
  subsets: ['latin'],
  display: 'swap', // optional, default: 40px
  
})
interface propsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div className="relative w-full h-[500px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
      
      {/* Text Content (Left side) */}
      <div className="absolute inset-0 flex flex-col justify-center items-start p-4 lg:p-8 text-white mt-36 bg-opacity-50 bg-black lg:bg-transparent z-10">
      <h3 style={{fontSize: '45px'}} className={` ${sacramento.className} text-[24px] lg:text-[28px] text-orange-700`}>{title}</h3>
        <h2 className='text-black text-1xl md:text-[30px] lg:text-[25px] sm:text-[20px] font-bold leading-[1.2]'>
          {mainTitle}
        </h2>
        <p className='text-[14px] md:text-[16px] text-gray-900'>Lorem ipsum dolor sit amet consectetur adipis <br />
         Voluptate facilis deserunt eum aliquid quam  <br />
          quos asperiores? Nesciunt voluptates iste c  <br />
        </p>
       
        <div className='bg-accent mt-5 ml-12 text-white hover:text-black text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer bg-black hover:bg-gray-300'>
          Shop Now
        </div>
      </div>

      {/* Image (Full Width) */}
      <div className="relative w-full h-full">
        <Image 
          src={img} 
          alt="banner" 
          layout="fill" 
          objectFit="cover" 
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slide;
