import React, { useEffect } from "react";
import Image from "next/image";
import ReelImg from "../public/assets/images/hero/Reel.png";
import CurtainsImage from "../public/assets/images/theater/curtains.png";
import Header from "./global/Header";
import Text from "./Text";
import AnimatedText from "../src/AnimatedText";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const placeholderMobile = [
  {
    type: "heading1",
    text: "A revolutionary new mini-",
  },
  {
    type: "heading1",
    text: "theater ecosystem designed",
  },
  {
    type: "heading1",
    text: "to bring high-quality short",
  },
  {
    type: "heading1",
    text: "entertainment to rural",
  },
  {
    type: "heading1",
    text: "audience",
  },
];

const placeholderDesktop = [
  {
    type: "heading1",
    text: "A revolutionary new mini-theatre ecosystem",
  },
  {
    type: "heading1",
    text: "designed to bring high-quality short",
  },
  {
    type: "heading1",
    text: "entertainment to rural audiences.",
  },
];
const mission = [
  {
    type: "heading1",
    text: "Our mission is to get talented short film makers the best",
  },
  {
    type: "heading1",
    text: "possible avenues of distribution, exhibition, appreciation",
  },
  { type: "heading1", text: "& box office revenue for their work." },
];

const missionMobile = [
  {
    type: "heading1",
    text: "Our mission is to get talented short",
  },
  {
    type: "heading1",
    text: "film makers the best possible",
  },
  { type: "heading1", text: "avenues of distribution, exhibition," },
  { type: "heading1", text: "appreciation & box office revenue," },
  { type: "heading1", text: "for their work." },
];

const container = {
  visible: {
    transition: {
      staggerChildren: 0.009,
    },
  },
};

function Mission() {
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
      <div className="text-left lg:text-center text-[#dddddd] text-xl lg:text-4xl addington-regular max-w-5xl xl:mb-5">
        {mission.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}
// function MissionMobile() {
//   const controls = useAnimation();
//   const [ref, inView] = useInView();
//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);
//   return (
//     <motion.div
//       className="App"
//       initial="hidden"
//       variants={container}
//       ref={ref}
//       animate={controls}
//     >
//       <div className="text-left lg:text-center text-[#dddddd] text-xl lg:text-4xl addington-regular max-w-5xl xl:mb-5">
//         {missionMobile.map((item, index) => {
//           return <AnimatedText {...item} key={index} />;
//         })}
//       </div>
//     </motion.div>
//   );
// }

export default function Hero() {
  return (
    <div className="w-full flex flex-col justify-center items-start lg:items-center first-gradient">
      <Header />
      <motion.div
        className="lg:hidden"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <div className="p-6 lg:p-0 text-2xl max-w-sm lg:text-[3.4rem] lg:leading-[4.3rem] 2xl:text-6xl text-[#FFF9F4] addington-bold lg:max-w-6xl 2xl:max-w-[80rem] 2xl:leading-[4rem] lg:text-center mt-10 mb-4 lg:mt-16 lg:mb-12">
          {placeholderMobile.map((item, index) => {
            return <AnimatedText {...item} key={index} />;
          })}
        </div>
      </motion.div>
      <motion.div
        className="hidden lg:block"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <div className="p-6 lg:p-0 text-2xl max-w-[22rem] lg:text-[3.4rem] lg:leading-[4.3rem] 2xl:text-6xl text-[#FFF9F4] addington-bold lg:max-w-6xl 2xl:max-w-[80rem] 2xl:leading-[4rem] lg:text-center mt-10 mb-4 lg:mt-16 lg:mb-12">
          {placeholderDesktop.map((item, index) => {
            return <AnimatedText {...item} key={index} />;
          })}
        </div>
      </motion.div>
      <button className="mx-6 lg:m-0 w-max mb-6 lg:mb-0 bg-[#fff9f4] text-[#CC5900] transition-all hover:text-[#fff9f4] hover:bg-[#cc5900] font-semibold p-3 px-5 lg:p-4 lg:px-6 rounded-lg text-sm lg:text-[1.375rem]">
        Learn more
      </button>
      <Image className="w-full h-max overlay-test" src={ReelImg} alt="" />
      <div className="flex flex-col items-start lg:items-center gap-y-2 lg:gap-y-6 p-6 lg:p-0">
        <div className="text-[#CC5900] text-base lg:text-2xl font-semibold">
          Our Mission
        </div>
        {/* <div className="lg:hidden">
          <MissionMobile />
        </div> */}
        <div className="hidden lg:block">
          <Mission />
        </div>
         <p className="lg:hidden text-left lg:text-center text-[#dddddd] text-xl lg:text-4xl addington-regular max-w-4xl xl:mb-5">
          Our mission is to get talented short film makers the best possible
          avenues of distribution, exhibition, appreciation & box office revenue
          for their work.
        </p> 
      </div>
      <div className="hidden lg:block w-40 xl:w-[60rem] 2xl:w-[65rem] mt-10 lg:-mb-72">
        <Image src={CurtainsImage} alt="curtains" />
      </div>
    </div>
  );
}
