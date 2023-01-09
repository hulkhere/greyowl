import React from "react";
import Image from "next/image";
import HandsImg from "../public/assets/images/getintouch/hands.png";
import Inputs from "../components/global/Inputs";

export default function GetInTouch() {
  return (
    <div className="w-full h-max pb-10 bg-global">
      <div className="flex items-center">
        <div className="flex flex-col">
          <div className="relative left-20">
            <h1 className="xl:text-4xl 2xl:text-5xl addington-bold text-white">
              Get in touch
            </h1>
            <h1 className="text-2xl text-white">
              Our friendly team would love to hear from you.
            </h1>
          </div>
          <div className="xl:w-[45rem] 2xl:w-[50rem] hidden xl:block">
            <Image src={HandsImg} alt="hands" />
          </div>
        </div>
        <Inputs />
      </div>
    </div>
  );
}
