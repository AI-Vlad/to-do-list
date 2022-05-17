import React from "react"
import '../../src/App.css'
import { useState } from "react"
import { useEffect } from "react"
import Form from "./form"
import Tabela from "./tabela"

export default function Home(props) {

  const [tarefa, setTarefa] = useState('')
  const [tarefas, setTarefas] = useState([])
  const [index, setIndex] = useState(-1)
  const [tarefasSalvas, setTarefasSalvas] = useState([])

  useEffect(() => {
    function setarTarefas() {
      if (tarefasSalvas?.length < tarefas?.length) {
        localStorage.setItem('tarefasSalvas', JSON.stringify(tarefas))
      }
    }

    setarTarefas()

  }, [tarefas, tarefasSalvas])

  useEffect(() => {

    function criarTarefas() {

      if (localStorage.getItem('tarefasSalvas') === []) {
        localStorage.setItem('tarefasSalvas', '[]')
      } else {
        const tarefasBuscadas = JSON.parse(localStorage.getItem('tarefasSalvas'))
        setTarefas(tarefasBuscadas)
      }
    }

    criarTarefas()
  }, [])

  function mudaInput(e) {
    setTarefa(e.target.value)
  }

  function handleSubmit(e) {

    if (index > -1) {

      tarefas[index] = tarefa
      setTarefas([...tarefas])
      setTarefa("")
      setIndex(-1)
      localStorage.setItem('tarefasSalvas', JSON.stringify(tarefas))

    } else {

      setTarefas([...tarefas, tarefa])
      setTarefa("")
      setTarefasSalvas(tarefas)

    }
  }

  function handleEdit(e) {
    console.log('Edit', tarefas[e])
    setTarefa(tarefas[e])
    setIndex(e)
  }

  function handleDelete(e) {

    tarefas.splice(e, 1)
    setTarefas([...tarefas])
    localStorage.setItem('tarefasSalvas', JSON.stringify(tarefas))
  }

  return (
    <div className="main">
      <h1>Lista de tarefas</h1>
      <Form onSubmit={handleSubmit} action="#" method="" onChange={mudaInput} type="text" value={tarefa} buttonType="submit" />
      <Tabela className="lista-de-tarefas" tarefas={tarefas} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  )
}
