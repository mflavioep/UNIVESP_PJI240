import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//import de páginas
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

//essas duas talvez sejam retiradas do projeto:
import Profile from './pages/Profile'


function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} /> 
                <Route path="/sobre" element={<Sobre />} /> 
                <Route path="/contato" element={<Contato />} /> 
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}


export default AppRoutes
