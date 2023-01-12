import React, { useEffect } from "react";
import Image from "next/image";
import Ellipse from "../public/assets/images/headquatered/ellipse.png";
import Map from "../public/assets/images/headquatered/map.png";
import MapMobile from "../public/assets/images/headquatered/map-mobile.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedText from "../src/AnimatedText";

const h1 = [
  {
    type: "heading1",
    text: "Headquartered in Mumbai, India",
  },
];

const h2 = [
  {
    type: "heading2",
    text: "With 3,000 sq. ft. of production, post-production",
  },
  {
    type: "heading2",
    text: "& programming infrastructure",
  },
];
const h2Mobile = [
  {
    type: "heading2",
    text: "With 3,000 sq. ft. of production, post-",
  },
  {
    type: "heading2",
    text: "production & programming infrastructure",
  },
];

const container = {
  visible: {
    transition: {
      staggerChildren: 0.002,
    },
  },
};

function H2() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      className="z-40"
      initial="hidden"
      variants={container}
      ref={ref}
      animate={controls}
    >
      <div className="text-base lg:text-2xl font-normal max-w-[33rem] z-40">
        {h2.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}

function H2Mobile() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      className="z-40"
      initial="hidden"
      variants={container}
      ref={ref}
      animate={controls}
    >
      <div className="text-base lg:text-2xl font-normal max-w-[33rem] z-20">
        {h2Mobile.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}

export default function Headquatered() {
  return (
    <div className="w-full h-max flex flex-col lg:flex-row items-center justify-center lg:px-16 lg:py-40">
      <div className="p-6 lg:p-0 flex flex-col gap-y-4 relative lg:-mr-16">
        <h1 className="text-white addington-bold text-3xl lg:text-4xl z-20">
          Headquartered in
          <span className="text-[#CC5900]"> Mumbai, India</span>
        </h1>
        <div className="lg:hidden">
          <H2Mobile />
        </div>
        <div className="hidden lg:block z-50">
          <H2 />
        </div>
        {/* <h2 className="text-base lg:text-2xl op-text font-normal max-w-[33rem] z-20">
          With 3,000 sq. ft. of production, post-production & programming
          infrastructure
        </h2> */}
        <div className="w-72 h-36 -top-16 -right-20 absolute z-10 hidden lg:block">
          <Image src={Ellipse} alt="ellipse" />
        </div>
        {/* <div className="shit w-72 h-36 -top-12 right-7 absolute"></div> */}
      </div>
      <div className="hidden w-[48.5rem] 2xl:w-[55rem] lg:block">
        <Image src={Map} alt="map" />
      </div>
      <div className="w-full lg:hidden">
        <Image src={MapMobile} alt="map" />
      </div>
    </div>
  );
}
