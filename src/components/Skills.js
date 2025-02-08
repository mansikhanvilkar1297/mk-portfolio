import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const skills = ["Core PHP", "Laravel", "SQL", "HTML", "JavaScript", "Bootstrap", "jQuery", "AJAX", "CSS"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section
      id="skills"
      className="skills py-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container">
        <h2 className="mb-4 text-center">Skills</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="badge bg-info me-2 mb-2 fs-3"
              variants={badgeVariants}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
