import React, { useState } from 'react';
import '../styles/Navbar.css'; // Importe seu arquivo CSS

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <a href="#" className="navbar-brand">Sistema de Ocorrencias</a>
            <div className="Navagação">
                <a href="#" className="nav-link">Início</a>
                <a href="#" className="nav-link">Sobre</a>  
                <a href="#" className="nav-link">Serviços</a>
                <a href="#" className="nav-link">Contato</a>
            </div>
            <button className="navbar-toggler" onClick={() => setIsOpen(!isOpen)}>
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    );
};

export default Navbar;