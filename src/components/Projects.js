import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    { name: "DayCare Center", link: "https://www.bombayhighcourt.nic.in/DayCare", description: "Bombay High Court Official Website" },
    { name: "Barazki", link: "https://www.barazki.in/", description: "E-commerce platform for various products." },
    { name: "OnPrintShop (OPS)", link: "https://www.onprintshop.com", description: "Enterprise-grade online printing platform." },
    { name: "Present Judges", link: "https://bombayhighcourt.nic.in/jshow.php", description: "Bombay High Court Official Website" },
    { name: "Feedback Form", link: "https://www.feedback.alservicesindia.com", description: "Platform for collecting structured feedback." },
    { name: "Virtual Hearing", link: "https://bombayhighcourt.nic.in/index.php", description: "Bombay High Court Official Website" },

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="projects"
      className="projects py-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="col-md-4 mb-3"
              variants={cardVariants}
            >
              <div className="card shadow bg-dark text-light">
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info">
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
