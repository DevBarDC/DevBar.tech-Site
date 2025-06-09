import React, { useRef, useEffect, useState } from "react";
import { Nav, Footer } from "./components/index";
import "./global.css";

function App() {
  // --- HERO SECTION LOGIC ---
  const codeLines = [
    "const community = 'DevBar';",
    "const topic = 'Developers & Creators';",
    "function join() {",
    "  return 'Welcome to DevBar!';",
    "}",
    "console.log(join());"
  ];

  function getRandomPosition() {
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

  const heroRef = useRef(null);
  const [stars, setStars] = useState([]);
  const [typed, setTyped] = useState([""]);
  const [line, setLine] = useState(0);
  const [char, setChar] = useState(0);

  // Update stars on resize
  useEffect(() => {
    const updateStars = () => {
      const width = heroRef.current ? heroRef.current.offsetWidth : window.innerWidth;
      const count = Math.max(2, Math.floor(width / 100) * 2);
      setStars(Array.from({ length: count }, () => getRandomPosition()));
    };
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

  // --- END HERO SECTION LOGIC ---

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Nav />
      {/* HERO SECTION */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
        :root {
          --secondary-theme: #fffbe6;
        }
        .hero {
          z-index: 2;
          position: relative;
          width: 100%;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .stars {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--secondary-theme);
          position: absolute;
          z-index: 10;
          cursor: pointer !important;
          animation: blink 4s infinite;
          transition: box-shadow 0.2s, transform 0.2s, background 0.2s;
          outline: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .stars::after {
          content: '';
          display: block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: inherit;
        }
        .stars:hover, .stars:focus {
          box-shadow: 0 0 0 4px #7289da55, 0 0 6px 2px #b5e853;
          transform: scale(1.3);
          background: #b5e853;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .code-editor-mock {
          display: flex;
          flex-direction: column;
          width: 100%;
          min-width: 320px;
          max-width: 100%;
          min-height: 320px;
          background: #181b20;
          border-radius: 8px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.18);
          font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
          font-size: 1.15em;
          overflow: hidden;
          margin-left: 0;
          position: relative;
        }
        .editor-header {
          background: #23272a;
          padding: 12px 12px;
          min-height: 38px;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 6px;
          border-bottom: 1px solid #222;
          position: relative;
          box-sizing: border-box;
          z-index: 1;
        }
        .editor-row {
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 100%;
          flex: 1 1 0;
        }
        .editor-sidebar {
          width: 44px;
          background: #1e1f1f;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 8px 0;
          border-right: 1px solid #272d31;
          gap: 12px;
          height: 100%;
          margin-top: 0;
          box-sizing: border-box;
        }
        .editor-sidebar .sidebar-icon {
          width: 24px;
          height: 24px;
          margin: 8px 0;
          opacity: 0.7;
          transition: opacity 0.2s;
          filter: grayscale(1) brightness(1.5);
          cursor: pointer;
        }
        .editor-sidebar .sidebar-icon.active,
        .editor-sidebar .sidebar-icon:hover {
          opacity: 1;
          filter: none;
        }
        .editor-main {
          flex: 1 1 0;
          display: flex;
          flex-direction: column;
          min-width: 0;
          align-items: flex-start;
        }
        .editor-body-lines {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          background: #181b20;
        }
        .editor-body {
          padding: 12px 0 12px 0;
          color: #b5e853;
          min-height: 80px;
          white-space: pre-wrap;
          font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
          font-size: 1em;
          margin: 0;
        }
        .editor-line {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          width: 100%;
        }
        .editor-linenumber {
          display: inline-block;
          width: 2em;
          min-width: 2em;
          color: #444c56;
          text-align: right;
          margin-right: 16px;
          user-select: none;
          font-size: 0.98em;
          padding-left: 12px;
        }
        .editor-linecontent {
          display: inline-block;
          text-align: left;
          width: calc(100% - 2em);
        }
        .future-text {
          color: transparent;
          user-select: none;
        }
        .hero-content {
          position: relative;
          z-index: 100;
          display: flex;
          flex-direction: row;
          align-items: stretch;
          justify-content: center;
          width: 100%;
          height: 100%;
          min-height: 400px;
          gap: 48px;
          text-align: center;
          padding-left: 10vw;
          padding-right: 10vw;
          box-sizing: border-box;
        }
        .hero-left {
          max-width: 50%;
          flex: 1 1 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 220px;
          box-sizing: border-box;
          text-align: center;
          height: 100%;
          padding-left: 0;
        }
        .hero-right {
          max-width: 50%;
          flex: 1 1 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 220px;
          box-sizing: border-box;
          text-align: center;
          height: 100%;
          padding-right: 0;
        }
        @media (max-width: 900px) {
          .hero-content {
            flex-direction: column;
            gap: 24px;
            padding: 32px 5vw;
            align-items: stretch;
          }
          .hero-left,
          .hero-right {
            max-width: 100%;
            width: 100%;
            flex: 1 1 100%;
            padding: 0;
            margin: 0;
            align-items: center;
            justify-content: center;
            text-align: center;
            height: auto;
            box-sizing: border-box;
          }
          .hero-left {
            order: 1;
            margin-bottom: 0;
          }
          .hero-right {
            order: 2;
            margin-top: 0;
          }
          .code-editor-mock {
            width: 100%;
            min-width: 0;
            max-width: 100%;
            margin: 0;
          }
        }
      `}</style>
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

      {/* ABOUT US SECTION */}
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
          height: 420px;
          position: relative;
          z-index: 1;
          box-sizing: border-box;
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
          color: #b5e853;
          margin-bottom: 16px;
          letter-spacing: 1px;
        }
        .about-us-left-desc {
          color: #fff;
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
          color: #b5e853;
        }
        .about-us-right p {
          font-size: 1.2em;
          color: #fff;
          line-height: 1.6;
        }
        @media (max-width: 900px) {
          .about-us-container {
            flex-direction: column;
            min-height: unset;
            height: auto !important;
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
      <Footer />
    </div>
  );
}

export default App;
