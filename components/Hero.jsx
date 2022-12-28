import React from "react";
import Image from "next/image";
import ReelImg from "../public/assets/images/hero/Reel.png";

export default function Hero() {
  return (
    <div className="w-full flex flex-col justify-center items-center test">
      <p className="text-[3.4rem] text-[#FFF9F4] addington-bold max-w-5xl text-center lg:mt-16 lg:mb-12">
        A revolutionary new mini-theatre ecosystem designed to bring
        high-quality short form entertainment to rural audiences.
      </p>
      <button className="bg-[#fff9f4] text-[#CC5900] p-3 px-4 rounded-lg text-[1.375rem]">
        Learn More
      </button>
      <Image className="w-full h-max" src={ReelImg} alt="" />
    </div>
  );
}
