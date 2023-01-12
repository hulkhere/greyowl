import React, { useEffect } from "react";
import Image from "next/image";
import Members from "./Members";
import Headquatered from "./Headquatered";
import AnimatedText from "../src/AnimatedText";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const team = [
  {
    type: "heading1",
    text: "We are a team of dreamers, visionaries and deep lovers of",
  },
  {
    type: "heading2",
    text: "everything cinema. We are serial entrepreneurs with prior",
  },
  {
    type: "heading2",
    text: "history of successful multi-million dollars exit.",
  },
];

const teamP1 = [
  {
    type: "heading1",
    text: "We are a team of dreamers,",
  },
  {
    type: "heading2",
    text: "visionaries and deep lovers of",
  },
  {
    type: "heading2",
    text: "everything cinema",
  },
];

const teamP2 = [
  {
    type: "heading1",
    text: "We are serial entrepreneurs with",
  },
  {
    type: "heading2",
    text: "with prior history of successful",
  },
  {
    type: "heading2",
    text: "multi-million dollars exit.",
  },
];

const container = {
  visible: {
    transition: {
      staggerChildren: 0.002,
    },
  },
};

function TeamText() {
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
      <div className="text-left lg:text-center text-[#dddddd] text-xl lg:text-5xl addington-bold max-w-7xl hidden lg:block">
        {team.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}

function TeamSubP1() {
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
      <div className="text-left text-[#dddddd] text-xl addington-regular max-w-7xl leading-6">
        {teamP1.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}

function TeamSubP2() {
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
      <div className="text-left text-[#dddddd] text-xl addington-regular max-w-7xl leading-6">
        {teamP2.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <>
      <div className="team-gradient h-max flex flex-col items-start lg:items-center gap-y-2 lg:gap-y-6 px-6 pb-6 lg:px-0 lg:pb-0 lg:p-0 lg:py-28">
        <div className="text-[#CC5900] text-base lg:text-2xl font-semibold">
          Our team
        </div>
        <TeamText />
        {/* <p className="text-left lg:text-center text-[#dddddd] text-xl lg:text-5xl addington-bold max-w-7xl hidden lg:block">
          We are a team of dreamers, visionaries and deep lovers of everything
          cinema. We are serial entrepreneurs with prior history of successful
          multi-million dollars exit.
        </p> */}
        <div className="flex flex-col gap-y-2 lg:hidden">
          <TeamSubP1 />
          {/* <p className="text-left text-[#dddddd] text-xl addington-regular max-w-7xl">
            We are a team of dreamers, visionaries and deep lovers of everything
            cinema.
          </p> */}
          <TeamSubP2 />
          {/* <p className="text-left text-[#dddddd] text-xl addington-regular max-w-7xl">
            We are serial entrepreneurs with prior history of successful
            multi-million dollars exit.
          </p> */}
        </div>
        <Members />
        {/* <Headquatered /> */}
      </div>
    </>
  );
}
