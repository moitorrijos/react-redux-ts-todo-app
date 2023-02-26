import React from 'react';

function TodoForm() {
  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('adding task');
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
      <button type="submit" >Add Todo</button>
    </div>
  </form>
  );
}

export default TodoForm;