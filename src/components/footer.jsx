import React from "react";
import { FaPatreon, FaGithub, FaDiscord } from "react-icons/fa";
import "./css/footer.css"; 

function Footer() {
    return (
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
    );
}
export default Footer;