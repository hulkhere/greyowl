import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import CurtainsImage from "../public/assets/images/theater/curtains.png";

export default function TheaterMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const width = useMotionValue(6);
  const height = useMotionValue(80);
  const elementRef = useRef(null);

  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setIsOpen(true);
      }, 2000);
    }
  }, [inView]);

  return (
    <>
      <div ref={ref} className="w-full h-max flex justify-between mt-40">
        <div className="flex">
          <main className="flex curtain-parent">
            <motion.div
              className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
              style={{ width, height }}
              animate={{ width: isOpen ? 3 : 6, height: "60vh" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
              style={{ width, height }}
              animate={{ width: isOpen ? 3 : 6, height: "60vh" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
              style={{ width, height }}
              animate={{ width: isOpen ? 3 : 6, height: "60vh" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
          </main>
          <main className="flex curtain-parent">
            <motion.div
              className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
              style={{ width, height }}
              animate={{ width: isOpen ? 3 : 6, height: "60vh" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
              style={{ width, height }}
              animate={{ width: isOpen ? 3 : 6, height: "60vh" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
              style={{ width, height }}
              animate={{ width: isOpen ? 3 : 6, height: "60vh" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
          </main>
          <main className="flex curtain-parent">
            <motion.div
              className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
              style={{ width, height }}
              animate={{ width: isOpen ? 3 : 6, height: "60vh" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
              style={{ width, height }}
              animate={{ width: isOpen ? 3 : 6, height: "60vh" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
              style={{ width, height }}
              animate={{ width: isOpen ? 3 : 6, height: "60vh" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
          </main>
        </div>
        <div className="flex flex-col items-center">
          <div className="lg:hidden w-60 relative bottom-20">
            <Image src={CurtainsImage} alt="curtains" />
          </div>{" "}
          <h1 className="text-2xl lg:text-5xl text-white addington-bold text-center">
            We are <span className="text-[#FB8121]"> changing </span> the <br />
            cinema experience forever
          </h1>
        </div>
        <div className="flex">
          <main className="flex curtain-parent-2">
            <motion.div
              className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
              style={{ width, height }}
              animate={{ width: isOpen ? 3 : 6, height: "60vh" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
              style={{ width, height }}
              animate={{ width: isOpen ? 3 : 6, height: "60vh" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
              style={{ width, height }}
              animate={{ width: isOpen ? 3 : 6, height: "60vh" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
          </main>
          <main className="flex curtain-parent-2">
            <motion.div
              className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
              style={{ width, height }}
              animate={{ width: isOpen ? 3 : 6, height: "60vh" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
              style={{ width, height }}
              animate={{ width: isOpen ? 3 : 6, height: "60vh" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
              style={{ width, height }}
              animate={{ width: isOpen ? 3 : 6, height: "60vh" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
          </main>
          <main className="flex curtain-parent-2">
            <motion.div
              className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
              style={{ width, height }}
              animate={{ width: isOpen ? 3 : 6, height: "60vh" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
              style={{ width, height }}
              animate={{ width: isOpen ? 3 : 6, height: "60vh" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
              style={{ width, height }}
              animate={{ width: isOpen ? 3 : 6, height: "60vh" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
          </main>
        </div>
      </div>
    </>
  );
}
