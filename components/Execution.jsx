import React from "react";
import Image from "next/image";
import HandImg from "../public/assets/images/execution/Hand.png";
import MobileHandImg from "../public/assets/images/execution/Hand-mobile.png";
import ExecutionBlur from "../public/assets/images/blur-ellipses/execution-ellipse.png";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer'

export default function Execution() {
  const [ref, inView] = useInView({ threshold: 0 });

  return (
    <div className="flex flex-col lg:items-center lg:justify-center lg:flex-row lg:pt-40 lg:pb-20 pt-80">
      <div className="w-full h-[40rem] absolute hidden lg:block">
        <div className="blur-div w-full h-full rounded-full"></div>
      </div>
      {/* <div className="absolute hidden lg:block">
        <div className="w-full h-full">
          <Image src={ExecutionBlur} alt="" />
        </div>
      </div> */}
      <div className="flex flex-col z-10">
        <div className="px-6 pt-6 pb-0 lg:pt-0 lg:p-0 lg:px-16 flex flex-col gap-y-2 lg:gap-y-4">
          <div className="text-[#CC5900] text-base lg:text-2xl font-semibold">
            Execution
          </div>
          <div className="addington-bold text-white text-xl lg:text-4xl">
            Serving Engaging Content{" "}
          </div>
          <div className="text-white text-sm lg:text-lg lg:text-white font-normal max-w-xs lg:max-w-md">
            Everything you need to know about our strategy and content planning
            going forward
          </div>
        </div>
        <div className="lg:w-[40rem] 2xl:w-[48rem] hidden lg:block">
          <Image className="" src={HandImg} alt="" />
        </div>
      </div>
      <div className="w-full flex justify-end z-10">
        <div className="w-64 lg:hidden">
          <Image className="" src={MobileHandImg} alt="" />
        </div>
      </div>
      <AnimatePresence>
        <div ref={ref} className="px-6 lg:px-10 flex flex-col gap-y-4 z-10">
          <motion.div
            className="p-5 lg:p-8 w-max h-max text-sm lg:text-xl xl:text-2xl font-normal text-white bg-[#1B1B1B] box-shadow-execution rounded-2xl max-w-[21rem] lg:max-w-sm xl:max-w-2xl"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            Focus on outstanding short films, animation clips, and other
            experimental short content
          </motion.div>
          <motion.div
            className="p-5 lg:p-8 w-max h-max text-sm lg:text-xl xl:text-2xl font-normal text-white bg-[#1B1B1B] box-shadow-execution rounded-2xl max-w-[21rem] lg:max-w-sm xl:max-w-2xl"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            exit={{ opacity: 0 }}
            transition={{ delay: 1 }}
          >
            Short films will be sourced and commissioned nationally and globally
            to encourage established filmmakers and undiscovered talent to find
            as much financial success as their mainstream industry feature
            content
          </motion.div>
          <motion.div
            className="p-5 lg:p-8 w-max h-max text-sm lg:text-xl xl:text-2xl font-normal text-white bg-[#1B1B1B] box-shadow-execution rounded-2xl max-w-[21rem] lg:max-w-sm xl:max-w-2xl"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.5 }}
          >
            Family and social message-oriented content - an experienced
            editorial board will oversee that controversial, obscene, or
            objectionable content is never authorised for display.
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
}
