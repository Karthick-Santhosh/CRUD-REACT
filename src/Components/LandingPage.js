

import React, { useState } from 'react';
import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap';
import './LandingPage.css'; 

const LandingPage = () => {
  const [showOperations, setShowOperations] = useState(false);

  return (
    <div className="landing-page">
      <Navbar bg="dark" variant="dark" expand="lg" className={!showOperations ? '' : 'd-none'}>
        <Container fluid>
        <Navbar.Brand href="/">
            <img src="/logo192.png" alt="Company Logo" className="logo-img" />
            <span className="logo-text">EMS</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-scroll" />
          <Navbar.Collapse id="navbar-scroll">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/features">Features</Nav.Link>
              <Nav.Link href="/pricing">Pricing</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="hero-section">
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <h1>Your Global Employee Data</h1>
            <p>
              Manage your global workforce with a flexible, cloud-based employee database management system.
              Build a secure, comprehensive, and scalable database to get a better understanding of your workforce.
            </p>
            <Button variant="danger" size="lg" onClick={() => setShowOperations(true)}>Get Started</Button>
          </Col>
          <Col md={6} className="hero-image">
            <img src="/zp-employeedatabasebanner2.png" alt="Employee Management" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      <Container fluid className={`operations-section ${showOperations ? 'show' : 'hide'}`}>
        <Row>
          <Col md={3} className="text-center">
            <Button variant="primary" size="lg" href="/add">Add Employee</Button>
          </Col>
          <Col md={3} className="text-center">
            <Button variant="danger" size="lg" href="/delete">Delete Employee</Button>
          </Col>
          <Col md={3} className="text-center">
            <Button variant="warning" size="lg" href="/update">Update Employee</Button>
          </Col>
          <Col md={3} className="text-center">
            <Button variant="info" size="lg" href="/get">Get Employee Details</Button>
          </Col>
        </Row>
      </Container>

      <Container fluid className="features-section">
        <Row>
          <Col md={4} className="text-center feature-item">
            <i className="bi bi-shield-lock"></i>
            <h3>Secure & Scalable</h3>
            <p>Build a secure database that grows with your business.</p>
          </Col>
          <Col md={4} className="text-center feature-item">
            <i className="bi bi-check-all"></i>
            <h3>Comprehensive Solutions</h3>
            <p>Manage everything from employee onboarding to performance tracking.</p>
          </Col>
          <Col md={4} className="text-center feature-item">
            <i className="bi bi-wrench-adjustable"></i>
            <h3>Flexible Tools</h3>
            <p>Customize the system to fit your unique business needs.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;

