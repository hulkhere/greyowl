import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Theater() {
  return (
    <div className="theater-bg w-full h-screen flex-col justify-center items-center hidden lg:flex">
      <h1 className="text-5xl text-white addington-bold text-center mt-20">
        We are <span className="text-[#FB8121]"> changing </span> the <br />
        cinema experience forever
      </h1>
    </div>
  );
}
