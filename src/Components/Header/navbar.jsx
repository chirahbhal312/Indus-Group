import React from 'react';
import './navbar.css';
import logo from './logo.png';
import { FaSearch, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" height={60} width={100} />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li className="dropdown">
          <a href="/company">Company <FaChevronDown className="dropdown-icon" /></a>
          <ul className="dropdown-menu">
            <li><a href="/company/about-us">About Us</a></li>
            <li><a href="/company/leadership">Leadership</a></li>
            <li><a href="/company/equal-opportunity">Equal Opportunity</a></li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="/businesses">Businesses <FaChevronDown className="dropdown-icon" /></a>
          <ul className="dropdown-menu">
            <li><a href="/businesses/b2b(Intergrated logistics)">b2b(Intergrated logistics)</a></li>
            <li><a href="/businesses/Myskills(upskilling solutions)">Myskills(upskilling solutions)</a></li>
            <li><a href="/businesses/Enterprise(enterprise solutions)">Enterprise(enterprise solutions)</a></li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="/tools">Tools <FaChevronDown className="dropdown-icon" /></a>
          <ul className="dropdown-menu">
            <li><a href="/tools/Rate discovery">Rate discovery</a></li>
            <li><a href="/tools/Tracking">Tracking</a></li>
            <li><a href="/tools/HS code">HS code</a></li>
            <li><a href="/tools/Finder">Finder</a></li>
            <li><a href="/tools/Currency converter">Currency converter</a></li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="/knowledge-centre">Knowledge Centre <FaChevronDown className="dropdown-icon" /></a>
          <ul className="dropdown-menu">
            <li><a href="/knowledge-centre/Blogs">Blogs</a></li>
            <li><a href="/knowledge-centre/News and Updates">News and Updates</a></li>
            <li><a href="/knowledge-centre/Events">Events</a></li>
            <li><a href="/knowledge-centre/Notification Centre">Notification Centre</a></li>
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