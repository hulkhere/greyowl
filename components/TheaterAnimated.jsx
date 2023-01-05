import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function TheaterAnimated() {
  const [isOpen, setIsOpen] = useState(false);
  const width = useMotionValue(40);
  const height = useMotionValue(100);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <button
      className="w-full h-max flex justify-between items-center"
      onClick={handleClick}
    >
      <div className="flex">
        <main className="flex">
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
        <main className="flex">
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
        <main className="flex">
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
        <main className="flex">
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
        <main className="flex">
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
        <main className="flex">
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
    </button>
  );
}
