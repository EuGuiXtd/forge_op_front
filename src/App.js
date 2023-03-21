/* eslint-disable react/jsx-no-constructed-context-values */
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import React, { useContext/* , useState, useEffect */ } from 'react';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import TokenContext from './context/token.context';

function App() {
  const { jwt } = useContext(TokenContext);
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Login } />
      <Route exact path="/cadastro" component={ Cadastro } />
      <Route exact path="/home">
        {jwt === '' ? <Redirect to="/" /> : <Home />}
      </Route>
    </BrowserRouter>
  );
}

export default App;
