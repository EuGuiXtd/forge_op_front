/* eslint-disable jsx-a11y/label-has-associated-control */
import React/* , { useContext, useState } */ from 'react';
import '../styles/components/Header-Login.css';
import { useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();
  const handleClick = (pathName) => {
    history.push(`/${pathName}`);
  };
  return (
    <body>
      <div className="caixa__login">
        <h2>Login</h2>
        <form>
          <div className="caixa__login-input">
            <input type="text" required />
            <label>Email</label>
          </div>
          <div className="caixa__login-input">
            <input type="password" required />
            <label>Senha</label>
          </div>
          <button>
            Entrar
          </button>
          <button onClick={ () => { handleClick('cadastro'); } }>
            Cadastro
          </button>
        </form>
      </div>
    </body>
  );
}
export default Header;
