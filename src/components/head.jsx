import React, { useRef, useEffect, useState } from "react";
import "./css/head.css";

const codeLines = [
    "const community = 'DevBar';",
    "const topic = 'Developers & Creators';",
    "function join() {",
    "  return 'Welcome to DevBar!';",
    "}",
    "console.log(join());"
];

// Calculate star count: 2 stars per 100px of hero width, minimum 2
function getStarCount(width) {
    return Math.max(2, Math.floor(width / 100) * 2);
}

function getRandomPosition() {
    // Avoid the center area (where the text is) by skipping 35%-65% vertically
    let top, left;
    do {
        top = Math.random() * 100;
    } while (top > 35 && top < 65);
    left = Math.random() * 100;
    return {
        top: top + '%',
        left: left + '%'
    };
}

function Head() {
    const heroRef = useRef(null);
    const [stars, setStars] = useState([]);

    // Typing animation for code editor
    const [typed, setTyped] = useState([""]);
    const [line, setLine] = useState(0);
    const [char, setChar] = useState(0);

    // Function to update stars based on hero width
    const updateStars = () => {
        const width = heroRef.current ? heroRef.current.offsetWidth : window.innerWidth;
        const count = Math.max(2, Math.floor(width / 100) * 2);
        setStars(Array.from({ length: count }, () => getRandomPosition()));
    };

    useEffect(() => {
        updateStars();
        window.addEventListener("resize", updateStars);
        return () => window.removeEventListener("resize", updateStars);
    }, []);

    // Typing animation effect
    useEffect(() => {
        if (line < codeLines.length) {
            if (char < codeLines[line].length) {
                const timeout = setTimeout(() => {
                    setTyped(prev => {
                        const newLines = [...prev];
                        newLines[line] = (newLines[line] || "") + codeLines[line][char];
                        return newLines;
                    });
                    setChar(char + 1);
                }, 40);
                return () => clearTimeout(timeout);
            } else {
                setTyped(prev => [...prev, ""]);
                setLine(line + 1);
                setChar(0);
            }
        }
    }, [char, line]);

    return (
        <section className="hero" ref={heroRef}>
            {/* Stars */}
            {stars.map((pos, i) => (
                <span
                    key={i}
                    className="stars"
                    style={{ top: pos.top, left: pos.left, position: "absolute", cursor: "pointer" }}
                    tabIndex={0}
                />
            ))}
            <div className="hero-content">
                <div className="hero-left">
                    <h1 style={{ fontSize: "3em", marginBottom: "0.5em", color: "#fff" }}>Welcome to DevBar</h1>
                    <p style={{ fontSize: "1.5em", color: "#fff" }}>Connect, Create, Collaborate.</p>
                </div>
                <div className="hero-right">
                    <div className="code-editor-mock">
                        <div className="editor-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                            <span className="editor-title">devbar.js</span>
                        </div>
                        <div className="editor-row">
                            <div className="editor-sidebar">
                                <span className="sidebar-icon active" title="Explorer">📁</span>
                                <span className="sidebar-icon" title="Search">🔍</span>
                                <span className="sidebar-icon" title="Source Control">🌿</span>
                                <span className="sidebar-icon" title="Run & Debug">🐞</span>
                                <span className="sidebar-icon" title="Extensions">🧩</span>
                            </div>
                            <div className="editor-main">
                                {/* Removed VS Code-like tab bar at the very top */}
                                <div className="editor-body-lines">
                                    <pre className="editor-body">
                                        {codeLines.map((lineText, i) => {
                                            if (i < line) {
                                                return (
                                                    <div key={i} className="editor-line">
                                                        <span className="editor-linenumber">{i + 1}</span>
                                                        <span className="editor-linecontent">{lineText}&nbsp;</span>
                                                    </div>
                                                );
                                            }
                                            if (i === line) {
                                                return (
                                                    <div key={i} className="editor-line">
                                                        <span className="editor-linenumber">{i + 1}</span>
                                                        <span className="editor-linecontent">
                                                            <span>{typed[i] || ""}</span>
                                                            <span className="editor-cursor" />
                                                            <span className="future-text">
                                                                {lineText.slice((typed[i] || "").length)}
                                                            </span>
                                                            &nbsp;
                                                        </span>
                                                    </div>
                                                );
                                            }
                                            return (
                                                <div key={i} className="editor-line">
                                                    <span className="editor-linenumber">{i + 1}</span>
                                                    <span className="editor-linecontent">&nbsp;</span>
                                                </div>
                                            );
                                        })}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Head;