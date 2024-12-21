import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export default function CarouselSize() {
  return (
    <>
    <div><h1 className="text-4xl text-center font-bold mt-16">Latest Blog</h1></div>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[90%] mx-auto mt-10"
    >
      <CarouselContent>
    
        {Array.from({ length: 5 }).map((_, index) => (
        
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            
            <div className="p-1">
              <Card>
               
                <CardContent className="flex aspect-square items-center justify-center ">
                
                <div className="grid justify-center items-center">

<Image
            src={"/OIP (2).jpeg"}
            alt="logo"
            width={350}
            height={200}
            className="rounded-lg w-[350px] h-[250px]"
          />  
               <h1 className="text-gray-400 mt-6 text-sm"><b className="text-black">Business, Travel</b> — July 2, 2020</h1>
            <h1 className="text-1xl font-bold w-[280px] mt-1 mb-2">
              Your most unhappy customers are your greatest source of learning.
            </h1>
          <h1 className="text-gray-400 w-[290px] text-sm">  Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.</h1>
            <div className="flex   items-center my-5">
            <Image
              src={"/person_1.jpg.webp"}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full "
            />
            <div className="flex flex-col ml-3">
              <h1 className="text-black font-bold">Sergy Campbell</h1>
              <h1 className="text-gray-400 text-sm">CEO and Founder</h1>
            </div>
            </div>  
</div>

                </CardContent>
                
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </>
  )
}
