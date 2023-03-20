/* eslint-disable react/jsx-no-constructed-context-values */
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';

function App() {
  const logado = localStorage.getItem('token');
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Login } />
      <Route exact path="/cadastro" component={ Cadastro } />
      <Route exact path="/home">
        {!logado ? <Redirect to="/" /> : <Home />}
      </Route>
    </BrowserRouter>
  );
}

export default App;
