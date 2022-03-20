import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo} from '../features/todoSlice';

export const TodoItem = ({id, title, description, completed}) => {
    const dispatch = useDispatch();

    const handleCheckBoxClick = () => {
        dispatch(toggleComplete({id: id, completed: !completed}));
    };

    const handleDeleteClick = () => {
        dispatch(deleteTodo({id}));
    };

  return (
    <li className={completed === false ? 'todo--incompleted' : 'todo--completed'}>
        <div className="todo--toggle-completed" onClick={handleCheckBoxClick}>
            <h3 className="todo__title">{title}</h3>
            <p className="todo__body">{description}</p>
        </div>
        {completed === true
        && <button type="button" id="btnDeleteTodo" className="todo__button--remove" onClick={handleDeleteClick}>Delete</button>}
    </li>
  )
}