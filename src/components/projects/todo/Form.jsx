import React from "react";
import { Add } from "@material-ui/icons";

export default function Form({
    inputText,
    setInputText,
    todos,
    setTodos,
    setFilter,
}) {
    // write javascript here
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random() * 1000,
            },
        ]);
        setInputText("");
    };

    const statusHandler = (e) => {
        setFilter(e.target.value);
    };

    return (
        <form className="project__form project__form--todo">
            <div className="project__form--item project__form--input">
                <input
                    value={inputText}
                    onChange={inputTextHandler}
                    type="text"
                    className="todo--input"
                />
                <button
                    onClick={submitTodoHandler}
                    className="todo-button"
                    type="submit"
                >
                    <Add />
                </button>
            </div>
            <div className="project__form--item project__form--select">
                <select
                    onChange={statusHandler}
                    name="todos"
                    className="form__select filter-todo"
                >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incompleted">Incompleted</option>
                </select>
            </div>
        </form>
    );
}
