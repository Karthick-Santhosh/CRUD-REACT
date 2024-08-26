import axios from 'axios';

const API_URL = 'http://localhost:8082'; 

export const addEmployee = (employee) => axios.post(`${API_URL}/addEmployee`, employee);
export const getEmployees = () => axios.get(`${API_URL}/getAllEmployees`);
export const getEmployeeById = (id) => axios.get(`${API_URL}/getEmployee/${id}`);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/deleteEmployee/${id}`);
export const updateEmployee = (employee) => axios.put(`${API_URL}/updateEmployee`, employee);
export const addMultipleEmployees = (employees) => axios.post(`${API_URL}/addMultipleEmployees`, employees);
