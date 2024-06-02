import React, { useState } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoContainer = () => {
    const [todos, setTodos] = useState([
        {
            id: "1",
            text: "베이직강의 복습하기",
            isDone: true,
        },
    ]);



    return (
        <div>
            <h1>TodoList</h1>
            <TodoForm setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default TodoContainer