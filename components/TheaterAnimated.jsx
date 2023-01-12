import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

export default function TheaterAnimated() {
  const [isOpen, setIsOpen] = useState(false);
  const width = useMotionValue(40);
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

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((textIndex + 1) % texts.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [textIndex]);

  return (
    <div ref={ref} className="w-full h-max flex justify-between items-center">
      <div className="flex">
        <main className="flex curtain-parent">
          <motion.div
            className="curtain-div"
            style={{ width, height: "100vh" }}
            animate={{
              width: isOpen ? 20 : 40,
              height: isOpen ? "100vh" : "100vh",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="curtain-div"
            style={{ width, height: "100vh" }}
            animate={{
              width: isOpen ? 20 : 40,
              height: isOpen ? "100vh" : "100vh",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="curtain-div"
            style={{ width, height: "100vh" }}
            animate={{
              width: isOpen ? 20 : 40,
              height: isOpen ? "100vh" : "100vh",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
        </main>
        <main className="flex curtain-parent">
          <motion.div
            className="curtain-div"
            style={{ width, height: "100vh" }}
            animate={{
              width: isOpen ? 20 : 40,
              height: isOpen ? "80vh" : "100vh",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="curtain-div"
            style={{ width, height: "100vh" }}
            animate={{
              width: isOpen ? 20 : 40,
              height: isOpen ? "80vh" : "100vh",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="curtain-div"
            style={{ width, height: "100vh" }}
            animate={{
              width: isOpen ? 20 : 40,
              height: isOpen ? "80vh" : "100vh",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
        </main>
        <main className="flex curtain-parent">
          <motion.div
            className="curtain-div"
            style={{ width, height: "100vh" }}
            animate={{
              width: isOpen ? 20 : 40,
              height: isOpen ? "60vh" : "100vh",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="curtain-div"
            style={{ width, height: "100vh" }}
            animate={{
              width: isOpen ? 20 : 40,
              height: isOpen ? "60vh" : "100vh",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="curtain-div"
            style={{ width, height: "100vh" }}
            animate={{
              width: isOpen ? 20 : 40,
              height: isOpen ? "60vh" : "100vh",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
        </main>
      </div>
      <div className="text-container">
        {highlightedText.map((text, index) => (
          <div
            key={text}
            className={`text ${textIndex === index ? "fade-in" : "hidden"} ${
              index === 0
                ? "text-6xl text-white addington-bold text-center mt-20 max-w-[47rem]"
                : "text-5xl leading-[55px] text-white addington-bold text-center mt-20 max-w-6xl"
            }`}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
      </div>
      {/* <h1 className="text-2xl lg:text-5xl text-white addington-bold text-center mb-20 lg:mb-0 lg:mt-20 hidden lg:block">
        We are <span className="text-[#FB8121]"> changing </span> the <br />
        cinema experience forever
      </h1> */}
      <div className="flex">
        <main className="flex curtain-parent-2">
          <motion.div
            className="curtain-div"
            style={{ width, height: "100vh" }}
            animate={{
              width: isOpen ? 20 : 40,
              height: isOpen ? "60vh" : "100vh",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="curtain-div"
            style={{ width, height: "100vh" }}
            animate={{
              width: isOpen ? 20 : 40,
              height: isOpen ? "60vh" : "100vh",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="curtain-div"
            style={{ width, height: "100vh" }}
            animate={{
              width: isOpen ? 20 : 40,
              height: isOpen ? "60vh" : "100vh",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
        </main>
        <main className="flex curtain-parent-2">
          <motion.div
            className="curtain-div"
            style={{ width, height: "100vh" }}
            animate={{
              width: isOpen ? 20 : 40,
              height: isOpen ? "80vh" : "100vh",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="curtain-div"
            style={{ width, height: "100vh" }}
            animate={{
              width: isOpen ? 20 : 40,
              height: isOpen ? "80vh" : "100vh",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="curtain-div"
            style={{ width, height: "100vh" }}
            animate={{
              width: isOpen ? 20 : 40,
              height: isOpen ? "80vh" : "100vh",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
        </main>
        <main className="flex curtain-parent-2">
          <motion.div
            className="curtain-div"
            style={{ width, height: "100vh" }}
            animate={{
              width: isOpen ? 20 : 40,
              height: isOpen ? "100vh" : "100vh",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="curtain-div"
            style={{ width, height: "100vh" }}
            animate={{
              width: isOpen ? 20 : 40,
              height: isOpen ? "100vh" : "100vh",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="curtain-div"
            style={{ width, height: "100vh" }}
            animate={{
              width: isOpen ? 20 : 40,
              height: isOpen ? "100vh" : "100vh",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
        </main>
      </div>
    </div>
  );
}
