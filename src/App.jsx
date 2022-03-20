import React from 'react';
import Form from './components/Form';
import { TodoList } from './components/TodoList';
import './styles/styles.css';

const App = () => {
  return (
    <div className="App">
      <h1>Todoapp</h1>
      <Form/>
      <TodoList/>
    </div>
  );
}

export default App;
