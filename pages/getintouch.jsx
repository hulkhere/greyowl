import React from "react";
import Image from "next/image";
import HandsImg from "../public/assets/images/getintouch/hands.png";
import Inputs from "../components/global/Inputs";
import CancelLogo from "../components/svg/CancelLogo";
import Link from "next/link";

export default function GetInTouch() {
  return (
    <div className="w-full h-max pb-10 bg-global">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex flex-col items-end lg:items-start p-4">
          <Link href="/">
            <div className="w-[28px] h-[21px] lg:w-14 lg:h-10 cursor-pointer lg:hidden">
              <CancelLogo />
            </div>
          </Link>
          <div className="flex flex-col items-start lg:relative lg:left-20">
            <h1 className="invisible text-2xl xl:text-4xl 2xl:text-5xl addington-bold text-white">
              Get in touch
            </h1>
            <h1 className="text-base lg:text-2xl text-white">
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
