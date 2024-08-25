import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const DeleteEmployee = () => {
  const [empId, setEmpId] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await axios.delete(`http://localhost:8082/deleteEmployee/${empId}`); // Adjust URL as needed
      setSuccess('Employee deleted successfully');
      setEmpId('');
    } catch (error) {
      console.error('Error deleting employee', error);
      setError('Failed to delete employee. Please check the ID and try again.');
    }
  };

  return (
    <Container>
      <h2 className="mb-4">Delete Employee</h2>
      {success && <Alert variant="success">{success}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleDelete}>
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

        <Button variant="danger" type="submit">
          Delete Employee
        </Button>
      </Form>
    </Container>
  );
}

export default DeleteEmployee;
