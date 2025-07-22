import React from "react";
import { Link } from "react-router-dom";
import ButtonVoltar from "../Utilidades/ButtonVoltar";
import "../styles/Listagem.css";

const Listagem = () => {
  return (
      <div className="lista-container">
        <h2> Ocorrencias</h2>
        <div className="Card-listagem">
          <div className="ocorrencia-card">
            <strong>João da Silva</strong>
            <p>
              <b>Série:</b> 7º ano A
            </p>
            <p>
              <b>Data:</b> 29/07/2025
            </p>
            <Link to="/VerDetalhes">Ver Detalhes</Link>
          </div>

          <div className="ocorrencia-card">
            <strong>Maria Oliveira</strong>
            <p>
              <b>Série:</b> 8º ano B
            </p>
            <p>
              <b>Data:</b> 29/07/2025
            </p>
            <Link to="/VerDetalhes">Ver Detalhes</Link>
          </div>

          <div className="ocorrencia-card">
            <strong>Carlos Souza</strong>
            <p>
              <b>Série:</b> 9º ano C
            </p>
            <p>
              <b>Data:</b> 29/07/2025
            </p>
            <Link to="/VerDetalhes">Ver Detalhes</Link>
          </div>

          <div className="ocorrencia-card">
            <strong>Carlos Souza</strong>
            <p>
              <b>Série:</b> 9º ano C
            </p>
            <p>
              <b>Data:</b> 29/07/2025
            </p>
            <Link to="/VerDetalhes">Ver Detalhes</Link>
          </div>

          <div className="ocorrencia-card">
            <strong>Carlos Souza</strong>
            <p>
              <b>Série:</b> 9º ano C
            </p>
            <p>
              <b>Data:</b> 29/07/2025
            </p>
            <Link to="/VerDetalhes">Ver Detalhes</Link>
          </div>
          <div className="ocorrencia-card">
            <strong>Carlos Souza</strong>
            <p>
              <b>Série:</b> 9º ano C
            </p>
            <p>
              <b>Data:</b> 29/07/2025
            </p>
            <Link to="/VerDetalhes">Ver Detalhes</Link>
          </div>
          
        </div>
        <ButtonVoltar></ButtonVoltar>
        </div>
  );
};

export default Listagem;
