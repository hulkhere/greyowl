import React from "react";
import Image from "next/image";
import Members from "./Members";
import Headquatered from "./Headquatered";
export default function Team() {
  return (
    <>
      <div className="team-gradient h-max flex flex-col items-start lg:items-center gap-y-2 lg:gap-y-6 px-6 pb-6 lg:px-0 lg:pb-0 lg:p-0 lg:py-28">
        <div className="text-[#CC5900] text-base lg:text-2xl font-semibold">
          Our team
        </div>
        <p className="text-left lg:text-center text-[#dddddd] text-xl lg:text-5xl addington-bold max-w-7xl hidden lg:block">
          We are a team of dreamers, visionaries and deep lovers of everything
          cinema. We are serial entrepreneurs with prior history of successful
          multi-million dollars exit.
        </p>
        <div className="flex flex-col gap-y-2 lg:hidden">
          <p className="text-left text-[#dddddd] text-xl addington-regular max-w-7xl">
            We are a team of dreamers, visionaries and deep lovers of everything
            cinema.
          </p>
          <p className="text-left text-[#dddddd] text-xl addington-regular max-w-7xl">
            We are serial entrepreneurs with prior history of successful
            multi-million dollars exit.
          </p>
        </div>
        <Members />
        {/* <Headquatered /> */}
      </div>
    </>
  );
}
