import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Card, Alert } from 'react-bootstrap';

const GetEmployee = () => {
  const [empId, setEmpId] = useState('');
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGet = async (e) => {
    e.preventDefault();
    setError('');
    setEmployee(null);
    setLoading(true);

    try {
      const response = await axios.get(`http://localhost:8082/getEmployee/${empId}`); 
      setEmployee(response.data);
    } catch (error) {
      console.error('Error fetching employee details', error);
      setError('Failed to fetch employee details. Please check the ID and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <h2 className="mb-4">Get Employee Details</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleGet}>
        <Form.Group className="mb-3">
          <Form.Label>Employee ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Employee ID"
            value={empId}
            onChange={(e) => setEmpId(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="info" type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Get Employee Details'}
        </Button>
      </Form>

      {employee && (
        <Card className="mt-4">
          <Card.Body>
            <Card.Title>Employee ID: {employee.id}</Card.Title>
            <Card.Text>
              <strong>Phone:</strong> {employee.phno}<br />
              <strong>Address:</strong> {employee.empAddress}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default GetEmployee;
