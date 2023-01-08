import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TheaterAnimated() {
  const [isOpen, setIsOpen] = useState(false);
  const width = useMotionValue(40);
  const height = useMotionValue(100);
  const elementRef = useRef(null);

  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setIsOpen(true);
      }, 1000);
    }
  }, [inView]);

  return (
    <div ref={ref} className="w-full h-max flex justify-between items-center">
      <div className="flex">
        <main className="flex curtain-parent">
          <motion.div
            className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
            style={{ width, height }}
            animate={{ width: isOpen ? 20 : 40, height: "100vh" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
            style={{ width, height }}
            animate={{ width: isOpen ? 20 : 40, height: "100vh" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
            style={{ width, height }}
            animate={{ width: isOpen ? 20 : 40, height: "100vh" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
        </main>
        <main className="flex curtain-parent">
          <motion.div
            className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
            style={{ width, height }}
            animate={{ width: isOpen ? 20 : 40, height: "100vh" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
            style={{ width, height }}
            animate={{ width: isOpen ? 20 : 40, height: "100vh" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
            style={{ width, height }}
            animate={{ width: isOpen ? 20 : 40, height: "100vh" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
        </main>
        <main className="flex curtain-parent">
          <motion.div
            className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
            style={{ width, height }}
            animate={{ width: isOpen ? 20 : 40, height: "100vh" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
            style={{ width, height }}
            animate={{ width: isOpen ? 20 : 40, height: "100vh" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
            style={{ width, height }}
            animate={{ width: isOpen ? 20 : 40, height: "100vh" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
        </main>
      </div>
      <h1 className="text-2xl lg:text-5xl text-white addington-bold text-center mb-20 lg:mb-0 lg:mt-20 hidden lg:block">
        We are <span className="text-[#FB8121]"> changing </span> the <br />
        cinema experience forever
      </h1>
      <div className="flex">
        <main className="flex curtain-parent-2">
          <motion.div
            className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
            style={{ width, height }}
            animate={{ width: isOpen ? 20 : 40, height: "100vh" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
            style={{ width, height }}
            animate={{ width: isOpen ? 20 : 40, height: "100vh" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
            style={{ width, height }}
            animate={{ width: isOpen ? 20 : 40, height: "100vh" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
        </main>
        <main className="flex curtain-parent-2">
          <motion.div
            className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
            style={{ width, height }}
            animate={{ width: isOpen ? 20 : 40, height: "100vh" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
            style={{ width, height }}
            animate={{ width: isOpen ? 20 : 40, height: "100vh" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
            style={{ width, height }}
            animate={{ width: isOpen ? 20 : 40, height: "100vh" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
        </main>
        <main className="flex curtain-parent-2">
          <motion.div
            className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
            style={{ width, height }}
            animate={{ width: isOpen ? 20 : 40, height: "100vh" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
            style={{ width, height }}
            animate={{ width: isOpen ? 20 : 40, height: "100vh" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className={`curtain-div ${isOpen ? "w-20" : "w-40"} h-screen`}
            style={{ width, height }}
            animate={{ width: isOpen ? 20 : 40, height: "100vh" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
        </main>
      </div>
    </div>
  );
}
