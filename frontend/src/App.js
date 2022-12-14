import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './views/Home/Home.js';
import PaginaBuscarAjuda from './views/PaginaBuscarAjuda/PaginaBuscarAjuda.js';
import PaginaAjudar from './views/PaginaAjudar/PaginaAjudar.js';
import PaginaDica from './views/PaginaDica/PaginaDica.js';
import PaginaLogin from './views/PaginaLogin/PaginaLogin.js';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PaginaEsqueciSenha from  './views/PaginaEsqueciSenha/PaginaEsqueciSenha.js';
import PaginaCadastreSe from  './views/PaginaCadastreSe/PaginaCadastreSe.js';
import PaginaValidacao from  './views/PaginaValidacao/PaginaValidacao.js';
import PaginaAtendimento from  './views/PaginaAtendimento/PaginaAtendimento.js';
import PaginaMapa from  './views/PaginaMapa/PaginaMapa.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buscarAjuda" element={<PaginaBuscarAjuda />} />
            <Route path="/ajudar" element={<PaginaAjudar />} />
            <Route path="/paginaDica" element={<PaginaDica />} />
            <Route path="/login" element={<PaginaLogin />} />
            <Route path="/esqueciSenha" element={<PaginaEsqueciSenha />} />
            <Route path="/cadastreSe" element={<PaginaCadastreSe />} />
            <Route path="/validacao" element={<PaginaValidacao />} />
            <Route path="/atendimento" element={<PaginaAtendimento />} />
            <Route path="/mapa" element={<PaginaMapa />} />
          </ Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
