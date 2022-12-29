import React from "react";
import FourK from "./svg/4k";
import Dolby from "./svg/Dolby";

export default function Experience() {
  return (
    <div className="flex flex-col items-start lg:items-center gap-y-2 lg:gap-y-4 p-6 lg:p-0">
      <div className="text-[#CC5900] text-base lg:text-2xl font-semibold">
        The Cinemass Experience
      </div>
      <p className="text-left lg:text-center text-[#dddddd] text-xl lg:text-5xl addington-regular max-w-xl mb-4 lg:mb-0">
        Transforming entertainment in rural communities
      </p>
      {/* svg height is 56px on desktop 48px on mobile */}
      <div className="flex flex-col lg:flex-row gap-x-16 gap-y-8 lg:my-10">
        <div className="flex flex-col items-start lg:items-center gap-y-3 lg:gap-y-5">
          <Dolby />
          <div className="text-white lg:text-xl addington-bold max-w-[16rem] lg:max-w-xs text-left lg:text-center">
            Target of 20,000+ mini-theaters by the end of 2023 in Hindi-speaking
            regions
          </div>
        </div>
        <div className="flex flex-col items-start lg:items-center gap-y-3 lg:gap-y-5">
          <Dolby />
          <div className="text-white lg:text-xl addington-bold max-w-[16rem] lg:max-w-xs text-left lg:text-center">
            Experience the highest quality streaming with 4K resolution Quality
          </div>
        </div>
        <div className="flex flex-col items-start lg:items-center gap-y-3 lg:gap-y-5">
          <Dolby />
          <div className="text-white lg:text-xl addington-bold max-w-[16rem] lg:max-w-xs text-left lg:text-center">
            Experience the ultimate in surround sound with 7.1 Dolby Atmos
          </div>
        </div>
      </div>
    </div>
    
  );
}
