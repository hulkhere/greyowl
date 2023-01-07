import React from "react";
import Image from "next/image";
import ReelImg from "../public/assets/images/hero/Reel.png";
import CurtainsImage from "../public/assets/images/theater/curtains.png";
import Header from "./global/Header";

export default function Hero() {
  return (
    <div className="w-full flex flex-col justify-center items-start lg:items-center first-gradient">
      <Header />
      <p className="p-6 lg:p-0 text-2xl lg:text-[3.4rem] lg:leading-[4.3rem] text-[#FFF9F4] addington-bold max-w-6xl lg:text-center mt-10 mb-4 lg:mt-16 lg:mb-12">
        A revolutionary new mini-theatre ecosystem designed to bring
        high-quality short form entertainment to rural audiences.
      </p>
      <button className="mx-6 lg:m-0 w-max mb-6 lg:mb-0 bg-[#fff9f4] text-[#CC5900] font-semibold p-3 px-5 lg:p-4 lg:px-6 rounded-lg text-sm lg:text-[1.375rem]">
        Learn more
      </button>
      <div className="overlay-test">
        <Image className="w-full h-max" src={ReelImg} alt="" />
      </div>
      <div className="flex flex-col items-start lg:items-center gap-y-2 lg:gap-y-6 p-6 lg:p-0">
        <div className="text-[#CC5900] text-base lg:text-2xl font-semibold">
          Our Mission
        </div>
        <p className="text-left lg:text-center text-[#dddddd] text-xl lg:text-4xl addington-regular max-w-4xl xl:mb-5">
          Our mission is to get talented short film makers the best possible
          avenues of distribution, exhibition, appreciation & box office revenue
          for their work.
        </p>
      </div>
      <div className="hidden lg:block w-40 lg:w-[60rem] mt-10 lg:-mb-72">
        <Image src={CurtainsImage} alt="curtains" />
      </div>
    </div>
  );
}
