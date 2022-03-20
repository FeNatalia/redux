import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';

const Form = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        if (value) {
            dispatch(addTodo({
                title: value,
            })
            );
        }
        setValue('');
    };

  return (
    <form className="form">
        <label htmlFor="txtTodoItemToAdd" className="form__label-title">
            Title
            <input className="form__new-todo-title" id="txtTodoItemToAdd" type="text" placeholder='add todo...' value={value} onChange={e => setValue(e.target.value)}/>
        </label>
        <button className="todo__button--add" id="btnAddTodo" onClick={ onSubmit }>Add</button>
    </form>
  )
}

export default Form;
