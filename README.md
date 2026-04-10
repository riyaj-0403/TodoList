# React Todo List

A simple Todo List app built with React + Vite.

## Features
- Add, edit, delete todos
- Mark todos as complete/incomplete
- Persists data with localStorage

## Getting Started

### Prerequisites
- Node.js `^20.19.0` or `>=22.12.0`
- npm `>=8.0.0`

### Install & Run

```bash
npm install
npm run dev
```

Open your browser at **http://localhost:5173**

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
todolist/
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── components/
    │   ├── index.js
    │   ├── TodoForm.jsx
    │   ├── TodoForm.css
    │   ├── TodoItem.jsx
    │   └── TodoItem.css
    └── contexts/
        ├── index.js
        └── TodoContext.jsx
```
