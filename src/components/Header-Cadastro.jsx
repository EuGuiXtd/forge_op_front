/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { /*  useContext, */ useState, useEffect } from 'react';
import '../styles/components/Header-Cadastro.css';
import { useHistory } from 'react-router-dom';
import { requestRegister, setToken } from '../services/request';
/* import TokenContext from '../context/token.context'; */

function Header() {
  const history = useHistory();

  const redirect = (pathName) => {
    history.push(`/${pathName}`);
  };

  const [email, setEmail] = useState('');

  /*  const { setJwt } = useContext(TokenContext); */

  const [password, setPassword] = useState('');

  const [user, setUser] = useState('');

  const [isRegister, setIsRegister] = useState(false);

  const [failedTryRegister, setFailedTryRegister] = useState(false);

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handleUser = ({ target }) => {
    setUser(target.value);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const formValidation = () => {
    const regex = /\S+@\S+\.\S+/;
    const validEmail = regex.test(email);
    const numberPasswordValidation = 6;
    const numberUserValidation = 12;
    return !!(!validEmail
      || password.length < numberPasswordValidation
      || user.length > numberUserValidation
      || user === ''
      || password === ''
      || email === '');
  };

  const register = async (event) => {
    event.preventDefault();

    try {
      const { token } = await requestRegister({ email, password, user });

      setToken(token);

      localStorage.setItem('token', token);

      setIsRegister(true);
    } catch (error) {
      setFailedTryRegister(true);
      setIsRegister(false);
    }
  };
  useEffect(() => {
    setFailedTryRegister(false);
  }, [email, password, user]);

  if (isRegister) return redirect('home');
  return (
    <body>
      <div className="caixa__login">
        <h2>Cadastro</h2>
        <form>
          <div className="caixa__login-input">
            <input
              type="text"
              required
              name="user"
              value={ user }
              onChange={ handleUser }
            />
            <label>User</label>
          </div>
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
            (failedTryRegister)
              ? (
                <p className="error">
                  O endereço de e-mail ja possui cadastro.
                </p>
              )
              : null
          }
          <button
            onClick={ (event) => register(event) }
            disabled={ formValidation() }
          >
            Cadastrar
          </button>
        </form>
      </div>
    </body>
  );
}

export default Header;
