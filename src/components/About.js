import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="about py-5"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <motion.h2
          className="text-center mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I am a highly skilled PHP Developer with expertise in developing and maintaining complex web
          applications. I am proficient in optimizing systems for scalability and performance. My goal is to
          create user-friendly, scalable, and efficient software solutions.
        </motion.p>
      </div>
    </motion.section>
  );
}

export default About;
