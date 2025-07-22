import React from "react";
import { useNavigate    } from "react-router-dom";
import "../styles/ButtonVoltar.css"


const BotãoVoltar = () => {
    const navigate = useNavigate();
    return (
    <div >
        <button  className="back"onClick={() =>navigate (-1)}>Voltar</button>
    </div>
    )
}

export default BotãoVoltar; 