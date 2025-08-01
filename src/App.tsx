import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./components/Home";
import Formulario from "./components/FormularioOcorencia";
import Pesquisar from "./components/Pesquisar"
import VerDetalhes from "./components/VerDetalhes";
import FormularioAluno from "./components/FormularioAluno";
import FormularioServidor from "./components/FormularioServidor";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Formulario" element={<Formulario/>} />
        <Route path="/Pesquisar" element={<Pesquisar/>} />
        <Route path="/VerDetalhes" element={<VerDetalhes />} />
        <Route path="/FormularioAluno" element={<FormularioAluno/>}/>
        <Route path="/FormularioServidor" element={<FormularioServidor/>}/>
      </Routes>
    </Router>
  );
};

export default App;

