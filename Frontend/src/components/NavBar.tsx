import React, { useState } from "react";
import logo from "../assets/logo.png";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner container">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <img src={logo} alt="Shree Renuka Roadlines" className="logo" />
          <div className="brand-meta">
            <span className="brand-title">Shree Renuka</span>
            <span className="brand-sub">Roadlines</span>
          </div>
        </a>

        <nav className={`site-nav ${open ? "open" : ""}`}>
          <a href="#home" className="nav-btn">
            Home
          </a>
          <a href="#about" className="nav-btn">
            About
          </a>
          <a href="#services" className="nav-btn">
            Services
          </a>
          <a href="#contact" className="nav-btn cta">
            Contact Us
          </a>
        </nav>

        <button
          className={`hamburger ${open ? "is-active" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}