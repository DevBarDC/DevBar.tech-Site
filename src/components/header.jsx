import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './css/header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => setMenuOpen(!menuOpen);
    const handleLinkClick = () => setMenuOpen(false);

    // Prevent body scroll and add a class for overlay when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('menu-open');
        } else {
            document.body.style.overflow = '';
            document.body.classList.remove('menu-open');
        }
        return () => {
            document.body.style.overflow = '';
            document.body.classList.remove('menu-open');
        };
    }, [menuOpen]);

    return (
        <header>
            <nav className="navbar">
                <div className="navbar-left">
                    <span className="logo">DevBar</span>
                </div>
                <div className="navbar-right">
                    <button
                        className="navbar-toggle"
                        onClick={handleToggle}
                        aria-label="Toggle navigation"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
                        <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
                        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                        <li><a href="#about" onClick={handleLinkClick}>Join us</a></li>
                    </ul>
                    {/* Fullscreen overlay for mobile menu */}
                    {menuOpen && (
                        <div className="mobile-menu-overlay">
                            <ul className="mobile-nav-links">
                                <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
                                <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                                <li>
                                    <a
                                        href="#about"
                                        className="join-btn"
                                        onClick={handleLinkClick}
                                    >
                                        Join us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;