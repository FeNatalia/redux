import React from 'react'
// import { useDispatch } from 'react-redux';
// import { toggleComplete} from '../redux/todoSlice';

export const TodoItem = ({id, title, description, completed}) => {
    // const dispatch = useDispatch();

    // const handleCheckBoxClick = () => {
    //     dispatch(toggleComplete({id: id, completed: !completed}));
    // };

    // const handleDeleteClick = () => {
    //     dispatch(deleteTodo({id}));
    // };

  return (
    <li className={completed === false ? 'todo--incompleted' : 'todo--completed'}>
        <div className="todo--toggle-completed">
            {/* <input
                type='checkbox'
                className='mr-3'
                checked={completed}
                onClick={handleCheckBoxClick}
            ></input> */}
            <h3 className="todo__title">{title}</h3>
            <p className="todo__body">{description}</p>
        </div>
        {/* {item.isDone === true
        && <button type="button" id="btnDeleteTodo" className="todo__button--remove" onClick={() => deleteTodo(item.id)}>Delete</button>} */}
        {/* <button onClick={handleDeleteClick} type="button" id="btnDeleteTodo" className="todo__button--remove" >
            Delete
        </button> */}
    </li>
  )
}