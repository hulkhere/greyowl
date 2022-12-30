import React from "react";
import Image from "next/image";
import Ellipse from "../public/assets/images/headquatered/ellipse.png";
import Map from "../public/assets/images/headquatered/map.png";

export default function Headquatered() {
  return (
    <div className="w-full h-max flex items-center justify-center lg:px-16 py-40">
      <div className="flex flex-col relative">
        <h1 className="text-white addington-bold text-3xl lg:text-4xl z-10">
          Headquartered in
          <span className="text-[#CC5900]"> Mumbai, India</span>
        </h1>
        <h2 className="text-2xl text-white font-normal max-w-[33rem] z-10">
          With 3,000 sq. ft. of production, post-production & programming
          infrastructure
        </h2>
        {/* <div className="w-72 h-36 -top-40 -right-44 absolute">
          <Image src={Ellipse} alt="ellipse" />
        </div> */}
        {/* <div className="shit w-72 h-36 -top-12 right-7 absolute"></div> */}
      </div>
      <div className="hidden w-[45rem] lg:block">
        <Image src={Map} alt="map" />
      </div>
    </div>
  );
}
