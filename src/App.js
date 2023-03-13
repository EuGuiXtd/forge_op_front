import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Login } />
      <Route exact path="/cadastro" component={ Cadastro } />
    </BrowserRouter>
  );
}

export default App;
