import React from "react";
import BotãoVoltar from "../Utilidades/ButtonVoltar";
import "../styles/FormularioProfessor.css"

const FormularioProfessor = () => {
  return (
    <div className="formulario-container">
      <h1>Cadastro</h1>
    <p>Preencha todos os campos abaixo</p>
      <div className="grupo-campos">
        <div className="card-aluno">
          <h2>Professor</h2>
          <label>Nome</label>
          <input type="text" />
          <label>CPF</label>
          <input type="text" />
          <label>Senha</label>
          <input type="password" />
        </div>
      </div>
      <button className="btn-cadastrar">Cadastrar</button>
      <BotãoVoltar></BotãoVoltar>
    </div>
  );
};

export default FormularioProfessor;
