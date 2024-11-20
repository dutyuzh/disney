import { motion } from "framer-motion";
import React from "react";

const TransitionEffect: React.FC = () => {
  return (
    <>
      {/* Primary red transition */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ backgroundColor: "#e63946" }} // Disney red
      />
      
      {/* Light yellow transition */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        style={{ backgroundColor: "#f1faee" }} // Disney light yellow
      />
      
      {/* Soft blue transition */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
        style={{ backgroundColor: "#a8dadc" }} // Disney soft blue
      />
    </>
  );
};

export default TransitionEffect;
