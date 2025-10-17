import React, { useState } from 'react';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prevState => ({
        ...prevState,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.designation.trim()) {
      newErrors.designation = 'Designation is required';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (!formData.salary.trim()) {
      newErrors.salary = 'Salary is required';
    } else if (isNaN(formData.salary) || parseFloat(formData.salary) <= 0) {
      newErrors.salary = 'Salary must be a valid positive number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setFormData({
          name: '',
          designation: '',
          location: '',
          salary: ''
        });
        setIsSubmitted(false);
      }, 2000);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      designation: '',
      location: '',
      salary: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-header bg-success text-white">
              <h3 className="mb-0">
                <i className="fas fa-user-plus me-2"></i>
                Employee Registration Form
              </h3>
            </div>
            
            <div className="card-body">
              {isSubmitted && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                  <i className="fas fa-check-circle me-2"></i>
                  Employee registered successfully!
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setIsSubmitted(false)}
                  ></button>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    <i className="fas fa-user me-1"></i>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter employee name"
                  />
                  {errors.name && (
                    <div className="invalid-feedback">
                      {errors.name}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="designation" className="form-label">
                    <i className="fas fa-briefcase me-1"></i>
                    Designation *
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.designation ? 'is-invalid' : ''}`}
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="Enter designation"
                  />
                  {errors.designation && (
                    <div className="invalid-feedback">
                      {errors.designation}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="location" className="form-label">
                    <i className="fas fa-map-marker-alt me-1"></i>
                    Location *
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter work location"
                  />
                  {errors.location && (
                    <div className="invalid-feedback">
                      {errors.location}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="salary" className="form-label">
                    <i className="fas fa-money-bill-wave me-1"></i>
                    Salary *
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">$</span>
                    <input
                      type="text"
                      className={`form-control ${errors.salary ? 'is-invalid' : ''}`}
                      id="salary"
                      name="salary"
                      value={formData.salary}
                      onChange={handleChange}
                      placeholder="Enter annual salary"
                    />
                    {errors.salary && (
                      <div className="invalid-feedback">
                        {errors.salary}
                      </div>
                    )}
                  </div>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button
                    type="button"
                    className="btn btn-outline-secondary me-md-2"
                    onClick={handleReset}
                  >
                    <i className="fas fa-redo me-1"></i>
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success"
                  >
                    <i className="fas fa-save me-1"></i>
                    Submit
                  </button>
                </div>
              </form>
            </div>
            
            <div className="card-footer text-muted">
              <small>Fields marked with * are required</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;