import React from "react";
import ContactForm from "./ContactForm";
import ContactInf from "./ContactInf";

const Contact = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 items-center gap-10 w-[90%] sm:w-[80%] mt-10 mx-auto">
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <ContactForm />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
          className="xl:mx-auto lg:mx-auto"
        >
          <ContactInf />
        </div>
      </div>
    </div>
  );
};

export default Contact;
