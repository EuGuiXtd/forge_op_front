/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { /* useContext, */ useState, useEffect } from 'react';
import '../styles/components/Header-Login.css';
import { useHistory } from 'react-router-dom';
import { requestLogin, setToken } from '../services/request';
/* import TokenContext from '../context/token.context'; */

function Header() {
  const history = useHistory();

  const redirect = (pathName) => {
    history.push(`/${pathName}`);
  };

  /* const { setJwt } = useContext(TokenContext); */

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [isLoged, setIsLoged] = useState(false);

  const [failedTryLogin, setFailedTryLogin] = useState(false);

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const login = async (event) => {
    event.preventDefault();

    try {
      const { token } = await requestLogin({ email, password });

      setToken(token);

      localStorage.setItem('token', token);
      /*  setJwt(token); */

      setIsLoged(true);
    } catch (error) {
      setFailedTryLogin(true);
      setIsLoged(false);
    }
  };

  useEffect(() => {
    setFailedTryLogin(false);
  }, [email, password]);

  if (isLoged) redirect('home');
  return (
    <body>
      <div className="caixa__login">
        <h2>Login</h2>
        <form>
          <div className="caixa__login-input">
            <input
              type="text"
              required
              name="email"
              value={ email }
              onChange={ handleEmail }
            />
            <label>Email</label>
          </div>
          <div className="caixa__login-input">
            <input
              type="password"
              required
              name="password"
              value={ password }
              onChange={ handlePassword }
            />
            <label>Senha</label>
          </div>
          {
            (failedTryLogin)
              ? (
                <p className="error">
                  Senha ou e-mail não encontrado.
                </p>
              )
              : null
          }
          <button
            onClick={ (event) => login(event) }
          >
            Entrar
          </button>
          <button onClick={ () => { redirect('cadastro'); } }>
            Cadastro
          </button>
        </form>
      </div>
    </body>
  );
}
export default Header;
