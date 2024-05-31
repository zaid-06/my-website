// src/components/Projects.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Projects.css'; // Import the CSS file
// import 'styles.css';

function Projects() {
    const projectList = [
        { title: 'Text to SQL Query using Gemini', description: 'Converts natural language text to SQL queries and fetches database responses.', link: 'https://github.com/zaid-06/sql-gemini' },
        { title: 'Invoice Extractor', description: 'Extracts and answers questions about information from images using Gemini LLM.', link: 'https://github.com/zaid-06/medical-chatbot-and-invoice-extractor.git' },
        { title: 'Medical ChatBot', description: 'Answers questions based on a medical PDF trained in ChromaDB.', link: 'https://github.com/zaid-06/medical-chatbot-and-invoice-extractor.git' },
    
      ]; 
      const cProject = [
        { title: 'Calculator', description  : 'GUI calculator for basic arithmetic and conversions, developed in Visual Basic.', link: 'https://github.com/zaid-06/calculator.git' },
        { title: 'Banking management System', description: 'CLI-based system for managing bank accounts and transactions in C.', link: 'https://github.com/zaid-06/banking-management-system.git' },
        { title: 'Daily Expenses System', description: 'Manages daily expenses with add, display, update, and delete functionalities in C.', link: 'https://github.com/zaid-06/EXPENSES-SYSTEM.git' },
        { title: 'Data Structure & Algo', description: 'Implemented linked lists, various sorting algorithms, stacks, queues, trees, etc.', link: 'https://github.com/zaid-06/Data-Structure-algorithms-.git' },
        { title: 'Ludo Game', description: 'A work-in-progress GUI-based Ludo game for up to four players using Visual Basic.', link: 'https://github.com/zaid-06/Ludo.git' },
      
      ];
      const goProject = [
        { title: 'CRUD api with book Store', description: 'Built CRUD API in Golang and used React with Axios to manage and display data.', link: 'https://github.com/zaid-06/Book-Store-Management-System-With-CRUD-API.git' },
        { title: 'LeetCode Problem Solutions', description: 'Solved problem on LeetCode using Golang', link: 'https://leetcode.com/u/zaid__ali/' },
      
      ];

  return (
    <Container id="projects">
      <h2 className="projects-heading">Projects</h2>
      <h4>Gemini, Langchain, llama2, Python</h4>
      <Row>
        {projectList.map((project, index) => (
          <Col key={index} md={4} className="mb-5">
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Link href={project.link}>View Project</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h4>C, C++, VisualBasic</h4>
      <Row>
      
        {cProject.map((project, index) => (
          <Col key={index} md={4} className="mb-5">
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Link href={project.link}>View Project</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h4>Golang</h4>
      <Row>
        {goProject.map((project, index) => (
          <Col key={index} md={4} className="mb-5">
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Link href={project.link}>View Project</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    
    </Container>
  );
}

export default Projects;
