import React, { useEffect, useState } from "react";
import Button from "../../components/elements/Button";
import Header from "../../components/elements/Header";
import Inputfield from "../../components/elements/Inputfield";
import TodoItem from "../../components/modules/TodoItem";
import FormContainer from "../../components/wrappers/FormContainer";
import { addTodo, deleteTodo, fetchTodos, updateTodo } from "../../services/todo";
import "./style.css";

function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [todoIdToEdit, setTodoIdToEdit] = useState();
    const [error, setError] = useState('');

    const resetTodo = () => setTodo('');
    const resetError = () => setError('');


    const handleChange = (e) => setTodo(e.target.value);


    const handleDelete = async (todoId) => {
        const response = await deleteTodo(todoId);
        if (response)
            setTodos(response);
    };

    const handleEdit = (todo) => {
        setTodo(todo.task);
        setTodoIdToEdit(todo.id);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // check if task field empty
        if (!todo) {
            setError('Please fill up the field')
            return;
        }
        const response = await addTodo({ task: todo });
        setTodos([...todos, response]);
        resetTodo()
        resetError()
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();

        // check if task field empty
        if (!todo) {
            setError('Please fill up the field')
            return;
        }

        const response = await updateTodo(todo, todoIdToEdit);

        setTodos(response);
        resetTodo()
        resetError()
        setTodoIdToEdit(undefined);


    }

    const getTodos = async () => {

        const todos = await fetchTodos();
        setTodos(todos);
    }

    useEffect(() => {
        getTodos();

    }, [])
    console.log(todos)
    return (
        <div className="todo-container">
            <Header>Welcome To Todo App</Header>
            <FormContainer style={{ marginBottom: "20px" }}>
                <form onSubmit={todoIdToEdit ? handleEditSubmit : handleSubmit}>
                    <Inputfield
                        id="todo"
                        type="text"
                        name="todo"
                        value={todo}
                        onChange={handleChange}
                        placeholder="Write your task..."
                    />

                    {error && <p className="error">{error}</p>}
                    <Button type="submit">{todoIdToEdit ? 'Update' : 'Add'}</Button>
                </form>
            </FormContainer>
            <FormContainer>
                {todos && todos?.length === 0 ? <p>Hurray! No Task To Do</p> : <ul>
                    {todos?.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))}
                </ul>}
            </FormContainer>
        </div>
    );
}

export default Todo;
