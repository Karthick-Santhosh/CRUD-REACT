// import React from 'react';
// import { Container, Row, Col, Button, Card } from 'react-bootstrap';
// import './LandingPage.css'; // Ensure this CSS file contains styling similar to Zoho's design

// const LandingPage = () => {
//   return (
//     <Container className="text-center landing-page">
//       {/* Header Section */}
//       <Row className="justify-content-md-center mt-5">
//         <Col md={8}>
//           <h1>Welcome to Employee Management System</h1>
//           <p>Streamline your workforce management with our all-in-one solution.</p>
//         </Col>
//       </Row>

//       {/* Key Features Section */}
//       <Row className="mt-5">
//         <Col md={4}>
//           <Card className="mb-4">
//             <Card.Body>
//               <Card.Title>Employee Self-Service</Card.Title>
//               <Card.Text>Empower employees to manage their own data, reducing administrative overhead.</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card className="mb-4">
//             <Card.Body>
//               <Card.Title>Performance Management</Card.Title>
//               <Card.Text>Track and optimize employee performance with integrated tools.</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card className="mb-4">
//             <Card.Body>
//               <Card.Title>Attendance Tracking</Card.Title>
//               <Card.Text>Monitor attendance and ensure compliance with company policies.</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* Benefits Section */}
//       <Row className="mt-5">
//         <Col md={12}>
//           <h2>Why Choose Our EMS?</h2>
//           <p>Increase productivity, enhance compliance, and improve employee engagement with our comprehensive solution.</p>
//         </Col>
//       </Row>

//       {/* Call-to-Action Section */}
//       <Row className="mt-5">
//         <Col md={12}>
//           <Button variant="primary" size="lg" href="/get-started">Get Started</Button>
//           <Button variant="secondary" size="lg" href="/learn-more" className="ms-3">Learn More</Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default LandingPage;

// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import './LandingPage.css';

// const LandingPage = () => {
//   return (
//     <Container fluid className="landing-page">
//       <Row className="align-items-center hero-section">
//         <Col md={6} className="text-center">
//           <h1>Your Global Employee Data</h1>
//           <p>
//             Manage your global workforce with a flexible, cloud-based employee database management system. 
//             Build a secure, comprehensive, and scalable database to get a better understanding of your workforce.
//           </p>
//           <Button variant="danger" size="lg" href="/get-started">Get Started</Button>
//         </Col>
//         <Col md={6} className="hero-image">
//           {/* You can include an image or graphical representation here */}
//           <img src="/zp-employeedatabasebanner2.png" alt="Employee Management" className="img-fluid" />
//         </Col>
//       </Row>
//       <Row className="features-section">
//         <Col md={4} className="text-center">
//           <h3>Secure & Scalable</h3>
//           <p>Build a secure database that grows with your business.</p>
//         </Col>
//         <Col md={4} className="text-center">
//           <h3>Comprehensive Solutions</h3>
//           <p>Manage everything from employee onboarding to performance tracking.</p>
//         </Col>
//         <Col md={4} className="text-center">
//           <h3>Flexible Tools</h3>
//           <p>Customize the system to fit your unique business needs.</p>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default LandingPage;

import React from 'react';
import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">Your Company Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-scroll" />
          <Navbar.Collapse id="navbar-scroll">
            <Nav className="me-auto">
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
            <Button variant="danger" size="lg" href="/get-started">Get Started</Button>
          </Col>
          <Col md={6} className="hero-image">
            <img src="/zp-employeedatabasebanner2.png" alt="Employee Management" className="img-fluid" />
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