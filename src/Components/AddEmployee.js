import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const AddEmployee = () => {
  const [formData, setFormData] = useState({ id: '', phno: '', empAddress: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError('');
  //   setSuccess('');
    
  //   try {
  //     await axios.post('http://localhost:8082/addEmployee', formData); 
  //     setSuccess('Employee added successfully');
  //     setFormData({ id: '', phno: '', empAddress: '' });
  //   } catch (error) {
  //     console.error('Error adding employee', error);
  //     setError('Failed to add employee. Please try again.');
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    try {
      const response = await axios.post('http://localhost:8082/addEmployee', formData);
      
      if (response.status === 200) {
        setSuccess('Employee added successfully');
        setFormData({ id: '', phno: '', empAddress: '' });
      } else {
        setError('Failed to add employee. Please try again.');
      }
    } catch (error) {
      console.error('Error adding employee', error.response ? error.response.data : error.message);
      setError('Failed to add employee. Please try again.');
    }
  };

  return (
    <Container>
      <h2 className="mb-4">Add Employee</h2>
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

        <Button variant="primary" type="submit">
          Add Employee
        </Button>
      </Form>
    </Container>
  );
}

export default AddEmployee;
