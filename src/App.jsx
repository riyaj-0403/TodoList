import { useState, useEffect } from 'react'
import { TodoProvider } from './contexts'
import './App.css'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    )
  }

  // Load from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('todos'))
    if (stored && stored.length > 0) {
      setTodos(stored)
    }
  }, [])

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="app-wrapper">
        <div className="app-container">
          <h1 className="app-title">Manage Your Todos</h1>

          <div className="todo-form-wrapper">
            <TodoForm />
          </div>

          <div className="todo-list-wrapper">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full" style={{ width: '100%' }}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
