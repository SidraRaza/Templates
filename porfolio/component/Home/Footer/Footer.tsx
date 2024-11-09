import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <div>
        <Image
          src="/images/logo2_footer.png.webp"
          alt={"logo"}
          width={180}
          height={180}
          className="mx-auto"
        />
      </div>
      <div className="flex items-center justify-center flex-wrap space-x-10 space-y-4 text-white font-bold">
        <div className="mt-4">Home.</div>
        <div>Services.</div>
        <div>Projects.</div>
        <div>Contact</div>
        
      </div>
      <p className="text-white text-opacity-60 mt-6 text-center">  © 2024 All Rights Reserved by Sidra Raza</p>
    </div>
  );
};

export default Footer;
