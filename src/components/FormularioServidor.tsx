import React from "react";
import BotãoVoltar from "../Utilidades/ButtonVoltar";
import "../styles/FormularioServidor.css"

const FormularioServidor = () => {
  return (    
    <div className="formulario-container">
      <h1>Cadastro</h1>
    <p>Preencha todos os campos abaixo</p>
      <div className="grupo-campos">
        <div className="card-aluno">
          <h2>Servidor</h2>
          <label> Tipo de Servidor
            <br></br>
            <select>
              <option>Selecione</option>
              <option>Inspetor</option>
              <option>Professor</option>
            </select>
          </label>  
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

export default FormularioServidor;
