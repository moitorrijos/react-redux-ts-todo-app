import React from 'react';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoHeader />
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
