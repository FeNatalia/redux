import React from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const todos = useSelector((state) => state.todos);

    const AllTodos = todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} description={todo.description} completed={todo.completed}/>
    ))

  return (
    <ul className="todo-list" id="todoList">
        {AllTodos}
    </ul>
  )
}