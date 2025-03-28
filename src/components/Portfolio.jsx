// src/components/Portfolio.jsx

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Portfolio.module.css';

const projects = [
  { name: "Recipe App (Kotlin)", link: "https://github.com/diiya21/Group4-Project-2205" },
  { name: "Movie Ticket Booking (C++)", link: "https://github.com/diiya21/movie-ticket-booking-system" },
  { name: "AI Parking Detection (React)", link: "https://github.com/diiya21/Photogallery-AWS" },
  { name: "PhotoGallery+Blog (React + AWS)", link: "https://github.com/diiya21/Photogallery-AWS" },
  { name: "Library App (C#)", link: "https://github.com/Samuel-Chow-demon/CSTP-2204-IT-Project" },
];

const skills = [
  "Programming (C++, Kotlin, C#)",
  "Cloud Computing (AWS, Azure)",
  "Database Management (SQL, NoSQL)",
  "Web Development (React, Node.js, HTML, CSS)",
  "Mobile App Development (Android)",
  "User Interface Design",
  "Algorithms and Data Structures",
  "Computer Security",
];

export default function Portfolio() {
  return (
    <div className={styles.container}>
      
      {/* Introduction Section */}
      <div className={styles.intro}>
        <h1 className={styles.title}>Hi, I'm Diya Sharma!</h1>
        <p>A Computer Systems Technology student @ VCC, passionate about building cool tech.</p>
        <p>Email: <a href="mailto:diyasharma2183@gmail.com" className={styles.email}>diyasharma2183@gmail.com</a></p>
      </div>

      {/* Skills Section */}
      <div className={styles.skillsSection}>
        <h2>Skills</h2>
        <ul className={styles.skillsList}>
          {skills.map((skill, index) => (
            <li key={index} className={styles.skillItem}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Projects Section */}
      <div className={styles.projectsSection}>
        <h2>Projects</h2>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectCard}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className={styles.projectTitle}>{project.name}</h3>
              <a href={project.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
