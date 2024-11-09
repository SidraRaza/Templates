import SectionHeadind from "@/component/Helper/SectionHeadind";
import { servicesData } from "@/data/data";
import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeadind>services</SectionHeadind>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-4 xl:grid-cols-4 items-center gap-8 w-[85%] mx-auto
      
      mt-20 "
      >
        {servicesData.map((service,i) => {
          return (
            <div key={service.id} data-aos="fade-left"
            data-aos-anchor-placement="top-center"
            data-aos-delay={`${i * 50}`}>
              <ServicesCard services={service}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
