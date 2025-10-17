import React from 'react';

const EmployeeTable = ({ employees }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>
                    <span className="badge bg-primary">{employee.id}</span>
                  </td>
                  <td>
                    <strong>{employee.name}</strong>
                  </td>
                  <td>
                    <a href={`mailto:${employee.email}`} className="text-decoration-none">
                      {employee.email}
                    </a>
                  </td>
                  <td>{employee.phone}</td>
                  <td>
                    <a 
                      href={`http://${employee.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      {employee.website}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;