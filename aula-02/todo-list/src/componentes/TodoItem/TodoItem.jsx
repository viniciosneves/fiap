import { useState } from "react";

function TodoItem({ tarefa, aoAlternarConclusao }) {

    return (
        <div>
            <label className="checkbox-container">
                <input
                    type="checkbox"
                    className="checkbox"
                    checked={tarefa.concluida}
                    onChange={aoAlternarConclusao}
                />
                {tarefa.descricao}
            </label>
        </div>
    );
}

export default TodoItem