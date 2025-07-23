import React from "react";

import { useNavigate } from "react-router-dom";
import BotãoVoltar from "../Utilidades/ButtonVoltar";
import "../styles/FormularioOcorrencia.css"


const Formulario = () => {
  const navigate = useNavigate();
  return (
  <div className="formulario-ocorrencia">
    <h2>Registro de Ocorrência</h2>
    <p>Digite os dados para Registrar Ocorrencia</p>
    <div className="Card-Ocorrenia">
      <form>
        <label>
          Série:
          <select required>
            <option value="">Selecione</option>
            <option>6º ano</option>
            <option>7º ano</option>
            <option>8º ano</option>
            <option>9º ano</option>
            <option>1º ano EM</option>
            <option>2º ano EM</option>
            <option>3º ano EM</option>
          </select>
        </label>
        <label>
          Turma:
          <select required>
            <option>Selecione</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </select>
        </label>
        
        <label>
          Nome do aluno:
          {/* <select required>
            <option value="">Selecione</option>
            <option>1º aluno</option>
            <option>2º aluno</option>
            <option>3º aluno</option>
            <option>4º aluno</option>
            <option>5º aluno</option>
          </select> */}
          <input></input>
        </label>
        <label>
          Tipo da ocorrência:
          <select required>
            <option value="">Selecione</option>
            <option>Atraso</option>
            <option>Falta</option>
            <option>Indisciplina</option>
            <option>Desempenho acadêmico</option>
            <option>Desrespeito à autoridade</option>
            <option>Outros</option>
          </select>
        </label>
        <label>
          Data do ocorrido
          <input type="date" placeholder="Data" />
        </label>

        <label>
          Descrição detalhada:
          <textarea rows={2} />
        </label>

        <label>
          Responsável pelo registro:
          <input type="text"required />
        </label>
    
      </form>

      </div>
      <button type="submit">Registrar</button>
      <BotãoVoltar></BotãoVoltar>
  </div>
);

};

export default Formulario;

