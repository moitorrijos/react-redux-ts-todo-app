import React from "react"
import "./TodoHeader.module.css"
import { useAppSelector } from "../app/hooks"

function TodoHeader() {
  const todos = useAppSelector((state) => state.todoReducer)
  return (
    <header>
      <h1>
        {todos.length === 0
          ? "No task"
          : todos.length === 1
          ? "1 task"
          : `${todos.length} task`}
      </h1>
      <h2>
        {todos.filter((todo) => !todo.completed).length === 0 ? (
          <span>No pending tasks</span>
        ) : (
          <span>
            {todos.filter((todo) => !todo.completed).length} tasks pending
          </span>
        )}
      </h2>
    </header>
  )
}

export default TodoHeader
