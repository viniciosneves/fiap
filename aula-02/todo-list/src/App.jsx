import { useState } from 'react'
import './App.css'
import Titulo from './componentes/Titulo/Titulo';
import TodoItem from './componentes/TodoItem/TodoItem';

function App() {
  const [tarefas, setTarefas] = useState(["Aprender React", "Revisar JSX", "Construir uma App"]);

  const [novaTarefa, setNovatarefa] = useState('')

  function aoSubmeterFormulario (evento) {
    evento.preventDefault()
    setTarefas([...tarefas, novaTarefa])
    setNovatarefa('')
  }

  return (<div className="container">

      <Titulo>Tarefas</Titulo>

      <form onSubmit={aoSubmeterFormulario}>
        <input 
          type="text" 
          className='input-texto' 
          placeholder='Digite e pressione enter para cadastrar'
          value={novaTarefa}
          onChange={evento => setNovatarefa(evento.target.value)}
        />
      </form>


      {tarefas.map((tarefa, index) => (
          <TodoItem key={index} descricao={tarefa} />
      ))}

  </div>)
}

export default App
