import React, { useState, useEffect } from "react";
import FourK from "./svg/4k";
import Dolby from "./svg/Dolby";
import Image from "next/image";
import DesktopTickets from "../public/assets/images/tickets/desktop-tickets.png";
import MobileTickets from "../public/assets/images/tickets/mobile-tickets.png";
import DolbyImage from "../public/assets/images/global/dolby.png";
import DolbyMob from "../public/assets/images/global/dolby-mob.png";
import CinemassBlur from "../public/assets/images/blur-ellipses/cinemass-blur.png";
import CinemassBlur2 from "../public/assets/images/blur-ellipses/cinemass-below-blur.png";
import CinemassBlurMobile from "../public/assets/images/blur-ellipses/mobile-ellipse.png";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import AnimatedText from "../src/AnimatedText";
import { type } from "os";

const experience = [
  { type: "heading1", text: "Transforming entertainment" },
  { type: "heading2", text: "in rural communities" },
];
const experienceMobile = [
  {
    type: "heading1",
    text: "Transforming entertainment in",
  },
  {
    type: "heading1",
    text: "rural communities",
  },
];
const container = {
  visible: {
    transition: {
      staggerChildren: 0.002,
    },
  },
};

function ExperienceText() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      className="App"
      initial="hidden"
      variants={container}
      ref={ref}
      animate={controls}
    >
      <div className="text-left lg:text-center text-[#dddddd] text-xl lg:text-5xl addington-regular max-w-[18rem] lg:max-w-[40rem] mb-4 lg:mb-0">
        {experience.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}

function ExperienceTextMobile() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      className="App"
      initial="hidden"
      variants={container}
      ref={ref}
      animate={controls}
    >
      <div className="text-left lg:text-center text-[#dddddd] text-xl leading-6 lg:text-5xl addington-regular max-w-[18rem] lg:max-w-[40rem] mb-4 lg:mb-0">
        {experienceMobile.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0 });

  return (
    <>
      <div className="flex flex-col items-start lg:items-center gap-y-2 lg:mt-40 lg:gap-y-4 p-6 lg:p-0">
        <div className="hidden justify-center items-center relative lg:flex">
          <div className="absolute">
            <div className="w-full h-full">
              <Image src={CinemassBlur} alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center z-10">
            <div className="text-[#CC5900] text-base lg:text-2xl font-semibold">
              The Cinemass Experience
            </div>
            <ExperienceText />

            {/* <p className="text-left lg:text-center text-[#dddddd] text-xl lg:text-5xl addington-regular max-w-[18rem] lg:max-w-[40rem] mb-4 lg:mb-0">
              Transforming entertainment in rural communities
            </p> */}
          </div>
        </div>
        <div className="lg:hidden">
          <div className="text-[#CC5900] text-base lg:text-2xl font-semibold mb-2">
            The Cinemass Experience
          </div>
          <ExperienceTextMobile />
          {/* <p className="text-left lg:text-center text-[#dddddd] text-xl lg:text-5xl addington-regular max-w-[18rem] lg:max-w-[40rem] mb-4 lg:mb-0">
            Transforming entertainment in rural communities
          </p> */}
        </div>
        {/* svg height is 56px on desktop 48px on mobile */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5 }}
          className="flex flex-col justify-center items-center lg:flex-row gap-x-16 gap-y-8 my-2 lg:my-10 lg:py-8 lg:p-16 relative"
        >
          <div className="w-full h-60 absolute lg:hidden">
            <div className="blur-div w-full h-full rounded-full"></div>
          </div>
          <div className="absolute hidden lg:block">
            <div className="w-full h-full">
              <Image src={CinemassBlur2} alt="" />
            </div>
          </div>
          <div className="flex-col items-start lg:items-center gap-y-3 lg:gap-y-5 hidden lg:flex z-10">
            <FourK />
            <div className="text-white lg:text-xl addington-medium max-w-[16rem] lg:max-w-sm text-left lg:text-center">
              Target of 20,000+ mini-theaters by the end of 2023 in
              Hindi-speaking regions
            </div>
          </div>
          <div className="flex flex-col items-start lg:items-center gap-y-2 lg:gap-y-5 z-10">
            <Dolby />
            <div className="text-white text-xl addington-medium max-w-sm lg:max-w-sm text-left lg:text-center">
              Experience the highest quality streaming with 4K resolution
              Quality
            </div>
          </div>
          <div className="flex flex-col items-start lg:items-center gap-y-2 lg:gap-y-5 z-10">
            <div className="w-[152px] h-[56px] hidden lg:block">
              <Image src={DolbyImage} alt="dolby" />
            </div>
            <div className="w-[128px] h-[35px] lg:hidden">
              <Image src={DolbyMob} alt="dolby" />
            </div>
            <div className="text-white text-xl addington-medium max-w-[21rem] lg:max-w-xs text-left lg:text-center">
              Experience the ultimate in surround sound with 7.1 Dolby Atmos
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-full h-max lg:hidden">
        <Image src={MobileTickets} alt="tickets" />
      </div>
      <div className="w-full h-max hidden lg:block lg:pt-32 lg:py-6">
        <Image src={DesktopTickets} alt="tickets" />
      </div>
      {/* <div className="w-full h-60 blur-[48px] bg-[#242424] relative top-20"></div> */}
    </>
  );
}
