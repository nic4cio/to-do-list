import { useState } from 'react'
import './App.css'
import CardAdicionar from './components/CardAdicionar'
import ListItem from './components/ListItem'

function App() {

  const [listaTarefas, setListaTarefas] = useState([
    {id: 1, textoTarefa: "tarefa 1", finalizado: false}
  ])

  const adicionarTarefa = (texto) => {

    if(texto == ""){
      alert("É necessário escrever uma tarefa");
      return
    }
    
    const novaTarefa = {id: listaTarefas.length + 1 , textoTarefa: texto, finalizado: false}

    setListaTarefas([...listaTarefas, novaTarefa])
  }

  return (
    <>
      <CardAdicionar adicionarTarefa={adicionarTarefa}/>
      <div>{listaTarefas.map(tarefa => (
        <ListItem key={tarefa.id} textoTarefa={tarefa.textoTarefa} finalizado={tarefa.finalizado} />
      ))}</div>
    </>
  )
}

export default App
