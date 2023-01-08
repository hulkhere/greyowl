import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TheaterAnimated() {
  const [isOpen, setIsOpen] = useState(false);
  const width = useMotionValue(40);
  const height = useMotionValue(100);
  const elementRef = useRef(null);

  // Use the useInView hook to observe the element
  const [ref, inView] = useInView({
    threshold: 0, // Set the threshold to 0 so the callback is triggered when the element is fully in view
  });

  useEffect(() => {
    // Check if the element is in view
    if (inView) {
      // Set isOpen to true after 1 second
      setTimeout(() => {
        setIsOpen(true);
      }, 1000);
    }
  }, [inView]); // Re-run the effect whenever inView changes

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
