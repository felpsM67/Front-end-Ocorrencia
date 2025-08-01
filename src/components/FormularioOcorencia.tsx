import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonVoltar from "../Utilidades/ButtonVoltar";
import type { ChangeEvent, FormEvent } from "react";
import '../styles/FormularioOcorrencia.css'
import Navbar from "../Utilidades/NavBar";


const FormularioOcorrencia = () => {
  const [formulario, setFormulario] = useState({
    serie: "",
    turma: "",
    nomeAluno: "",
    tipoOcorrencia: "",
    dataOcorrido: "",
    descricao: "",
    responsavel: "",
  });

  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://sua-api.com/ocorrencias", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formulario),
      });

      if (response.ok) {
        alert("Ocorrência registrada com sucesso!");
        navigate("/pagina-de-sucesso");
      } else {
        alert("Erro ao registrar ocorrência.");
      }
    } catch (err) {
      console.error(err);
      alert("Falha ao conectar com o servidor.");
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="formulario-ocorrencia">
        <h1>Registro de Ocorrência</h1>
        <p>Digite os dados para registrar:</p>
        <div className="Card-Ocorrenia">
          <h2>Ocorrencia</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Série
              <select
                name="serie"
                value={formulario.serie}
                onChange={handleChange}
                required
              >
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
              Turma
              <select
                name="turma"
                value={formulario.turma}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
              </select>
            </label>

            <label>
              Nome do aluno
              <input
                name="nomeAluno"
                value={formulario.nomeAluno}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Tipo da ocorrência
              <select
                name="tipoOcorrencia"
                value={formulario.tipoOcorrencia}
                onChange={handleChange}
                required
              >
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
              <input
                type="date"
                name="dataOcorrido"
                value={formulario.dataOcorrido}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Descrição detalhada
              <textarea
                name="descricao"
                rows={2}
                value={formulario.descricao}
                onChange={handleChange}
              />
            </label>

            <label>
              Responsável pelo registro
              <input
                type="text"
                name="responsavel"
                value={formulario.responsavel}
                onChange={handleChange}
                required
              />
            </label>

            
          </form>
          
        </div>
        <button type="submit">Registrar</button>
        <ButtonVoltar />
      </div>
    </div>
  );
};

export default FormularioOcorrencia;
