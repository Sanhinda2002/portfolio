import React from 'react';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.png';
import project6 from '../assets/images/project6.png';

const Projects = () => {
  const projects = [
    {
      title: 'Sign Language Interpreter',
      image: project2,
      description: 'Developing a real-time sign language interpreter which converts sign language gestures into text and text to sign language gestures.',
      skills: 'Python, React Native, Express.js, Figma, CSS',
    },
    {
      title: 'Real Time Ticket Booking System',
      image: project1,
      description: 'Developed a real-time ticket booking system using object-oriented programming principles.',
      skills: 'Java, MySQL, React.js',
    },
    {
      title: 'Portfolio Website',
      image: project5,
      description: 'Designed and developed a personal portfolio website to showcase my skills, projects, and experience.',
      skills: 'HTML, CSS, JavaScript, React.js',
    },
    {
      title: 'Plane Management System',
      image: project6,
      description: 'Designed and developed a Plane Management System in Java to facilitate the booking and management of plane seats.',
      skills: 'Java, OOP concepts',
    },
    {
      title: 'Student Grade Management',
      image: project3,
      description: 'Developed a student grade management system with Python.',
      skills: 'Python',
    },
    {
      title: 'Healthy Day Website',
      image: project4,
      description: 'Developed an informative and interactive website to promote health and well-being, aligned with SDG 3.',
      skills: 'HTML, CSS, JavaScript',
    },
    {
      title: 'UI Design for E-care',
      image: project2,
      description: 'Developed a high-fidelty prototype with Figma for a system that automates the traditional book keeping system of medical records.',
      skills: 'Figma',
    },
    
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Skills:</strong> {project.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;