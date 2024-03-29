import React, { useEffect } from "react";
import CameraLogo from "./svg/CameraLogo";
import HustlersLogo from "./svg/Hustlerslogo";
import OpportunitiesLi from "./svg/OpportunitiesLi";
import EveryoneLogo from "./svg/EveryoneLogo";
import { useMedia } from "use-media";
import Link from "next/link";
import AnimatedText from "../src/AnimatedText";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const h1 = [
  {
    type: "heading1",
    text: "We’re looking for talented people",
  },
];

const h2 = [
  {
    type: "heading2",
    text: "Join us in our mission to bring the magic of the movies to rural audiences everywhere.",
  },
];

const container = {
  visible: {
    transition: {
      staggerChildren: 0.002,
    },
  },
};

function OppH1() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      className=""
      initial="hidden"
      variants={container}
      ref={ref}
      animate={controls}
    >
      <div className="text-4xl text-white addington-bold">
        {h1.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}

function OppH2() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      className=""
      initial="hidden"
      variants={container}
      ref={ref}
      animate={controls}
    >
      <div className="text-xl font-normal op-text">
        {h2.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}

export default function Opportunities() {
  const [ref, inView] = useInView({ threshold: 0 });
  const isMobile = useMedia({ maxWidth: 640 });

  return (
    <main className="w-full p-6 sm:p-10 lg:p-8 lg:px-24 flex flex-col">
      <div className="hidden flex-col gap-y-4 lg:flex">
        <div className="text-[#cc5900] text-base font-semibold">
          Open positions
        </div>
        <OppH1 />
        {/* <div className="text-4xl text-white addington-bold">
          We’re looking for talented people
        </div> */}
        <OppH2 />
        {/* <div className="text-xl font-normal op-text">
          Join us in our mission to bring the magic of the movies to rural
          audiences everywhere.
        </div> */}
      </div>
      <div className="flex flex-col lg:flex-row h-max gap-y-6 gap-x-14 justify-center lg:justify-start lg:my-20">
        <motion.div
          ref={ref}
          initial={{ y: isMobile ? "50%" : "75%" }}
          animate={inView ? { y: 0 } : { y: isMobile ? 100 : "" }}
          transition={{ duration: 0.5 }}
          className="lg:w-[26rem] 2xl:w-[28rem] flex flex-col items-center gap-y-3 p-8 py-10 2xl:py-12 rounded-2xl opportunities-box"
        >
          <div>
            <HustlersLogo />
          </div>
          <div className="text-2xl lg:text-3xl 2xl:text-4xl addington-bold text-white">
            For Hustlers
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-y-2">
              <div className="op-text text-base lg:text-xl 2xl:text-2xl flex">
                <div className="w-2 h-2 lg:w-2 lg:h-2 mt-2.5 mr-2.5">
                  <OpportunitiesLi />
                </div>
                <div className="max-w-xs">
                  We’re looking for hustlers & creatives to join us on this
                  revolutionary mission.
                </div>
              </div>
              <div className="op-text text-base lg:text-xl 2xl:text-2xl flex">
                <div className="w-2 h-2 lg:w-2 lg:h-2 mt-2.5 mr-2.5">
                  <OpportunitiesLi />
                </div>
                <div className="max-w-xs">
                  If the vision excites you and you’ve got the fire in you to
                  build something from scratch, let’s talk.
                </div>
              </div>
            </div>
            <button className="border-2 border-white text-xl text-black font-semibold w-full bg-white py-3 lg:py-4 rounded-xl mt-4 hover:bg-transparent hover:text-white hover:border-white transition-all">
              Join us
            </button>
          </div>
        </motion.div>
        {/* ashkjfhakjsfk */}
        <motion.div
          ref={ref}
          initial={{ y: isMobile ? "50%" : "75%" }}
          animate={inView ? { y: 0 } : { y: isMobile ? 100 : "" }}
          transition={{ duration: 1 }}
          className="lg:w-[26rem] 2xl:w-[28rem] flex flex-col items-center gap-y-3 p-8 py-10 2xl:py-12 rounded-2xl opportunities-box"
        >
          <div>
            <CameraLogo />
          </div>
          <div className="text-2xl lg:text-3xl 2xl:text-4xl addington-bold text-white">
            For Filmmakers
          </div>
          <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col gap-y-2">
              <div className="op-text text-base lg:text-xl 2xl:text-2xl flex">
                <div className="w-2 h-2 lg:w-2 lg:h-2 mt-2.5 mr-2.5">
                  <OpportunitiesLi />
                </div>
                <div className="max-w-xs">
                  If you’re a passionate film-maker, a collector of great
                  art/films or a efficient -visionary producer
                </div>
              </div>
              <div className="op-text text-base lg:text-xl 2xl:text-2xl flex">
                <div className="w-2 h-2 lg:w-2 lg:h-2 mt-2.5 mr-2.5">
                  <OpportunitiesLi />
                </div>
                <div className="max-w-xs">
                  We want to welcome you as our early exhibition partner.
                </div>
              </div>
            </div>
            <button className="border-2 border-white text-xl text-black font-semibold w-full bg-white py-3 lg:py-4 rounded-xl mt-4 hover:bg-transparent hover:text-white hover:border-white transition-all">
              Join us
            </button>
          </div>
        </motion.div>
        {/* ashfghjasgfjg */}
        <motion.div
          ref={ref}
          initial={{ y: isMobile ? "50%" : "75%" }}
          animate={inView ? { y: 0 } : { y: isMobile ? 100 : "" }}
          transition={{ duration: 1.5 }}
          className="lg:w-[26rem] 2xl:w-[28rem] flex flex-col items-center gap-y-3 p-8 py-10 2xl:py-12 rounded-2xl opportunities-box"
        >
          <div>
            <EveryoneLogo />
          </div>
          <div className="text-2xl lg:text-3xl 2xl:text-4xl addington-bold text-white">
            For Everyone Else
          </div>
          <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col gap-y-2">
              <div className="op-text text-base lg:text-xl 2xl:text-2xl flex">
                <div className="w-2 h-2 lg:w-2 lg:h-2 mt-2.5 mr-2.5">
                  <OpportunitiesLi />
                </div>
                <div className="max-w-xs">
                  If you’re curious & simply want to learn more, do not
                  hesitate!
                </div>
              </div>
              <div className="op-text text-base lg:text-xl 2xl:text-2xl flex">
                <div className="w-2 h-2 lg:w-2 lg:h-2 mt-2.5 mr-2.5">
                  <OpportunitiesLi />
                </div>
                <div className="max-w-xs">Simply say hi! </div>
              </div>
            </div>
            <button className="text-xl text-white font-semibold w-full border-white border-2 py-3 lg:py-4 rounded-xl mt-4 hover:bg-white hover:text-black transition-all">
              Say Hi!
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
