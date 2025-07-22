import React, { useState } from "react";  
import "../styles/Pesquisar.css" 
import Listagem from "./Listagem";


const Pesquisar = () => {
  const [serieSelecionada, setSerieSelecionada] = useState("");
  const [periodo, setPeriodo] = useState("")
  const [Nome, setNome] = useState("")
  const [Turma, setTurma] = useState("")


  return (
    <div  className="pesquisar-container">
        <h1>Pesquisar Ocorrência</h1>

      <div className="Card-pesquisar">
        <label htmlFor="Nome">Nome:</label>
        <input 
        type="String"
        id="Nome"
        value={Nome}
        onChange={(e) => setNome(e.target.value)} />
        
        <label htmlFor="Periodo">Periodo:</label>
        <select
          id="Periodo"
          value={periodo}
          onChange={(e) => setPeriodo(e.target.value)}
        >
          <option value="">Selecione</option>
          <option >Matutino</option>
          <option >Vespertino</option>
          <option >Noturno</option>
        </select>


        <label htmlFor="serie">Série:</label>
        <select
          id="serie"
          value={serieSelecionada}
          onChange={(e) => setSerieSelecionada(e.target.value)}
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
      
        <label htmlFor="Turma">Turma:</label>
        <select
        id="Turma"
        value={Turma}
        onChange={(e) => setTurma(e.target.value)}
        >
          <option value="">Selecione</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
        </select>
        {Nome && (
                <p>Nome:  <strong>{Nome}</strong></p>
              
        )}
        {periodo && (
                <p>Periodo selecionado: <strong>{periodo}</strong></p>
              )}


        {serieSelecionada && (
          <p>Série selecionada: <strong>{serieSelecionada} {Turma}</strong></p>
        
        )}
      </div>  
      <button className="Button">Buscar</button>
        
      <Listagem></Listagem>

    </div>
  );
};

export default Pesquisar;