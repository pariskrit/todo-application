import React, { useState } from 'react'
import Button from '../../components/elements/Button'
import Header from '../../components/elements/Header'
import InputLabel from '../../components/modules/InputLabel'
import FormContainer from '../../components/wrappers/FormContainer';
import './style.css'

function Todo() {

    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState(['wash', 'run', 'gym']);

    const handleChange = (e) => setTodo(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert('Submitted');
    }
    return (<div>
        <FormContainer>
            <Header>Add Todo</Header>
            <form onSubmit={handleSubmit}>
                <InputLabel label='Todo' id='todo' type="text"
                    name='todo'
                    value={todo}
                    onChange={handleChange}
                    placeholder="Todo" />


                {/* {error && <p className="error">{error}</p>} */}
                <Button type="submit" >Add</Button>
            </form>
        </FormContainer >
        <Header>Todo List</Header>
        <FormContainer>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} className="todo-item">
                        {/* {editingIndex === index ? (
                            <input
                                type="text"
                                value={editingText}
                                onChange={(e) => setEditingText(e.target.value)}
                            />
                        ) : (
                            <span>{todo}</span>
                            )} */}
                        <span>{todo}</span>
                        <div className="buttons">
                            {/* {editingIndex === index ? (
                                <button onClick={saveEdit}>Save</button>
                            ) : (
                                <button onClick={() => editTodo(index)}>Edit</button>
                                )} */}
                            <Button onClick={() => { }} className='edit-button' >Edit</Button>
                            <Button onClick={() => { }} className='delete-button'>Delete</Button>
                        </div>
                    </li>
                ))}
            </ul>
        </FormContainer>

    </div>

    )
}

export default Todo