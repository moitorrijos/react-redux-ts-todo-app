import React from "react"
import styles from "./TodoForm.module.css"
import { useAppDispatch } from "../app/hooks"

function TodoForm() {
  const dispatch = useAppDispatch()
  function addTask(event: React.FormEvent<HTMLFormElement>) {
    const input = event.currentTarget[0] as HTMLInputElement
    event.preventDefault()
    dispatch({ type: "todo/addTodo", payload: input.value })
    input.value = ""
  }
  return (
    <>
      <div className={styles["form-background-blur"]}></div>
      <form onSubmit={addTask}>
        <label>What are we going to do today?</label>
        <div className={styles["todo-input-button"]}>
          <input type="text" name="new-todo" placeholder="Conquer the world!" />
          <button className={styles["add-task"]} type="submit">
            Add Todo
          </button>
        </div>
      </form>
    </>
  )
}

export default TodoForm
