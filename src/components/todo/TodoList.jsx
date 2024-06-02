import React from 'react'
import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos }) => {

    return (
        <ul>
            {
                todos.map(todo => {
                    return (
                        <li key={todo.id} style={{ textDecoration: todo.isDone ? "line-through" : undefined }}>
                            <TodoItem todo={todo} setTodos={setTodos} />
                        </li>
                    );
                })
            }
        </ul>
    )
}

export default TodoList