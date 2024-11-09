import SectionHeadind from "@/component/Helper/SectionHeadind";
import { projectData } from "@/data/data";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Project = () => {
  return (
    <div className="bg-[#050709] pt-16 pb-16">
      <SectionHeadind>My Projects</SectionHeadind>
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-12  mt-20">
        {projectData.map((project, i) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 50}`}
              key={project.id}
              className="bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300"
            >
              <Link href={project.url} target="_blank">
                <Image
                  src={project.image}
                  alt="project"
                  width={300}
                  height={200}
                  className="w-full h-full rounded-2xl"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
