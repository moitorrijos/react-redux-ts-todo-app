import React from 'react';
import './TodoForm.css';
import { useAppDispatch } from '../app/hooks';

function TodoForm() {
  const dispatch = useAppDispatch();
  function addTask(event: React.FormEvent<HTMLFormElement>) {
    const input = event.currentTarget[0] as HTMLInputElement;
    event.preventDefault();
    dispatch({ type: 'todo/addTodo', payload: input.value})
  }
  return (
    <form onSubmit={addTask}>
      <label>What do you need to do today?</label>
      <div className="todo-input-button">
        <input
          type="text"
          name="new-todo"
          placeholder="Conquer the world!"
        />
        <button className='add-task' type="submit">Add Todo</button>
      </div>
    </form>
  );
}

export default TodoForm;