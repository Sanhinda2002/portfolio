import React from 'react';
import sanhindaPhoto from '../assets/images/sanhinda.jpg';
import htmlLogo from '../assets/images/html-logo.png'; 
import cssLogo from '../assets/images/css-logo.png';
import jsLogo from '../assets/images/js-logo.png';
import reactLogo from '../assets/images/react-logo.png';
import javaLogo from '../assets/images/java-logo.png';
import pythonLogo from '../assets/images/python-logo.png';
import phpLogo from '../assets/images/php-logo.png';
import sqlLogo from '../assets/images/sql-logo.png';
import gitLogo from '../assets/images/git-logo.png';
import figmaLogo from '../assets/images/figma-logo.png';
import canvaLogo from '../assets/images/canva-logo.png';
import nodeLogo from '../assets/images/node-logo.png';
import westminsterLogo from '../assets/images/westminster-logo.png'; 
import iitLogo from '../assets/images/iit-logo.png';
import stAnnesLogo from '../assets/images/st-annes-logo.png';

const About = () => {
  const technicalSkills = [
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'React', logo: reactLogo },
    { name: 'Java', logo: javaLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'PHP', logo: phpLogo },
    { name: 'SQL', logo: sqlLogo },
    { name: 'Git', logo: gitLogo },
    { name: 'Figma', logo: figmaLogo },
    { name: 'Canva', logo: canvaLogo },
    { name: 'Node', logo: nodeLogo },
  ];

  const education = [
    {
      logo: westminsterLogo,
      institution: 'Informatics Institute of Technology Affiliated with the University of Westminster',
      degree: 'BEng (Hons) Software Engineering',
      duration: '2023-Present',
    },
    {
      logo: iitLogo,
      institution: 'Informatics Institute of Technology',
      degree: 'Foundation Certificate in Higher Education',
      duration: '2022-2023',
      extra: 'Distinction Pass',
    },
    {
      logo: stAnnesLogo,
      institution: 'St. Anne’s College, Kurunegala',
      degree: 'Secondary Education',
      duration: '2008-2021',
      extra: 'GCE Advanced Level (2021)',
      extra1: 'GCE Ordinary Level (2018)',
    },
  ];

  return (
    <section className="about">
      <div className="about-content">
        <img src={sanhindaPhoto} alt="Sanhinda Gimhan" className="about-photo" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            As a Software Engineering student at the University of Westminster with a solid foundation in computer science, I have cultivated a deep passion for coding and problem-solving. I am keen to apply my skills to design and implement robust, efficient software systems.
          </p>
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={skill.logo} alt={skill.name} className="skill-logo" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
          <h3>Personal Skills</h3>
          <ul>
            <li>Problem Solving</li>
            <li>Time Management</li>
            <li>Self Learning</li>
            <li>Teamwork</li>
            <li>Adaptability</li>
            <li>Creativity</li>
            <li>Leadership</li>
          </ul>
          <h3>Education</h3>
          <div className="education-list">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <img src={edu.logo} alt={edu.institution} className="education-logo" />
                <div className="education-details">
                  <p><strong>{edu.institution}</strong></p>
                  <p>{edu.degree}</p>
                  <p>{edu.duration}</p>
                  <p>{edu.extra}</p>
                  <p>{edu.extra1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;