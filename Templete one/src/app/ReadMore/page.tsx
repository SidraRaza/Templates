



"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "../products/context/CartContext";
 
import { toast, ToastContainer } from "react-toastify";  
import "react-toastify/dist/ReactToastify.css";  
import Link from "next/link";
 
import { FaShareAlt } from "react-icons/fa";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
 

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

async function fetchProductById(id: string): Promise<Product> {
  const response = await fetch(`https://localhost:3000/ReadMore/`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return await response.json();
}

export default function Carddetails({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  const params = React.use(paramsPromise);

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await fetchProductById(params.id);
        setProduct(data);
      } catch (err) {
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [params.id]);

  if (loading)
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error)
    return <div className="flex justify-center items-center h-screen">{error}</div>;

  const handleAddToCart = () => {
    addToCart(product!);
    toast.success("Product added to cart successfully!", {
      position: "top-center",  
      autoClose: 3000,  
      hideProgressBar: false, 
      closeOnClick: true, 
      pauseOnHover: true,  
      draggable: true, 
      progress: undefined,
    });
  };

 
  return (
    <>
      {/* Header Section */}
      <div className="bg-gray-100 p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Details</h1>
        </div>
        <div className="flex justify-center space-x-4 text-blue-600">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="#" className="hover:underline">
            Product Details
          </Link>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-start gap-8 p-6 bg-red-600 h-[400px]  mt-16">
        {/* Product Image */}
        <div className="w-full md:w-[250px]">
          <img
            src="/latest1.jpg.webp"
            alt="Product"
            className="w-full rounded-lg shadow-lg h-[350px] ml-10"
          />
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

          <div className="flex flex-col-1 ">
            <button
            onClick={handleAddToCart} 
             className="px-6 py-3 bg-white hover:text-white text-black font-semibold transition  hover:bg-blue-700 rounded-3xl">
              Add To Cart
            </button>

            <FaShareAlt
              size={50}
              className="text-white bg-red-600 border border-white rounded-full p-4 ml-4 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="py-20 mt-10 ml-24">
        <ul className="flex  font-bold text-[15px] mt-2 font-Metro">
          <li>
            <Link
              href="#"
              className="hover:text-red-600  hover:border-b-4 hover:border-red-600 pb-5 px-4"
            >
              Description
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-red-600 hover:border-b-4 hover:border-red-600 pb-5 px-4"
            >
              Author
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-red-600 hover:border-b-4   hover:border-red-600 pb-5 px-4"
            >
              Commits
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-red-600 hover:border-b-4 hover:border-red-600 pb-5 px-4"
            >
              Review
            </Link>
          </li>
        </ul>
         <section >
        <p className=" mt-16 ">
          Beryl Cook is one of Britain’s most talented and amusing artists
          .Beryl’s pictures feature women of all shapes and sizes <br />
          enjoying themselves .Born between the two world wars, Beryl Cook
          eventually left Kendrick School in Reading at the <br /> age of 15,
          where she went to secretarial school and then into an insurance
          office. After moving to London and then <br /> Hampton, she eventually
          married her next door neighbour from Reading, John Cook. He was an
          officer in the Merchant <br /> Navy and after he left the sea in 1956,
          they bought a pub for a year before John took a job in Southern
          Rhodesia with <br /> a motor company. Beryl bought their young son a
          box of watercolours, and when showing him how to use it, she decided
          <br /> that she herself quite enjoyed painting. John subsequently
          bought her a child’s painting set for her birthday and it was <br />
          with this that she produced her first significant work, a half-length
          portrait of a dark-skinned lady with a vacant expression <br /> and
          large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s
          husband and It is often frustrating to attempt to <br /> <br /> plan meals
          that are designed for one. Despite this fact, we are seeing more and
          more recipe books and Internet websites <br /> that are dedicated to
          the act of cooking for one. Divorce and the death of spouses or grown
          children leaving for college <br />
          are all reasons that someone accustomed to cooking for more than one
          would suddenly need to learn how to adjust all <br /> the cooking
          practices utilized before into a streamlined plan of cooking that is
          more efficient for one person creating less.
        </p>
        </section>
      </div>
    </>
  );
}
