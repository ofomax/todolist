
import React from 'react'
import { ACTIONS } from '../App'




export default function Todo({ todo, dispatch }) {
  return (
    <div>
        <span style={{ color: todo.complete ? "#AAA" : '#000'}}>{todo.name}</span>
        <button className="btn btn-success" onClick={() => dispatch({type: ACTIONS.toggle_todo, payload: { id: todo.id}})}>Toggle</button>
        
        <button className="btn btn-danger" onClick={() => dispatch({type: ACTIONS.delete_todo, payload: { id: todo.id}})}>Delete</button>
    </div>
  )
}
