import React, { useState } from "react";
import "../styles/ButtonOpcoes.css"

function ButtonOpcoes() {
    const[menu, setMenu] = useState(false);
    return(
        <div className="dropdown-menu">
            <button onClick={() => setMenu(!menu)}>⋮</button>
            {menu && (
                <div className="opcoes-menu">
                    <button  className="dropdown-item">Editar</button>
                    <button  className="dropdown-item">Excluir</button>
                </div>
            )}
        </div>
    );
};
export default ButtonOpcoes;

