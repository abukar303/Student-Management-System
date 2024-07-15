import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to Our Student Management System Page</h1>
      <p>Manage your students easily and efficiently.</p>
      <div className="navigation-links">
        <Link to="/add-student" className="btn btn-primary">Add New Student</Link>
        {/* <Link to="/student-list" className="btn btn-secondary">View Student List</Link> */}
      </div>
    </div>
  );
};

export default Dashboard;
