import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import BotãoVoltar from "../Utilidades/ButtonVoltar";
import "../styles/FormularioServidor.css";
import Navbar from "../Utilidades/NavBar";

const FormularioServidor = () => {
  const [formulario, setFormulario] = useState({
    Tipo: "",
    Nome: "",
    CPF: "",
    Senha: "",
  });

  const handleChange = (e: ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const resposta = await axios.post("https://sua-api.com/cadastrar", formulario);
      console.log("Cadastro realizado:", resposta.data);
      alert("Servidor cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar servidor:", error);
      alert("Erro ao tentar cadastrar.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="formulario-container">
        <h1>Cadastro</h1>
        <p>Preencha todos os campos abaixo</p>
        <div className="grupo-campos">
          <div className="card-aluno">
            <h2>Servidor</h2>
            <label> Tipo de Servidor
              <br />
              <select name="Tipo" value={formulario.Tipo} onChange={handleChange}>
                <option value="">Selecione</option>
                <option value="Inspetor">Inspetor</option>
                <option value="Professor">Professor</option>
              </select>
            </label>
            <label>Nome</label>
            <input type="text" name="Nome" value={formulario.Nome} onChange={handleChange} />
            <label>CPF</label>
            <input type="text" name="CPF" value={formulario.CPF} onChange={handleChange} />
            <label>Senha</label>
            <input type="password" name="Senha" value={formulario.Senha} onChange={handleChange} />
          </div>
        </div>
        <button className="btn-cadastrar" onClick={handleSubmit}>Cadastrar</button>
        <BotãoVoltar />
      </div>
    </div>
  );
};

export default FormularioServidor;
