import React from "react";
import Image from "next/image";
import Ellipse from "../public/assets/images/headquatered/ellipse.png";
import Map from "../public/assets/images/headquatered/map.png";
import MapMobile from "../public/assets/images/headquatered/map-mobile.png";

export default function Headquatered() {
  return (
    <div className="w-full h-max flex flex-col lg:flex-row items-center justify-center lg:px-16 lg:py-40">
      <div className="p-6 lg:p-0 flex flex-col relative lg:-mr-16">
        <h1 className="text-white addington-bold text-3xl lg:text-4xl z-20">
          Headquartered in
          <span className="text-[#CC5900]"> Mumbai, India</span>
        </h1>
        <h2 className="text-base lg:text-2xl text-white font-normal max-w-[33rem] z-20">
          With 3,000 sq. ft. of production, post-production & programming
          infrastructure
        </h2>
        <div className="w-72 h-36 -top-16 -right-20 absolute z-10 hidden lg:block">
          <Image src={Ellipse} alt="ellipse" />
        </div>
        {/* <div className="shit w-72 h-36 -top-12 right-7 absolute"></div> */}
      </div>
      <div className="hidden w-[45rem] 2xl:w-[52rem] lg:block">
        <Image src={Map} alt="map" />
      </div>
      <div className="w-full lg:hidden">
        <Image src={MapMobile} alt="map" />
      </div>
    </div>
  );
}
