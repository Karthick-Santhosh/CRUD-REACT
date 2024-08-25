import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Alert, Spinner } from 'react-bootstrap';

const UpdateEmployee = () => {
  const [formData, setFormData] = useState({ id: '', phno: '', empAddress: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');


const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
  
    try {
      const response = await axios.put('http://localhost:8082/updateEmployee', {
        id: formData.id, // Ensure this matches the backend's expected field
        phno: formData.phno,
        empAddress: formData.empAddress
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      setSuccess('Employee updated successfully');
      setFormData({ id: '', phno: '', empAddress: '' });
    } catch (error) {
      console.error('Error updating employee', error);
      setError('Failed to update employee. Please check the details and try again.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Container>
      <h2 className="mb-4">Update Employee</h2>
      {success && <Alert variant="success">{success}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Employee ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Employee ID"
            value={formData.id}
            onChange={(e) => setFormData({ ...formData, id: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Phone Number"
            value={formData.phno}
            onChange={(e) => setFormData({ ...formData, phno: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address"
            value={formData.empAddress}
            onChange={(e) => setFormData({ ...formData, empAddress: e.target.value })}
            required
          />
        </Form.Group>

        <Button variant="warning" type="submit" disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Update Employee'}
        </Button>
      </Form>
    </Container>
  );
}

export default UpdateEmployee;
