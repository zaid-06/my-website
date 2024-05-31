// src/components/About.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Projects.css'; // Import the CSS file


function AboutMe() {
  return (
    // <p>faf fa</p>
    <>
    
     <Container id="about" >
     <h2 className="projects-heading">About</h2>

      <Row>
        <Col md={4}>
          <Image src="/images/myPhoto.jpg" roundedCircle fluid />
         
            <h4 className=" align-text-bottom  align-middle">Zaid Ali</h4>
       
        </Col>
        <Col md={8}>
            <p>"Hi, my name is Zaid Ali. I'm from Jehanabad, Bihar. I recently completed my Bachelor of Computer Applications (BCA) from Magadh University in 2023, graduating with 81.38% marks. I have a strong passion for coding and have worked on several projects using various programming languages and technologies. My technical skills include proficiency in C, C++, Go, React, Python, and JavaScript, among others. During my studies, I developed a solid foundation in software development and gained hands-on experience through my projects. I am particularly interested in software development and am eager to apply my skills in a professional setting.</p>
          {/* <p>Hello! I'm [Your Name], a passionate developer with expertise in [your skills]. I have worked on various projects during my student life, gaining experience in [mention your domains, e.g., web development, mobile apps, etc.]. I love coding and am always eager to learn new technologies and improve my skills.</p>
          <p>In my free time, I enjoy [mention hobbies or other interests]. I believe in continuous learning and am always looking for new challenges to tackle.</p> */}
        </Col>
      </Row>
    </Container>
    </>

   
  );
}

export default AboutMe; 
