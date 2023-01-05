import React from "react";
import FourK from "./svg/4k";
import Dolby from "./svg/Dolby";
import Image from "next/image";
import DesktopTickets from "../public/assets/images/tickets/desktop-tickets.png";
import MobileTickets from "../public/assets/images/tickets/mobile-tickets.png";

export default function Experience() {
  return (
    <>
      {" "}
      <div className="flex flex-col items-start lg:items-center gap-y-2 lg:gap-y-4 p-6 lg:p-0">
        <div className="text-[#CC5900] text-base lg:text-2xl font-semibold">
          The Cinemass Experience
        </div>
        <p className="text-left lg:text-center text-[#dddddd] text-xl lg:text-5xl addington-regular max-w-[18rem] lg:max-w-[40rem] mb-4 lg:mb-0">
          Transforming entertainment in rural communities
        </p>
        {/* svg height is 56px on desktop 48px on mobile */}
        <div className="flex flex-col lg:flex-row gap-x-16 gap-y-8 lg:my-10 rounded-full bg-[#242424] p-16">
          <div className="flex flex-col items-start lg:items-center gap-y-3 lg:gap-y-5">
            <Dolby />
            <div className="text-white lg:text-xl addington-medium max-w-[16rem] lg:max-w-xs text-left lg:text-center">
              Target of 20,000+ mini-theaters by the end of 2023 in
              Hindi-speaking regions
            </div>
          </div>
          <div className="flex flex-col items-start lg:items-center gap-y-3 lg:gap-y-5">
            <Dolby />
            <div className="text-white lg:text-xl addington-medium max-w-[16rem] lg:max-w-xs text-left lg:text-center">
              Experience the highest quality streaming with 4K resolution
              Quality
            </div>
          </div>
          <div className="flex flex-col items-start lg:items-center gap-y-3 lg:gap-y-5">
            <Dolby />
            <div className="text-white lg:text-xl addington-medium max-w-[16rem] lg:max-w-xs text-left lg:text-center">
              Experience the ultimate in surround sound with 7.1 Dolby Atmos
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-max lg:hidden pt-10">
        <Image src={MobileTickets} alt="tickets" />
      </div>
      <div className="w-full h-max hidden lg:block lg:pt-32 lg:py-6">
        <Image src={DesktopTickets} alt="tickets" />
      </div>
    </>
  );
}
