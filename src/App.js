import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const containerStyles = {
  padding: "20px",
  backgroundColor: "#f0f0f0",
  border: "1px solid #ccc",
  margin: "1rem",
  borderRadius: "8px",
};

const hostDataStyles = {
  padding: "10px",
  backgroundColor: "#e0e0e0",
  border: "1px solid #bbb",
  borderRadius: "4px",
  marginTop: "24px",
};

const Dashboard = () => (
  <div style={containerStyles}>
    <h1>Dashboard</h1>
    <p>Welcome to the MFE FT Host Application.</p>
  </div>
);

const Analytics = () => (
  <div style={containerStyles}>
    <h1>Analytics</h1>
    <p>Here are some analytics for the FT application.</p>
  </div>
);

const App = ({ userName = 'Guest' }) => {
    return (
        <div style={containerStyles}>
            <h1>MFE FT Host Application</h1>
            <div style={hostDataStyles}>
                <p><strong>Host Data:</strong></p>
                <p>User Name: {userName}</p>
                <p>Host Application: FT</p>
                <p>Version: 1.0.0</p>   
            </div>
            <nav>
            <ul>
                <li>
                <Link to="">Dashboard</Link>
                </li>
                <li>
                <Link to="analytics">Analytics</Link>
                </li>
            </ul>
            </nav>
    
            <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="analytics" element={<Analytics />} />
            </Routes>
        </div>
    );
};
export default App;