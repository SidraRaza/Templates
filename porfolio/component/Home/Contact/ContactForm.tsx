import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#050709] rounded-lg p-4 sm:p-10 ">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Let&#39;s Work Together!
      </h1>
      <p className="text-gray-200 mt-3 lg:text-base tex-xs md:text-sm ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis eaque
        error expedita, nisi voluptate perspiciatis.
      </p>
      <form className="mt-8 block w-full overflow-hidden">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <input
            type="text"
            placeholder="First name"
            className="flex-1 bg-[#0f0715] placeholder:text-gray-600 text-gray-200
            px-6 py-3 rounded-md border-[1.5px] border-gray-700 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            placeholder="Last name"
            className="flex-1 bg-[#0f0715] placeholder:text-gray-600 text-gray-200
            px-6 py-3 rounded-md border-[1.5px] border-gray-700 border-opacity-15 outline-none w-full"
          />
        </div>
        <div className="flex mt-5  flex-col md:flex-row gap-4 items-center justify-between">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-[#0f0715] placeholder:text-gray-600 text-gray-200
            px-6 py-3 rounded-md border-[1.5px] border-gray-700 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="flex-1 bg-[#0f0715] placeholder:text-gray-600 text-gray-200
            px-6 py-3 rounded-md border-[1.5px] border-gray-700 border-opacity-15 outline-none w-full"
          />
        </div>
        <div>
          <select
            className="w-full mt-5 bg-[#0f0715] text-white placeholder:text-gray-600 px-4 py-3.5 
            rounded-md border-[1.5px] border-gray-700 border-opacity-15 outline-none"
          >
            <option value="disabled selected">Select an option</option>
            <option value="frontend">Frontend development</option>
            <option value="backend">Backend development</option>
            <option value="fullstack">Full stack development</option>
          </select>
        </div>
        <textarea
          className="w-full mt-5 bg-[#0f0715] text-white placeholder:text-gray-600 px-4 py-3.5 
            rounded-md border-[1.5px] border-gray-700 border-opacity-15 outline-none"
          rows={7}
          placeholder="Message"
        ></textarea>
        <div className="mt-4">
            <button className="px-8 py-3.5 bg-rose-500 text-white hover:bg-rose-600 transition-all duration-150 rounded-full">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
