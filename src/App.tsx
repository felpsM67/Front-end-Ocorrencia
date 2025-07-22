import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./components/Home";
import Formulario from "./components/FormularioOcorencia";
import Listagem from "./components/Listagem";
import Pesquisar from "./components/Pesquisar"
import VerDetalhes from "./components/VerDetalhes";
import FormularioAluno from "./components/FormularioAluno";
import FormularioProfessor from "./components/FormularioProfessor";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Formulario" element={<Formulario/>} />
        <Route path="/Listagem" element={<Listagem />} />
        <Route path="/Pesquisar" element={<Pesquisar/>} />
        <Route path="/VerDetalhes" element={<VerDetalhes />} />
        <Route path="/FormularioAluno" element={<FormularioAluno/>}/>
        <Route path="/FormularioProfessor" element={<FormularioProfessor/>}/>
      </Routes>
    </Router>
  );
};

export default App;

