import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <div className="Header-left">
        <h1 className="Header-title">Chroma Banking</h1>
      </div>
      <div className="Header-right">
        
        <div className="Header-subtitle-box">
          <span className="Header-subtitle">How We Do Things</span>
        </div>

        <div className="Header-button-box">
          <button className="Header-button">Sign Up for a Credit Card</button>
        </div>

        <div className="Header-button-box">
          <button className="Header-button">Open an Account</button>
        </div>

      </div>
    </header>
  );
}

export default Header;