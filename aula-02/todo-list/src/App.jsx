import { useEffect, useState } from 'react'
import './App.css'
import Titulo from './componentes/Titulo/Titulo';
import TodoItem from './componentes/TodoItem/TodoItem';

function App() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    console.log('Componente iniciado. Será que tem tarefas?')
    const tarefasLocalStorage = localStorage.getItem('tarefas')
    if (tarefasLocalStorage) {
      console.log('temos tarefas, vamos iniciar nosso estado com elas')
      setTarefas(JSON.parse(tarefasLocalStorage))
    }
  }, [])

  useEffect(() => {
    console.log('alterações nas tarefas! vamos validar')
    if (tarefas.length > 0) {
      console.log('o array de tarefas não tá vazio, vamos atualizar!  ')
      localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }
  }, [tarefas])

  const [novaTarefa, setNovatarefa] = useState('')

  function aoSubmeterFormulario (evento) {
    evento.preventDefault()
    setTarefas([...tarefas, {
      descricao: novaTarefa,
      concluida: false
    }])
    setNovatarefa('')
  }

  function atualizarTarefa(index) {
    const tarefasAtualizadas = tarefas.map((tarefa, i) => {
      if (i === index) {
        return { ...tarefa, concluida: !tarefa.concluida }
      }
      return tarefa
    })

    setTarefas(tarefasAtualizadas)
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
          <TodoItem key={index} tarefa={tarefa} aoAlternarConclusao={() => atualizarTarefa(index)} />
      ))}

  </div>)
}

export default App
