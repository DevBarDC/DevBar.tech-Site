import React from "react";

function AboutUs() {
    return (
        <>
            <style>{`
                .about-us-container {
                    display: flex;
                    flex-direction: row;
                    align-items: stretch;
                    justify-content: center;
                    width: 100%;
                    max-width: 1100px;
                    margin: 20px auto;
                    background: #23272a;
                    border-radius: 10px;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.12);
                    overflow: hidden;
                    min-height: 320px;
                    position: relative;
                    z-index: 1;
                }
                .about-us-left {
                    flex: 0 0 260px;
                    background: #181b20;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    border-right: 1px solid #292d33;
                    padding: 32px 16px;
                }
                .about-us-logo {
                    font-family: 'Meow Script', cursive;
                    font-size: 2.5em;
                    font-weight: bold;
                    color: #7289da;
                    margin-bottom: 16px;
                    letter-spacing: 1px;
                }
                .about-us-left-desc {
                    color: #b5e853;
                    font-size: 1.1em;
                    text-align: center;
                    margin-top: 8px;
                }
                .about-us-right {
                    flex: 1 1 0;
                    padding: 32px 32px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    color: #fff;
                    text-align: right;
                    align-items: flex-end;
                }
                .about-us-right h1 {
                    font-size: 2.2em;
                    margin-bottom: 18px;
                    color: #fff;
                }
                .about-us-right p {
                    font-size: 1.2em;
                    color: #b5e853;
                    line-height: 1.6;
                }
                @media (max-width: 900px) {
                    .about-us-container {
                        flex-direction: column;
                        min-height: unset;
                    }
                    .about-us-left, .about-us-right {
                        border: none;
                        padding: 24px 5vw;
                        width: 100%;
                        min-width: 0;
                    }
                    .about-us-left {
                        border-bottom: 1px solid #292d33;
                        align-items: center;
                    }
                }
            `}</style>
            <div className="about-us-container">
                {/* Left Side */}
                <div className="about-us-left">
                    <div className="about-us-logo">DevBar</div>
                    <div className="about-us-left-desc">
                        A community for developers, designers, and tech enthusiasts.
                    </div>
                </div>
                {/* Right Side */}
                <div className="about-us-right">
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
        </>
    );
}

export default AboutUs;