import React from "react";
import { motion } from "framer-motion";

function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="contact"
      className="contact py-5 bg-dark text-light"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 className="text-center mb-4" variants={itemVariants}>
          Hire Me
        </motion.h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="text-center">
              <motion.p variants={itemVariants}>
                Email:{" "}
                <a
                  href="mailto:mansikhanvilkar12@gmail.com"
                  className="text-light"
                >
                  mansikhanvilkar12@gmail.com
                </a>
              </motion.p>
              <motion.p variants={itemVariants}>
                Phone:{" "}
                <a href="tel:9892766524" className="text-light">
                  9892766524
                </a>
              </motion.p>
              <motion.p variants={itemVariants}>
                Address: 11/3, Avdhut Chaya, Bhatwadi, Ghatkopar (West), Mumbai -
                400084
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
