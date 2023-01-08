import React, { useEffect } from "react";
import AnimatedText from "../src/AnimatedText";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const container = {
  visible: {
    transition: {
      staggerChildren: 0.035,
    },
  },
};

export default function Text(props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      initial="hidden"
      variants={container}
      ref={ref}
      animate={controls}
    >
      <div>
        {props.text.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}
