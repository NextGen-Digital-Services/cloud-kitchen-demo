import { useState } from "react";
import "../styles/main.css";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      
      <div className="logo">
        The Cloud Kitchen
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div 
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

    </nav>
  );
};

export default Navbar;