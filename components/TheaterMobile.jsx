import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import CurtainsImage from "../public/assets/images/theater/curtains.png";

const texts = [
  "We are changing the cinema experience forever",
  "Our state-of-the-art technology allows us to offer a unique and immersive viewing experience in a compact and easily accessible format.",
  "Our mini-theatres are perfect for small towns and remote communities where traditional movie theatres are not always feasible.",
];

const highlightedText = texts.map((text, index) => {
  if (index === 0) {
    return text.replace(
      "changing",
      "<span class='highlighted'>changing</span>"
    );
  } else {
    return text;
  }
});

export default function TheaterMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const width = useMotionValue(6);
  const height = useMotionValue(80);
  const elementRef = useRef(null);

  const [ref, inView] = useInView({
    threshold: 0,
  });
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((textIndex + 1) % texts.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [textIndex]);

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
          <div className="lg:hidden w-64 relative bottom-20">
            <Image src={CurtainsImage} alt="curtains" />
          </div>
          <div className="text-container">
            {highlightedText.map((text, index) => (
              <div
                key={text}
                className={`text ${
                  textIndex === index ? "fade-in" : "hidden"
                } ${
                  index === 0
                    ? "text-[1.375rem] lg:text-5xl text-white addington-bold text-center"
                    : "text-base lg:text-5xl text-white addington-bold text-center"
                }`}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </div>
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
