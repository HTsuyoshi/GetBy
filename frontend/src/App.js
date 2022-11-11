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
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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
          </ Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
