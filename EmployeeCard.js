import React from 'react';

const EmployeeCard = ({ employees }) => {
  return (
    <div className="row">
      {employees.map((employee) => (
        <div key={employee.id} className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header bg-primary text-white">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="mb-0">
                  <i className="fas fa-user me-2"></i>
                  {employee.name}
                </h6>
                <span className="badge bg-light text-dark">ID: {employee.id}</span>
              </div>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <small className="text-muted">Email</small>
                <div>
                  <a href={`mailto:${employee.email}`} className="text-decoration-none">
                    {employee.email}
                  </a>
                </div>
              </div>
              
              <div className="mb-3">
                <small className="text-muted">Phone</small>
                <div>{employee.phone}</div>
              </div>
              
              <div className="mb-3">
                <small className="text-muted">Website</small>
                <div>
                  <a 
                    href={`http://${employee.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    {employee.website}
                  </a>
                </div>
              </div>
              
              <div>
                <small className="text-muted">Company</small>
                <div className="fw-bold">{employee.company?.name}</div>
              </div>
            </div>
            <div className="card-footer bg-light">
              <small className="text-muted">
                <i className="fas fa-map-marker-alt me-1"></i>
                {employee.address?.city}
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeCard;