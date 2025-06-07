import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './css/header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => setMenuOpen(!menuOpen);
    const handleLinkClick = () => setMenuOpen(false);

    return (
        <header>
            <nav className="navbar">
                <div className="navbar-brand">
                    <span className="logo">DevBar</span>
                    <button
                        className="navbar-toggle"
                        onClick={handleToggle}
                        aria-label="Toggle navigation"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
                    <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
                    <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                    <li><a href="#community" onClick={handleLinkClick}>Community</a></li>
                    <li><a href="#resources" onClick={handleLinkClick}>Resources</a></li>
                    <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;