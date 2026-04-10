import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'
import './TodoItem.css'

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const { updateTodo, deleteTodo, toggleComplete } = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg })
    setIsTodoEditable(false)
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  return (
    <div className={`todo-item ${todo.completed ? 'todo-item--completed' : 'todo-item--pending'}`}>
      <input
        type="checkbox"
        className="todo-item__checkbox"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`todo-item__text ${isTodoEditable ? 'todo-item__text--editable' : ''} ${todo.completed ? 'todo-item__text--done' : ''}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit / Save Button */}
      <button
        className="todo-item__btn todo-item__btn--edit"
        onClick={() => {
          if (todo.completed) return
          if (isTodoEditable) {
            editTodo()
          } else {
            setIsTodoEditable((prev) => !prev)
          }
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? '📁' : '✏️'}
      </button>
      {/* Delete Button */}
      <button
        className="todo-item__btn todo-item__btn--delete"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  )
}

export default TodoItem
