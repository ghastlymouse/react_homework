import React, { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([
        {
            id: "1",
            text: "베이직강의 복습하기",
            isDone: true,
        },
    ]);
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const addTodo = (event) => {
        event.preventDefault();
        const newTodo = {
            id: crypto.randomUUID(),
            text: value,
            isDone: false,
        };

        setTodos(prev => [...prev, newTodo]);
        setValue("");
    }
    const deletTodo = (id) => {
        const cleanedTodos = todos.filter(todo => id !== todo.id);
        setTodos(cleanedTodos);
    };
    const updateTodo = (id) => {
        const updatedTodos = todos.map(todo =>
            id === todo.id ? { ...todo, isDone: !todo.isDone } : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>TodoList</h1>
            <form onSubmit={addTodo}>
                <input
                    value={value}
                    type='text'
                    placeholder='할 일을 입력하세요'
                    onChange={handleChange}
                    required
                />
                <button type='submit'>추가</button>
            </form>
            <ul>
                {
                    todos.map(todo => {
                        return (
                            <li key={todo.id} style={{ textDecoration: todo.isDone ? "line-through" : undefined }}>
                                {todo.text}
                                <button onClick={() => updateTodo(todo.id)}>{todo.isDone ? "취소" : "완료"}</button>
                                <button onClick={() => deletTodo(todo.id)}>삭제</button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList