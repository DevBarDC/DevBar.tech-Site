import React from "react";
import { Hero, Nav, AboutUs, Footer } from "./components/index";
import "./global.css";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Nav />
      <Hero />
      <main style={{ flex: 1 }}>
        <AboutUs />
        {/* ...other sections */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
