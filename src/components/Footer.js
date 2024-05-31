// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-4">
      <Container className="py-3">
        <Row>
          <Col md={6}>
            <p>&copy; 2024 YourName. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-right">
            <a href="https://github.com/yourusername" className="text-white mx-2">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" className="text-white mx-2">LinkedIn</a>
            <a href="https://twitter.com/yourusername" className="text-white mx-2">Twitter</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
