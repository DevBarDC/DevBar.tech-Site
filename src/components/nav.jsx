import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Outlet, Link } from "react-router-dom";

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => setMenuOpen(!menuOpen);
    const handleLinkClick = () => setMenuOpen(false);

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
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Meow+Script&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
                .navbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 32px;
                    height: 80px;
                    position: relative;
                    z-index: 10;
                    background: transparent;
                }
                .navbar-left {
                    display: flex;
                    align-items: center;
                    height: 100%;
                    flex: 1 1 0;
                }
                .navbar-right {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    flex: 1 1 0;
                    gap: 16px;
                    position: relative;
                }
                .navbar-brand {
                    display: flex;
                    align-items: center;
                    flex: 1 1 auto;
                }
                .logo {
                    font-family: 'Meow Script', cursive;
                    font-size: 2.5em;
                    font-weight: bold;
                    letter-spacing: 1px;
                    color: #b5e853;
                }
                .navbar-toggle {
                    display: none;
                    background: none;
                    border: none;
                    color: #fff;
                    font-size: 2em;
                    cursor: pointer;
                    margin-left: auto;
                    margin-right: 0;
                    z-index: 20;
                }
                .nav-links {
                    display: flex;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    align-items: center;
                    transition: right 0.3s;
                }
                .nav-links li {
                    margin: 0 8px;
                }
                .nav-links a {
                    color: #fff;
                    text-decoration: none;
                    padding: 12px 16px;
                    border-radius: 4px;
                    transition: background 0.2s;
                    font-weight: 500;
                }
                .nav-links a:hover {
                    background: #5865f2;
                    color: #fff;
                }
                @media (max-width: 768px) {
                    .nav-links a:hover {
                        background: transparent;
                        color: #7289da;
                    }
                }
                @media (max-width: 900px) {
                    .navbar {
                        padding: 0 16px;
                    }
                }
                @media (max-width: 768px) {
                    .navbar {
                        padding: 0 8px;
                    }
                    .navbar-brand {
                        flex: 0 0 auto;
                    }
                    .navbar-toggle {
                        display: block;
                        position: absolute;
                        right: 16px;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                    .nav-links {
                        display: none;
                        flex-direction: column;
                        position: absolute;
                        top: 64px;
                        right: 0;
                        background: #23272a;
                        width: 220px;
                        box-shadow: 0 8px 16px rgba(0,0,0,0.15);
                        border-radius: 0 0 0 10px;
                        align-items: flex-start;
                    }
                    .nav-links.active {
                        display: flex;
                    }
                    .nav-links li {
                        margin: 0;
                        width: 100%;
                        border-bottom: 1px solid #2c2f33;
                    }
                    .nav-links li:last-child {
                        border-bottom: none;
                    }
                    .nav-links a {
                        width: 100%;
                        padding: 16px 24px;
                    }
                }
                .mobile-menu-overlay {
                    position: fixed;
                    inset: 0;
                    width: 100vw;
                    height: 100vh;
                    background: rgba(24, 27, 32, 0.98);
                    z-index: 1 !important;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    pointer-events: all;
                }
                body.menu-open {
                    overflow: hidden;
                }
                .mobile-nav-links {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    width: 100vw;
                    text-align: center;
                }
                .mobile-nav-links li {
                    margin: 24px 0;
                }
                .mobile-nav-links a {
                    display: inline-block;
                    color: #fff;
                    font-size: 2em;
                    text-decoration: none;
                    font-weight: bold;
                    letter-spacing: 1px;
                    transition: 
                        color 0.2s,
                        background 0.2s,
                        box-shadow 0.2s,
                        transform 0.1s;
                    padding: 12px 36px;
                    border-radius: 8px;
                    background: transparent;
                    box-shadow: none;
                    margin: 0 0 8px 0;
                }
                .mobile-nav-links a:hover,
                .mobile-nav-links a:focus {
                    color: #7289da;
                    background: #23272a;
                    transform: translateY(-2px) scale(1.04);
                    box-shadow: 0 4px 24px 0 rgba(114,137,218,0.10);
                    outline: none;
                }
                .mobile-nav-links a.join-btn {
                    background: linear-gradient(90deg, #7289da 0%, #99aab5 100%);
                    color: #fff !important;
                    box-shadow: 0 4px 24px 0 rgba(114,137,218,0.18);
                    border: none;
                    font-weight: bold;
                    letter-spacing: 1.5px;
                    font-size: 2.1em;
                    padding: 10px 30px;
                    margin-top: 16px;
                    margin-bottom: 8px;
                    transition: 
                        background 0.2s,
                        color 0.2s,
                        box-shadow 0.2s,
                        transform 0.1s;
                }
                .mobile-nav-links a.join-btn:hover,
                .mobile-nav-links a.join-btn:focus {
                    background: linear-gradient(90deg, #99aab5 0%, #7289da 100%);
                    color: #fff;
                    box-shadow: 0 6px 32px 0 rgba(114,137,218,0.25);
                    transform: translateY(-3px) scale(1.06);
                    outline: none;
                }
            `}</style>
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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/partners" onClick={handleLinkClick}>Partners</Link></li>
                            <li>
                                <a
                                    href="https://discord.gg/V9mqtpHy8p"
                                    onClick={handleLinkClick}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Join us
                                </a>
                            </li>
                        </ul>
                        {/* Fullscreen overlay for mobile menu */}
                        {menuOpen && (
                            <div className="mobile-menu-overlay">
                                <ul className="mobile-nav-links">
                                    <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
                                    <li>
                                        <Link
                                            to="/partners"
                                            className=""
                                            onClick={handleLinkClick}
                                        >
                                            Partners
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            href="https://discord.gg/V9mqtpHy8p"
                                            className="join-btn"
                                            onClick={handleLinkClick}
                                            target="_blank"
                                            rel="noopener noreferrer"
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
        </>
    );
}

export default Nav;