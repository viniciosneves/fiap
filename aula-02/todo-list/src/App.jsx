import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Titulo from './componentes/Titulo/Titulo';
import TodoItem from './componentes/TodoItem/TodoItem';

function App() {
  const tarefas = ["Aprender React", "Revisar JSX", "Construir uma App"];

  return (<div className="container">

      <Titulo>Tarefas</Titulo>

      {tarefas.map((tarefa, index) => (
          <TodoItem key={index} descricao={tarefa} />
      ))}

  </div>)
}

export default App
