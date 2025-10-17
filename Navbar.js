import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-users me-2"></i>
          Employee Portal
        </Link>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/' || location.pathname === '/dashboard' ? 'active' : ''}`} 
                to="/"
              >
                <i className="fas fa-home me-1"></i>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/form' ? 'active' : ''}`} 
                to="/form"
              >
                <i className="fas fa-user-plus me-1"></i>
                Employee Form
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;