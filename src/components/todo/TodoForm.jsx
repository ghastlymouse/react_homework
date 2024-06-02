import React, { useState } from 'react'

const TodoForm = ({ setTodos }) => {
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
    return (
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
    )
}

export default TodoForm