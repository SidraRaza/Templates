import Link from "next/link";
import React from "react";
import ReadMore from "@/components/ReadMore";

const LatestNew = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div>
        <h1 className="text-center text-3xl">Latest New</h1>
      </div>
      <div className="w-[90%] mx-auto  grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 pt-10 pb-20">
        <div>
          <img
            src="/watch 1.jpeg"
            alt="trending"
            className="w-full h-[300px]"
          />
          <p className="text-gray-500 pt-4">Fashion Tips</p>
          <h1 className="text-2xl pt-2 font-semibold hover:text-red-700">
           
            ipsum dolor sit amet consectetur adipisicing{" "}
          </h1>
          <p className="text-gray-500 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            est officia ducimus, vitae ...
          </p>
          <Link href="/ReadMore" className="underline font-bold py-4 hover:text-red-700">Read More</Link>
        </div>
        <div>
          <img
            src="/perfume 2.webp"
            alt="trending"
            className="w-full h-[300px]"
          />
           <p className="text-gray-500 pt-4">Fashion Tips</p>
          <h1 className="text-2xl pt-2 font-semibold hover:text-red-700">
           
            ipsum dolor sit amet consectetur adipisicing{" "}
          </h1>
          <p className="text-gray-500 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            est officia ducimus, vitae ...
          </p>
          <Link href="/ReadMore" className="underline font-bold py-4 hover:text-red-700">Read More</Link>
        </div>
        <div>
          <img src="/shoes.avif" alt="trending" className="w-full h-[300px]" />
          <p className="text-gray-500 pt-4">Fashion Tips</p>
          <h1 className="text-2xl pt-2 font-semibold hover:text-red-700">
           
            ipsum dolor sit amet consectetur adipisicing{" "}
          </h1>
          <p className="text-gray-500 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            est officia ducimus, vitae ...
          </p>
          <Link href="/ReadMore" className="underline font-bold py-4 hover:text-red-700">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default LatestNew;
 
