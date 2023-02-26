import React from "react"
import "./TodoList.css"
import { useAppSelector, useAppDispatch } from "../app/hooks"
import DeleteIcon from "./DeleteIcon"

function TodoList() {
  const todos = useAppSelector((state) => state.todoReducer)
  const dispatch = useAppDispatch()
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "todo/updateTodo",
      payload: { id: +event.currentTarget.id, text: event.target.value },
    })
  }
  function handleDelete(event: React.MouseEvent<HTMLButtonElement>) {
    const payload = event.currentTarget.dataset.id
      ? +event.currentTarget.dataset.id
      : 0
    dispatch({ type: "todo/deleteTodo", payload })
  }
  function handleChecked(event: React.ChangeEvent<HTMLInputElement>) {
    const id = event.currentTarget.dataset.id
      ? +event.currentTarget.dataset.id
      : 0
    dispatch({
      type: "todo/toggleTodo",
      payload: {
        id,
        completed: event.target.checked,
      },
    })
  }
  return (
    <ul className="todo-list">
      {todos.length ? (
        todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span className="text">
              <input
                type="checkbox"
                data-id={todo.id.toString()}
                checked={todo.completed}
                onChange={handleChecked}
              />
              <input
                type="text"
                id={todo.id.toString()}
                defaultValue={todo.text}
                onChange={handleChange}
              />
            </span>
            <button
              data-id={todo.id.toString()}
              className="delete-task"
              onClick={handleDelete}
            >
              <DeleteIcon />
            </button>
          </li>
        ))
      ) : (
        <li>No todos, yay!</li>
      )}
    </ul>
  )
}

export default TodoList
