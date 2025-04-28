import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isLoggedIn, getUser, logout } from '../context/AuthContext';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();

  if (!isLoggedIn()) {
    return null;
  }
  const user = getUser();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-brand">Twitter Clone</h1>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to={`/user/${user.id}`} className="nav-link">Profile</Link>
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </div>
    </nav>
  );
}
