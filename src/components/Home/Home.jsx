import React from 'react';
import { Box, Paper, Button } from '@mui/material';
import { AccountCircle, WorkOutline, Group } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleUsersClick = () => {
    navigate('/users');
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Our Employee Management System</h1>
          <p>Effortlessly manage and streamline your workforce with ease.</p>
          <Button
            variant="contained"
            color="primary"
            className="hero-button"
            onClick={handleUsersClick}
          >
            Users
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <Box className="features-section" display="grid" gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
        <h2>Why Choose Our Employee Management System?</h2>
        <Paper className="feature-card">
          <AccountCircle className="feature-icon" />
          <h3>Employee Profiles</h3>
          <p>Manage detailed profiles for each employee, including personal and work information.</p>
        </Paper>
        <Paper className="feature-card">
          <WorkOutline className="feature-icon" />
          <h3>Task Management</h3>
          <p>Assign tasks, track progress, and ensure deadlines are met efficiently.</p>
        </Paper>
        <Paper className="feature-card">
          <Group className="feature-icon" />
          <h3>Team Collaboration</h3>
          <p>Foster teamwork and improve communication with dedicated collaboration tools.</p>
        </Paper>
      </Box>
    </div>
  );
};

export default HomePage;
