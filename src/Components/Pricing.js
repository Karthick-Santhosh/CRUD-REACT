import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Pricing.css'; 

const Pricing = () => {
  return (
    <Container fluid className="pricing-page">
      <Row className="justify-content-center text-center">
        <Col md={12}>
          <h1>Our Pricing Plans</h1>
          <p>Choose the plan that best suits your needs. All prices are in Rupees (₹).</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Basic Plan</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">₹999 per month</Card.Subtitle>
              <Card.Text>
                Ideal for individuals or small teams. Includes basic features and support.
              </Card.Text>
              <Button variant="primary">Sign Up</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Standard Plan</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">₹1999 per month</Card.Subtitle>
              <Card.Text>
                Perfect for growing teams with additional features and premium support.
              </Card.Text>
              <Button variant="primary">Sign Up</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Premium Plan</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">₹2999 per month</Card.Subtitle>
              <Card.Text>
                Comprehensive plan with all features and priority support. Best for larger teams and businesses.
              </Card.Text>
              <Button variant="primary">Sign Up</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Pricing;
