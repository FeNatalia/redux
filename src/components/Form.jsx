import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';

const Form = () => {
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        if (value) {
            dispatch(addTodo({
                title: value,
                description: description,
            })
            );
        }
        setValue('');
        setDescription('');
    };

  return (
    <form className="form">
        <label htmlFor="txtTodoItemToAdd" className="form__label-title">
            Title
            <input className="form__new-todo-title" id="txtTodoItemToAdd" type="text" placeholder='add title...' value={value} onChange={e => setValue(e.target.value)}/>
        </label>
        <label htmlFor="bodyTodoItemToAdd" className="form__label-description">
            Description
            <input className="form__new-todo-body" id="bodyTodoItemToAdd" type="text" placeholder='add body...' value={description} onChange={e => setDescription(e.target.value)}/>
        </label>
        <button className="todo__button--add" id="btnAddTodo" onClick={ onSubmit }>Add</button>
    </form>
  )
}

export default Form;
