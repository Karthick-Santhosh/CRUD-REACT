import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Features.css'; 

const Features = () => {
  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">Our Features</h2>
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>visibility</Card.Title>
              <Card.Text>
              Increase employee data visibility across regions
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Security</Card.Title>
              <Card.Text>
              Guarantee secure data management and employee privacy
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Customization</Card.Title>
              <Card.Text>
              Customize and manage your workforce in your preferred way
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Features;
