import React from 'react';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style= {{ minHeight: '65vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
