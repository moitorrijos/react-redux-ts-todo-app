import React from 'react';
import './TodoList.css';
function TodoList() {
      
  return (
    <ul className="todo-list">
      <li>
        <input type="checkbox" />
        <label>Conquer the world!</label>
        <button className="delete-button">Delete</button>
      </li>
    </ul>
  )
}

export default TodoList;