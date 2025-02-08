import React from "react";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    { role: "Software Engineer", company: "Radixweb", duration: "08/2024 - 11/2024", tasks: "Developed features for OnPrint Shop." },
    { role: "PHP Developer", company: "Silver Touch Technologies Pvt Ltd", duration: "04/2023 - 06/2024", tasks: "Built software using PHP, HTML, CSS, and JavaScript." },
    { role: "Software Engineer", company: "Kanris Infotech Pvt Ltd", duration: "04/2022 - 04/2023", tasks: "Troubleshot and debugged software issues." },
    { role: "Processing Associate", company: "JoulestoWatts Business Solutions", duration: "02/2020 - 04/2022", tasks: "Assisted team members with technical issues of testing applications." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="experience"
      className="experience py-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      style={{ backgroundColor: "transparent", color: "inherit" }}
    >
      <div className="container">
        <h2 className="mb-4 text-center">Work Experience</h2>
        <div className="row">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="col-md-6 mb-3"
              variants={cardVariants}
            >
              <div className="card shadow bg-dark text-light">
                <div className="card-body">
                  <h5 className="card-title">{exp.role}</h5>
                  <p className="card-text">
                    <strong>Company:</strong> {exp.company}
                  </p>
                  <p className="card-text">
                    <strong>Duration:</strong> {exp.duration}
                  </p>
                  <p className="card-text">
                    <strong>Tasks:</strong> {exp.tasks}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
