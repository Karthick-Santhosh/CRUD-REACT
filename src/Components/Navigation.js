import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';  // Import your custom CSS

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar mb-4">
      <div className="container">
        <NavLink className="navbar-brand custom-brand" to="/">EMS</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link custom-link" to="/add">Add Employee</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link custom-link" to="/delete">Delete Employee</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link custom-link" to="/update">Update Employee</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link custom-link" to="/get">Get Employee Details</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
