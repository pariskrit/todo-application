import React from 'react'
import Button from '../../elements/Button'
import Inputfield from '../../elements/Inputfield'
import './style.css';

function TodoItem({ todo, onDelete, onEdit }) {
    return (
        <li className="todo-item">
            <div className='todo-item-left-container'>
                <input type='checkbox' />
                <span>{todo?.task}</span>
            </div>

            <div className="buttons">

                <Button onClick={() => onEdit(todo)} className='edit-button' >Edit</Button>
                <Button onClick={() => onDelete(todo.id)} className='delete-button'>Delete</Button>
            </div>
        </li>
    )
}

export default TodoItem