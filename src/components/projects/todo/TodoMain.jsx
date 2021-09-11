import React, { useState, useEffect } from "react";
import "./todo.scss";

import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    const filterHandler = () => {
        switch (filter) {
            case "completed":
                setFilteredTodos(
                    todos.filter((todo) => todo.completed === true)
                );
                break;
            case "incompleted":
                setFilteredTodos(
                    todos.filter((todo) => todo.completed !== true)
                );
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };

    useEffect(() => {
        getLocalTodos();
    }, []);

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
        // eslint-disable-next-line
    }, [todos, filter]);

    // Save to local
    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let localTodos = JSON.parse(localStorage.getItem("todos"));
            setTodos(localTodos);
        }
    };

    return (
        <div id="todo" className="project__body project__body--todo">
            <header className="project__header project__header--todo">
                <h1>Todo List</h1>
            </header>
            <Form
                inputText={inputText}
                setInputText={setInputText}
                todos={todos}
                setTodos={setTodos}
                setFilter={setFilter}
            />
            <TodoList
                todos={todos}
                filteredTodos={filteredTodos}
                setTodos={setTodos}
            />
        </div>
    );
}
