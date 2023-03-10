import React/* , { useContext, useState } */ from 'react';
import '../styles/components/Header.css';

function Header() {
  return (
    <body className="header-container">
      <input
        className="email"
        type="email"
        placeholder="email"
        name="email"
      />
      <input
        className="password"
        type="text"
        placeholder="password"
        name="password"
      />

      <div className="buttons">
        <button
          type="button"
        >
          Enter
        </button>

        <button
          type="button"
        >
          Register
        </button>
      </div>
    </body>
  );
}

export default Header;
