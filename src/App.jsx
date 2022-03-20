import React from 'react';
import Form from './components/Form';
import { TodoList } from './components/TodoList';
import './styles/styles.css';

const App = () => {
  return (
    <div className="page-wrapper">
      <header className="header">
        <h1 className="header__title">TodoApp</h1>
        <h2 className="header__subtitle">We help you to stay organized!</h2>
      </header>
      <Form/>
      <TodoList/>
    </div>
  );
}

export default App;
