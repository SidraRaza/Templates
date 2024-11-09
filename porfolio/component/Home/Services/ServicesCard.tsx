"use client";
import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";

type Props = {
  services: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
};

const ServicesCard = ({ services }: Props) => {
  return (
    <Tilt className="p-6 shadow-2xl rounded-lg bg-[#814ced]">
      <Image
        src={`${services.icon}`}
        alt={services.title}
        width={50}
        height={50}
      />
      <h1 className="mt-4 text-lg font-bold text-gray-100">{services.title}</h1>
      <p className="mt-3 text-sm text-white text-opacity-80">
        {services.description}
      </p>
    </Tilt>
  );
};

export default ServicesCard;
