import React, { useState } from "react";
import axios from "axios";
import BotãoVoltar from "../Utilidades/ButtonVoltar";
import "../styles/FormularioAluno.css";
import Navbar from "../Utilidades/NavBar";


const FormularioAluno = () => {
  const [formulario, setFormulario] = useState({
    nomeAluno: "",
    cpf: "",
    matricula: "",
    nomeResponsavel: "",
    telefone: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({ ...prev, [name]: value }));
  };

  const handleCadastrar = async () => {
    const { nomeAluno, cpf, matricula } = formulario;

    if (!nomeAluno || !cpf || !matricula) {
      alert("Preencha todos os campos obrigatórios do aluno.");
      return;
    }

    try {
      const response = await axios.post(
        "https://sua-api.com/alunos/cadastro",
        formulario
      );
      alert("Aluno cadastrado com sucesso!");
      setFormulario({
        nomeAluno: "",
        cpf: "",
        matricula: "",
        nomeResponsavel: "",
        telefone: ""
      });
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Falha ao cadastrar aluno. Tente novamente.");
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="formulario-container">
        <h1>Cadastro</h1>

        <div className="grupo-campos">
          <div className="card-aluno">
            <h2>Aluno</h2>
            <label>Nome</label>
            <input
              type="text"
              name="nomeAluno"
              value={formulario.nomeAluno}
              onChange={handleChange}
            />
            <label>CPF</label>
            <input
              type="text"
              name="cpf"
              value={formulario.cpf}
              onChange={handleChange}
            />
            <label>Matrícula</label>
            <input
              type="text"
              name="matricula"
              value={formulario.matricula}
              onChange={handleChange}
            />
          </div>

          <div className="card-responsavel">
            <h2>Responsável</h2>
            <label>Nome</label>
            <input
              type="text"
              name="nomeResponsavel"
              value={formulario.nomeResponsavel}
              onChange={handleChange}
            />
            <label>Telefone</label>
            <input
              type="text"
              name="telefone"
              value={formulario.telefone}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className="btn-cadastrar" onClick={handleCadastrar}>
          Cadastrar
        </button>

        <BotãoVoltar />
      </div>
    </div>
  );
};

export default FormularioAluno;

