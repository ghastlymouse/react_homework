import React from 'react'

const TodoItem = ({ todo, setTodos }) => {
    const { id, text, isDone } = todo;
    const deletTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
    };
    const updateTodo = (id) => {
        setTodos(prevTodos => prevTodos.map(todo => (
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        )))
    };
    return (
        <>
            {text}
            <button onClick={() => updateTodo(id)}>{isDone ? "취소" : "완료"}</button>
            <button onClick={() => deletTodo(id)}>삭제</button>
        </>
    )
}

export default TodoItem