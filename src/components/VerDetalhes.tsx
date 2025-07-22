import React from "react";
import BotãoVoltar from "../Utilidades/ButtonVoltar";
import ButtonOpcoes from "../Utilidades/ButtonOpcoes";
import "../styles/VerDetalhes.css"

const VerDetalhes = () => {
  return (
    <div  className="detalhes-container">
      <div>
        <p> 
          <b>Serie:</b> 1º ano EM
        </p>
        <p>
          <b>Nome do aluno:</b> João da Silva
        </p>
        <p>
          <b>Tipo:</b> Indisciplina
        </p>
        <p>
          <b>Data do Ocorrido:</b> 29/08/2025
        </p>
        <p>
          <b>Descrição:</b> Interrompeu a aula diversas vezes com brincadeiras.
        </p>
        <p>
          <b>Responsável:</b> Prof. Ana
        </p>
        <ButtonOpcoes></ButtonOpcoes>
        <br></br>
        <p>
          <b>Serie:</b> 1º ano EM
        </p>
        <p>
            <b>Nome do aluno:</b> João da Silva
        </p>
        <p>
          <b>Tipo:</b> Falta
        </p>
        
        <p>
          <b>Data do Ocorrido:</b> 29/08/2025
        </p>
        <p>
          <b>Descrição:</b> Faltou diversas vezes na aula
        </p>
        <p>
          <b>Responsável:</b> Cordenação
        </p>
        <ButtonOpcoes></ButtonOpcoes>
        <BotãoVoltar></BotãoVoltar>
      </div>
    </div>
  );
};

export default VerDetalhes;