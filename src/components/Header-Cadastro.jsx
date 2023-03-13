/* eslint-disable jsx-a11y/label-has-associated-control */
import React/* , { useContext, useState } */ from 'react';
import '../styles/components/Header-Cadastro.css';

function Header() {
  return (
    <body>
      <div className="caixa__login">
        <h2>Cadastro</h2>
        <form>
          <div className="caixa__login-input">
            <input type="text" required />
            <label>User</label>
          </div>
          <div className="caixa__login-input">
            <input type="text" required />
            <label>Email</label>
          </div>
          <div className="caixa__login-input">
            <input type="password" required />
            <label>Senha</label>
          </div>
          <button>
            Cadastrar
          </button>
        </form>
      </div>
    </body>
  );
}

export default Header;
