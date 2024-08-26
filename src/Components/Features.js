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
              <Card.Title>Feature 1</Card.Title>
              <Card.Text>
                Description of Feature 1. Explain how this feature benefits the user or enhances the product.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Feature 2</Card.Title>
              <Card.Text>
                Description of Feature 2. Provide details about this feature and its advantages.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Feature 3</Card.Title>
              <Card.Text>
                Description of Feature 3. Highlight how this feature stands out and its impact on the user experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Features;
