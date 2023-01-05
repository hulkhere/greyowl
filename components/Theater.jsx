import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CurtainsImage from "../public/assets/images/theater/curtains.png";

export default function Theater() {
  return (
    <div className="theater-bg w-full h-[80vh] lg:h-screen flex-col justify-center items-center flex">
      <div className="w-80 -mt-44 lg:hidden">
        <Image src={CurtainsImage} alt="curtains" />
      </div>
      <h1 className="text-2xl lg:text-5xl text-white addington-bold text-center mb-20 lg:mb-0 lg:mt-20">
        We are <span className="text-[#FB8121]"> changing </span> the <br />
        cinema experience forever
      </h1>
    </div>
  );
}
