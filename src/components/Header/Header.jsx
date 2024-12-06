import React from 'react';
import { Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  let { isAuthenticated } = useSelector((state) => state.auth);

  const handleLoginClick = () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      alert("You are already logged in! Clear authToken(localStorage) to login again");
    } else {
      navigate('/login');
    }
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("authToken");
    window.location.reload();
    
  };

  return (
    <Box className="header-container">
      <div className="heading-container">
        <Link to='/'>
          <h1 className="header-title">EmployWise</h1>
        </Link>
      </div>
      <div className="heading-button">
        {isAuthenticated ? (
          <Button
            className="login-button"
            variant="contained"
            color="secondary"
            onClick={handleLogoutClick}
          >
            Logout
          </Button>
        ) : (
          <Button
            className="login-button"
            variant="contained"
            color="secondary"
            onClick={handleLoginClick}
          >
            Login
          </Button>
        )}
      </div>
    </Box>
  );
};

export default Header;
