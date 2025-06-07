import React from "react";
import "./css/about-us.css";

function AboutUs() {
    return (
        <div className="about-us">
            <div className="about-us-content" style={{ padding: "2rem", maxWidth: 700, margin: "0 auto", color: "#fff" }}>
                <h1>About Us</h1>
                <p>
                    DevBar is a welcoming Discord community for developers, designers, and tech enthusiasts of all levels.
                    Our mission is to foster collaboration, learning, and networking in a friendly and inclusive environment.
                </p>
                <p>
                    Whether you’re a beginner or a seasoned pro, you’ll find channels for coding help, project feedback, tech news, and casual conversation.
                    We host regular events, share resources, and support each other’s growth in the world of technology.
                </p>
                <p>
                    Join us and become part of a vibrant, supportive community where you can learn, share, and connect!
                </p>
            </div>
        </div>
    );
}

export default AboutUs;