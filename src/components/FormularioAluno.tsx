import React from "react";
import BotãoVoltar from "../Utilidades/ButtonVoltar";
import "../styles/FormularioAluno.css"

const FormularioAluno = () => {
  return (
    <div className="formulario-container">
      <h1>Cadastro</h1>

      <div className="grupo-campos">
        <div className="card-aluno">
          <h2>Aluno</h2>
          <label>Nome</label>
          <input type="text" />
          <label>CPF</label>
          <input type="text" />
          <label>Matrícula</label>
          <input type="text" />
        </div>

        <div className="card-responsavel">
          <h2>Responsável</h2>
          <label>Nome</label>
          <input type="text" />
          <label>Telefone</label>
          <input type="text" />
        </div>
      </div>
      <button className="btn-cadastrar">Cadastrar</button>
      <BotãoVoltar></BotãoVoltar>
    </div>
  );
};

export default FormularioAluno;
