import React from "react";
import { Input } from "./ui/input";
import { FaFacebook, FaSearch, FaTwitter, FaYoutube } from "react-icons/fa";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Header = () => {
  return (
    <div className="hidden md:block">
      <div className="flex items-center justify-between mx-auto border-b border-gray-300 py-6 px-20 ">
        <div className="flex items-center w-64">
          <Input placeholder="Search..." />
          {/* <FaSearch size={20} className='mt-[-10px]'/> */}
        </div>
        <div className="flex items-center ">
          <h1 className="text-2xl font-bold">MagDesign</h1>
        </div>
        <div className="flex items-center gap-6">
          <FaFacebook />
          <FaYoutube />
          <FaTwitter />
        </div>
        <div className="flex items-center ">
        
          <Sheet>
  <SheetTrigger>  <MenuIcon size={35} /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className="mt-6 ml-6">MagDesign</SheetTitle>
      <SheetDescription className="pt-10 ml-6">
        <div className="text-black hover:text-orange-500">
        <Link href="/">Home</Link>
         
        </div>
      <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-black hover:text-orange-500">Categories</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 ml-10  ">
          <Link href="#" className="hover:text-orange-500">Travel</Link>
          <Link href="#" className="hover:text-orange-500">Food</Link>
          <Link href="#" className="hover:text-orange-500">Technology</Link>
          <Link href="#" className="hover:text-orange-500">Business</Link>
          <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-black hover:text-orange-500">DropDpwn</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 ml-10  ">
          <Link href="#" className="hover:text-orange-500">Sub Menu One</Link>
          <Link href="#" className="hover:text-orange-500">Sub Menu Two</Link>
          <Link href="#" className="hover:text-orange-500">Sub Menu Three</Link>
        
          
       
      
        </AccordionContent>
      </AccordionItem>
     
    </Accordion>
   
       
      
        </AccordionContent>
      </AccordionItem>
     
    </Accordion>
   
       <div className="flex flex-col gap-2 text-black ">
       <Link href="#" className="hover:text-orange-500">Travel</Link>
          <Link href="#" className="hover:text-orange-500">Food</Link>
          <Link href="#" className="hover:text-orange-500">Technology</Link>
          <Link href="#" className="hover:text-orange-500">Business</Link>
       </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

        </div>
      </div>
    </div>
  );
};

export default Header;
