
import './App.css';
import React, { useReducer, useState } from 'react'
import Todo from './components/Todo';
import bootstrap from 'bootstrap';


export const ACTIONS = {
  addTodo: "add_todo",
  toggle_todo: "toggle_todo",
  delete_todo: "delete_todo"

}
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.addTodo:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.toggle_todo:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    default:
      return todos
    case ACTIONS.delete_todo:
      return todos.filter(todo => todo.id !== action.payload.id)
  }
}
function newTodo(name) {
  return { id: Date.now(), name: name, complete: false }
}


function App() {

  
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState("")


  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.addTodo, payload: { name: name } })
    setName("")
  }
  return (
    <div className="container">
      <h1>Add a Todo Item!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <button className="btn btn-primary" type="submit">Add</button>
      </form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      })}
    </div>
  )
}

export default App;
