import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'
import './TodoForm.css'

function TodoForm() {
  const [todo, setTodo] = useState('')
  const { addTodo } = useTodo()

  const add = (e) => {
    e.preventDefault()
    if (!todo) return
    addTodo({ todo, completed: false })
    setTodo('')
  }

  return (
    <form onSubmit={add} className="todo-form">
      <input
        type="text"
        placeholder="Write Todo..."
        className="todo-form__input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="todo-form__btn">
        Add
      </button>
    </form>
  )
}

export default TodoForm
