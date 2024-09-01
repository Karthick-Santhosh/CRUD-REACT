import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Contact = () => {
  return (
    <Container fluid className="contact-page">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Here are our contact details:</p>
          <div className="contact-details">
            <p><strong>Email:</strong> karthick.sivadhanu@gmail.com</p>
            <p><strong>Phone:</strong> 91+ 8056378548</p>
            <p><strong>Address:</strong>Chennai, Tamil Nadu</p>
          </div>
          <div className="additional-content">
            <h2>More Information</h2>
            <p>We offer a range of services to help you manage your workforce efficiently. Feel free to reach out for any inquiries or support.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
