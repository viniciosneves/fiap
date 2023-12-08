import { useState } from "react";

function TodoItem({ descricao }) {
    const [concluida, setConcluida] = useState(false);

    function manipularMudancaEstado() {
        console.log('mudei')
        setConcluida(!concluida)
    }

    return (
        <div>
            <label className="checkbox-container">
                <input
                    type="checkbox"
                    className="checkbox"
                    checked={concluida}
                    onChange={manipularMudancaEstado}
                />
                {descricao}
            </label>
        </div>
    );
}

export default TodoItem