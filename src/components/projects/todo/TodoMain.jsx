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
        console.log("Hello savelocal");
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            // fill with sample todo list
            const exampleToDo = [
                {
                    text: 'pick up milk',
                    completed: true,
                    id: Math.random() * 1000,
                },
                {
                    text: 'walk the dog',
                    completed: false,
                    id: Math.random() * 1000,
                }
            ];
            setTodos(exampleToDo);
            localStorage.setItem("todos", JSON.stringify(todos));
            setInputText('order dinner');
        } else {
            let localTodos = JSON.parse(localStorage.getItem("todos"));
            console.log(localTodos);
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
