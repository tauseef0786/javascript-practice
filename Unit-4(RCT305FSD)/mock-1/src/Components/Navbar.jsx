import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/product" className="navbar-link">Product Page</Link>
      <Link to="/addproduct" className="navbar-link">Add Product</Link>
    </nav>
  );
}

export default Navbar;
