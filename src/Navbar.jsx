import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div><Link to="/">Mohan Lal Badoli</Link></div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/biography">Biography</Link>
        <Link to="/vision">My Guiding Lights</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
