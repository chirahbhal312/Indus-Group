import React, { useState } from 'react';
import './navbar.css';
import logo from './logo.png';
import { FaSearch, FaChevronDown, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <FaBars />
        </div>
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li className="dropdown">
          <Link to="/company">Company <FaChevronDown className="dropdown-icon" /></Link>
          <ul className="dropdown-menu">
            <li><Link to="/company/about-us">About Us</Link></li>
            <li><Link to="/company/leadership">Leadership</Link></li>
            <li><Link to="/company/equal-opportunity">Equal Opportunity</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="#">Businesses <FaChevronDown className="dropdown-icon" /></Link>
          <ul className="dropdown-menu">
            <li><Link to="/Indusb2b">B2B (Integrated Logistics)</Link></li>
            <li><Link to="/Indusenterprises">Indus Enterprises</Link></li>
            <li><Link to="/MySkillsAcademy">My Skills Academy</Link></li>
          </ul>
        </li>
        
        {/* <li className="dropdown">
          <Link to="#">Businesses <FaChevronDown className="dropdown-icon" /></Link>
          <ul className="dropdown-menu">
            <li><Link to='/Indusb2b' className='routing'>B2B (Integrated logistics)</Link></li>
            <li><Link to='/Indusenterprises' className='routing'>Indus Enterprises</Link></li>
            <li><Link to='/MySkillsAcademy' className='routing'>My Skills Academy</Link></li>
          </ul>
        </li> */}
        <li className="dropdown">
          <Link to="/tools">Tools <FaChevronDown className="dropdown-icon" /></Link>
          <ul className="dropdown-menu">
            <li><Link to="/tools/Rate-discovery">Rate Discovery</Link></li>
            <li><Link to="/tools/Tracking">Tracking</Link></li>
            <li><Link to="/tools/HS-code">HS Code</Link></li>
            <li><Link to="/tools/Finder">Finder</Link></li>
            <li><Link to="/tools/Currency-converter">Currency Converter</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="/knowledge-centre">Knowledge Centre <FaChevronDown className="dropdown-icon" /></Link>
          <ul className="dropdown-menu">
            <li><Link to="/knowledge-centre/Blogs">Blogs</Link></li>
            <li><Link to="/knowledge-centre/News-and-Updates">News and Updates</Link></li>
            <li><Link to="/knowledge-centre/Events">Events</Link></li>
            <li><Link to="/knowledge-centre/Notification-Centre">Notification Centre</Link></li>
          </ul>
        </li>
      </ul>
      <div className="search-bar">
        <input type="search" placeholder="Search" />
        <button type="submit"><FaSearch /></button>
      </div>
    </nav>
  );
};

export default Navbar;
