import React from "react";
import { FaPatreon, FaGithub, FaDiscord } from "react-icons/fa";

function Footer() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
                .footer {
                    background-color: #181b20;
                    color: #b5e853;
                    text-align: center;
                    height: 80px;
                    box-sizing: border-box;
                    width: 100%;
                }
                .footer-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                }
                .social-icons {
                    list-style: none;
                    display: flex;
                    justify-content: center;
                    margin: 16px 10px;
                    padding: 0;
                }
                .social-icons a {
                    color: #fff;
                    text-decoration: none;
                    margin: 0 6px;
                    font-size: 1em;
                }
            `}</style>
            <div className="footer-section-start">
                <footer className="footer">
                    <div className="footer-content">
                        <p>&copy; 2025 DevBar. All rights reserved.</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaDiscord />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaPatreon />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
export default Footer;