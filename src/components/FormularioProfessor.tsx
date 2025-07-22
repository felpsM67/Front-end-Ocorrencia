import React from "react";

const FormularioProfessor = () => {
    return (
        <div>
            <h1>Formulário Professor</h1>
            <form>
                <label>Nome:</label>
                <input type="text" name="nome" />
                <label>Senha:</label>
                <input  name="senha" />
            </form>
        </div>
    )
}

export default FormularioProfessor;