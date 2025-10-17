import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EmployeeDashboard from './components/EmployeeDashboard';
import EmployeeForm from './components/EmployeeForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<EmployeeDashboard />} />
            <Route path="/dashboard" element={<EmployeeDashboard />} />
            <Route path="/form" element={<EmployeeForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;