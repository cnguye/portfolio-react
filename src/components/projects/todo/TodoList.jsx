import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, filteredTodos, setTodos }) {
    return (
        <div className="todo__container">
            <ul className="todo__list">
                {filteredTodos.map((todo) => (
                    <Todo key={todo.id} inputText={todo.text} todo={todo} todos={todos} setTodos={setTodos} />
                ))}
            </ul>
        </div>
    );
}
