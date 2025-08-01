import React, { useState, useRef, useEffect } from 'react';
import '../styles/Navbar.css';
// import doutilizador from '../assents/do-utilizador-1.png'
import doUtilizador from '../assents/do-utilizador-1.png'

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <header className="cp-navbar">
      
      <p className='Texto'>Sistema De Ocorrencias</p>
      <div className="cp-navbar__center">
      </div>

      <div className="cp-navbar__right" ref={ref}>
        <button
          className="cp-avatar-btn"
          onClick={() => setOpen((prev) => !prev)}
          aria-haspopup="true"
          aria-expanded={open}
        >
          <img  className='cp-avatar' src={doUtilizador} ></img>
        </button>

        {open && (
          <div className="cp-dropdown">
            <a href="#" className="cp-dropdown__item">👤 Meu perfil</a>
            <a href="#" className="cp-dropdown__item">⚙️ Configurações</a>
            <a href="#" className="cp-dropdown__item">🚪 Sair</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

