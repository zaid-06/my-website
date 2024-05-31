// src/components/Skills.js
import React from 'react';
import { Container, ProgressBar } from 'react-bootstrap';
import './Projects.css'; // Import the CSS file

function Skills() {
  const skills = [
    { skill: 'Golang', proficiency: 80 },
    { skill: 'Langcahin Gemini Openai Llama2', proficiency: 75 },
    { skill: 'C Programming', proficiency: 80 },
    { skill: 'C++ Programming', proficiency: 70 },
    { skill: 'Data Structure', proficiency: 80 },
    { skill: 'Visual Basic', proficiency: 90},
    { skill: 'HTML/CSS', proficiency: 75 },
    { skill: 'Java Script', proficiency: 75 },
    { skill: 'Python', proficiency: 75 }, 
    { skill: 'DBMS SQL', proficiency: 65 }, 
    // { skill: '', proficiency: 65 },
    
    // { skill: 'Node.js', proficiency: 70 },

    { skill: 'Bootstrap', proficiency: 80 },
  ];

  return (
    <Container id="skills"  >
      <h2 className="projects-heading">Skills</h2>
      {skills.map((item, index) => (
        <div key={index} className="my-3">
          <h5>{item.skill}</h5>
          <ProgressBar now={item.proficiency} label={`${item.proficiency}%`} />
        </div>
      ))}
    </Container>
  );
}

export default Skills;
