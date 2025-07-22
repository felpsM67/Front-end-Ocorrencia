import React from "react";

import BotãoVoltar from "../Utilidades/ButtonVoltar";
import "../styles/Login.css"

const Login = () => {

  return (
    <div className="Card">
      <div className="Container">
        <h1>Login Usuario</h1>
        <div>
            <input
            type="text"
            placeholder="Digite seu login"
            ></input>
            <input
            type="password"
            placeholder="Digite sua senha"
            ></input>
          <button>Entrar</button>
        <BotãoVoltar></BotãoVoltar>
        </div>
      </div>
    </div>
  )
}

export default Login;


