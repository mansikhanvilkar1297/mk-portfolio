import React from "react";
import { motion } from "framer-motion";
import '../css/style.css';

function Home() {
  return (
    <motion.section
      id="home"
      className="home text-center py-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="container">
        <motion.h2
          className="display-4"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          I'm Mansi Khanvilkar, 
        </motion.h2>
        <motion.p
          className="lead"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          A passionate software developer with 4+ years of
          experience.
        </motion.p>
      </div>
    </motion.section>
  );
}

export default Home;
