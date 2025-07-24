import React from "react";
import { Link } from "react-router-dom";
import ButtonVoltar from "../Utilidades/ButtonVoltar";
import "../styles/Listagem.css";

interface Ocorrencia {
  id: number;
  nome: string;
  serie: string;
  data: string;
}

interface Props {
  ocorrencias: Ocorrencia[];
}

const Listagem: React.FC<Props> = ({ ocorrencias }) => {
  return (
    <div className="lista-container">
      <h2>Ocorrências</h2>
      <div className="Card-listagem">
        {ocorrencias.map((item) => (
          <div key={item.id} className="ocorrencia-card">
            <strong>{item.nome}</strong>
            <p><b>Série:</b> {item.serie}</p>
            <p><b>Data:</b> {new Date(item.data).toLocaleDateString("pt-BR")}</p>
            <Link to={`/VerDetalhes/${item.id}`}>Ver Detalhes</Link>
          </div>
        ))}
      </div>
      <ButtonVoltar />
    </div>
  );
};

export default Listagem;
