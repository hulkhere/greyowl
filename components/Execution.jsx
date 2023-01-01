import React from "react";
import Image from "next/image";
import HandImg from "../public/assets/images/execution/Hand.png";
import MobileHandImg from "../public/assets/images/execution/Hand-mobile.png";

export default function Execution() {
  return (
    <div className="flex flex-col lg:flex-row lg:pt-40 lg:pb-20">
      <div className="flex flex-col">
        <div className="px-6 pt-6 pb-0 lg:pt-0 lg:p-0 lg:px-16 flex flex-col gap-y-2 lg:gap-y-4">
          <div className="text-[#CC5900] text-base lg:text-2xl font-semibold">
            Execution
          </div>
          <div className="addington-bold text-white text-xl lg:text-4xl">
            How are we executing?
          </div>
          <div className="text-white text-sm lg:text-lg lg:text-white font-normal max-w-xs lg:max-w-md">
            Everything you need to know about our strategy and content planning
            going forward
          </div>
        </div>
        <div className="lg:w-[40rem] 2xl:w-[45rem] hidden lg:block">
          <Image className="" src={HandImg} alt="" />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <div className="w-64 lg:hidden">
          <Image className="" src={MobileHandImg} alt="" />
        </div>
      </div>
      <div className="px-6 lg:px-10 flex flex-col gap-y-4">
        <div className="p-5 lg:p-8 w-max h-max text-sm lg:text-2xl font-normal text-white bg-[#1B1B1B] box-shadow-execution rounded-2xl max-w-[21rem] lg:max-w-2xl">
          Focus on outstanding short films, animation clips, and other
          experimental short content
        </div>
        <div className="p-5 lg:p-8 w-max h-max text-sm lg:text-2xl font-normal text-white bg-[#1B1B1B] box-shadow-execution rounded-2xl max-w-[21rem] lg:max-w-2xl">
          Short films will be sourced and commissioned nationally and globally
          to encourage established filmmakers and undiscovered talent to find as
          much financial success as their mainstream industry feature content
        </div>
        <div className="p-5 lg:p-8 w-max h-max text-sm lg:text-2xl font-normal text-white bg-[#1B1B1B] box-shadow-execution rounded-2xl max-w-[21rem] lg:max-w-2xl">
          Family and social message-oriented content - an experienced editorial
          board will oversee that controversial, obscene, or objectionable
          content is never authorised for display.
        </div>
      </div>
    </div>
  );
}
