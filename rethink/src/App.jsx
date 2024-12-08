import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import GamificacaoColetaSeletiva from './pages/Game';
import Login from './pages/Login';
import Home from './pages/Home';
import MenuHandler from './layout/MainLayout';
import Locais from './pages/Locais';
import Testes from './pages/Testes';

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Router className="h-screen overflow-auto [::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      <Routes>
        <Route path="/" element={<MenuHandler open={openMenu} setOpen={setOpenMenu}/>}>
          <Route path="/home" element={<Home open={openMenu} setOpen={setOpenMenu}/>} />
          <Route path="game" element={<GamificacaoColetaSeletiva />} />
          <Route path="login" element={<Login />} />
          <Route path="locais" element={<Locais/>} />
          <Route path="teste" element={<Testes/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
