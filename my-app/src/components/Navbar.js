import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="logo">Rosie Griffiths, PhD</Link>
                <div className="nav-links">
                    <Link to="/dataviz" className="nav-link">Data Viz | </Link>
                    <Link to="/shiny" className="nav-link">Shiny | </Link>
                    <Link to="/robotics" className="nav-link">Robotics | </Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                </div>
                <button className="mobile-menu" onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <div className={`mobile-nav ${isMobileMenuOpen ? '' : 'hidden'}`}>
                <Link to="/dataviz" className="nav-link">Data Viz</Link>
                <Link to="/shiny" className="nav-link">Shiny</Link>
                <Link to="/robotics" className="nav-link">Robotics</Link>
                <Link to="/blog" className="nav-link">Blog</Link>
            </div>
        </nav>
    );
};

export default Navbar;