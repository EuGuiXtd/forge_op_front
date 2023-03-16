import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Login } />
      <Route exact path="/cadastro" component={ Cadastro } />
      <Route exact path="/home" component={ Home } />
    </BrowserRouter>
  );
}

export default App;
