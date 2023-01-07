import React from "react";
import CameraLogo from "./svg/CameraLogo";
import HustlersLogo from "./svg/Hustlerslogo";
import OpportunitiesLi from "./svg/OpprtunitiesLi";
import EveryoneLogo from "./svg/EveryoneLogo";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Opportunities() {
  const [ref, inView] = useInView({ threshold: 0 });

  return (
    <main className="w-full p-6 sm:p-10 lg:p-8 lg:px-24 flex flex-col">
      <div className="hidden flex-col gap-y-4 lg:flex">
        <div className="text-[#cc5900] text-base font-semibold">
          Open positions
        </div>
        <div className="text-4xl text-white addington-bold">
          We’re looking for talented people
        </div>
        <div className="text-xl font-normal text-white">
          Join us in our mission to bring the magic of the movies to rural
          audiences everywhere.
        </div>
      </div>
      <div className="flex flex-col lg:flex-row h-max gap-y-6 gap-x-14 justify-center lg:justify-start my-10 lg:my-20">
        <motion.div
          ref={ref}
          initial={{ y: "75%" }}
          animate={inView ? { y: 0 } : {}}
          // animate={{ y: 0 }}
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
              <div className="shitt text-base lg:text-xl 2xl:text-2xl flex">
                <div className="w-2 h-2 lg:w-2 lg:h-2 mt-2.5 mr-2.5">
                  <OpportunitiesLi />
                </div>
                <div className="max-w-xs">
                  We’re looking for hustlers & creatives to join us on this
                  revolutionary mission.
                </div>
              </div>
              <div className="shitt text-base lg:text-xl 2xl:text-2xl flex">
                <div className="w-2 h-2 lg:w-2 lg:h-2 mt-2.5 mr-2.5">
                  <OpportunitiesLi />
                </div>
                <div className="max-w-xs">
                  If the vision excites you and you’ve got the fire in you to
                  build something from scratch, let’s talk.
                </div>
              </div>
            </div>
            <button className="text-xl text-black font-semibold w-full bg-white py-3 lg:py-4 rounded-xl mt-4">
              Join us
            </button>
          </div>
        </motion.div>
        {/* ashkjfhakjsfk */}
        <motion.div
          ref={ref}
          initial={{ y: "75%" }}
          animate={inView ? { y: 0 } : {}}
          // animate={{ y: 0 }}
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
              <div className="shitt text-base lg:text-xl 2xl:text-2xl flex">
                <div className="w-2 h-2 lg:w-2 lg:h-2 mt-2.5 mr-2.5">
                  <OpportunitiesLi />
                </div>
                <div className="max-w-xs">
                  If you’re a passionate film-maker, a collector of great
                  art/films or a efficient -visionary producer
                </div>
              </div>
              <div className="shitt text-base lg:text-xl 2xl:text-2xl flex">
                <div className="w-2 h-2 lg:w-2 lg:h-2 mt-2.5 mr-2.5">
                  <OpportunitiesLi />
                </div>
                <div className="max-w-xs">
                  We want to welcome you as our early exhibition partner.
                </div>
              </div>
            </div>
            <button className="text-xl text-black font-semibold w-full bg-white py-3 lg:py-4 rounded-xl mt-4">
              Join us
            </button>
          </div>
        </motion.div>
        {/* ashfghjasgfjg */}
        <motion.div
          ref={ref}
          initial={{ y: "75%" }}
          animate={inView ? { y: 0 } : {}}
          // animate={{ y: 0 }}
          transition={{ duration: 1.5 }}
          className="lg:w-[26rem] 2xl:w-[28rem] flex flex-col items-center gap-y-3 p-8 py-10 rounded-2xl opportunities-box"
        >
          <div>
            <EveryoneLogo />
          </div>
          <div className="text-2xl lg:text-3xl addington-bold text-white">
            For Everyone Else
          </div>
          <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col gap-y-2">
              <div className="shitt text-base lg:text-xl 2xl:text-2xl flex">
                <div className="w-2 h-2 lg:w-2 lg:h-2 mt-2.5 mr-2.5">
                  <OpportunitiesLi />
                </div>
                <div className="max-w-xs">
                  If you’re curious & simply want to learn more, do not
                  hesitate!
                </div>
              </div>
              <div className="shitt text-base lg:text-xl 2xl:text-2xl flex">
                <div className="w-2 h-2 lg:w-2 lg:h-2 mt-2.5 mr-2.5">
                  <OpportunitiesLi />
                </div>
                <div className="max-w-xs">Simply say hi! </div>
              </div>
            </div>
            <button className="text-xl text-white font-semibold w-full border-white border-2 py-3 lg:py-4 rounded-xl mt-4">
              Say Hi!
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
