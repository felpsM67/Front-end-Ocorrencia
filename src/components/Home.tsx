import React from "react";
import { Link } from "react-router-dom";
import '../styles/Home.css'
import Navbar from "../Utilidades/NavBar";


const Home = () => {

  return (
    <div>
      <Navbar />

      <div className="container">
        
        <h1> Ocorrencia</h1>

        <nav className="navegacao">
          <Link to="/Formulario"> Registrar Ocorrência</Link>
          <Link to="/Pesquisar"> Pesquisar Ocorrencia</Link>
          <Link to="/FormularioAluno"> Cadastro De Aluno</Link>
          <Link to="/FormularioProfessor">Cadastro De Professor</Link>
        </nav>
      </div>
    </div>
  );
};

export default Home;


