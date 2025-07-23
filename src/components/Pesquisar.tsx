import React, { useState, useEffect } from "react";  
import "../styles/Pesquisar.css" 
import Listagem from "./Listagem";
import axios from "axios";


interface ListagemProps {
  id: number
  nome: string;
  serie: string;
  Data: Date;
}

const Pesquisar = () =>  {
  const [lista, setlista] = useState<ListagemProps[]>([]);
  const [erro, setErro] = useState("");
  const [nome, setNome] = useState("");
  const [serieSelecionada, setSerieSelecionada] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [turma, setTurma] = useState("");
  const [carregando, setCarregando] = useState(false);


  useEffect(() => {
    axios.get<ListagemProps[]>("link da api")
      .then((response) => {
        setlista(response.data)
      })

      .catch((error) => {
        console.error("Erro ao buscar dados da API:", error)
        setErro("Falha ao listar Ocorrencias. Tente novamente mais tarde.")
      })
  }, []);

    const buscarAluno = () => {
    setCarregando(true);
    axios.get<ListagemProps[]>("https://sua-api.com/ocorrencias", {
      params: {
        nome,
        serie: serieSelecionada,
        periodo,
        turma
      }
    })
    .then((response) => {
      setlista(response.data);
    })
    .catch((error) => {
      console.error("Erro ao buscar ocorrências:", error);
      setErro("Falha ao buscar ocorrências. Tente novamente mais tarde.");
    })
    .finally(() => {
      setCarregando(false);
    });
  };

  return (
    <div className="pesquisar-container">
      <h1>Pesquisar Ocorrências</h1>

      <div className="Card-pesquisar">
        <label htmlFor="Nome">Nome:</label>
        <input
          id="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite o nome"
        />

        <label htmlFor="Periodo">Período:</label>
        <select
          id="Periodo"
          value={periodo}
          onChange={(e) => setPeriodo(e.target.value)}
        >
          <option value="">Selecione</option>
          <option value="Matutino">Matutino</option>
          <option value="Vespertino">Vespertino</option>
          <option value="Noturno">Noturno</option>
        </select>

        <label htmlFor="serie">Série:</label>
        <select
          id="serie"
          value={serieSelecionada}
          onChange={(e) => setSerieSelecionada(e.target.value)}
        >
          <option value="">Selecione</option>
          <option value="6º ano">6º ano</option>
          <option value="7º ano">7º ano</option>
          <option value="8º ano">8º ano</option>
          <option value="9º ano">9º ano</option>
          <option value="1º ano EM">1º ano EM</option>
          <option value="2º ano EM">2º ano EM</option>
          <option value="3º ano EM">3º ano EM</option>
        </select>

        <label htmlFor="Turma">Turma:</label>
        <select
          id="Turma"
          value={turma}
          onChange={(e) => setTurma(e.target.value)}
        >
          <option value="">Selecione</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>

        <button className="Button" onClick={buscarAluno}>Buscar</button>
      </div>

      <div className="resultado-listagem">
        {carregando ? (
          <p>Carregando...</p>
        ) : lista.length === 0 ? (
          <p>Nenhuma ocorrência encontrada</p>
        ) : (
          lista.map((aluno) => (
            <Listagem key={aluno.id} {...aluno} />
          ))
        )}
      </div>
    </div>
  );
};

export default Pesquisar;





