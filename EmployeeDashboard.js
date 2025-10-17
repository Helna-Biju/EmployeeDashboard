import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard';
import EmployeeTable from './EmployeeTable';

const EmployeeDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('table');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setEmployees(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) {
    return (
      <div className="container mt-4">
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger" role="alert">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-primary">
          <i className="fas fa-tachometer-alt me-2"></i>
          Employee Dashboard
        </h1>
        
        <div className="btn-group" role="group">
          <button
            type="button"
            className={`btn ${viewMode === 'table' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setViewMode('table')}
          >
            <i className="fas fa-table me-1"></i>
            Table View
          </button>
          <button
            type="button"
            className={`btn ${viewMode === 'card' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setViewMode('card')}
          >
            <i className="fas fa-th-large me-1"></i>
            Card View
          </button>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search employees..."
            />
          </div>
        </div>
        <div className="col-md-6 text-end">
          <span className="badge bg-secondary">
            Total Employees: {employees.length}
          </span>
        </div>
      </div>

      {viewMode === 'table' ? (
        <EmployeeTable employees={employees} />
      ) : (
        <EmployeeCard employees={employees} />
      )}
    </div>
  );
};

export default EmployeeDashboard;