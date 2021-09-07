import React from "react";
import { Check, Delete } from "@material-ui/icons";

export default function Todo({ inputText, todo, todos, setTodos }) {
    const completeHandler = () => {
        setTodos(todos.map( (item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }    
    
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    return (
        <div className="todo">
            <li className={`todo__item ` + (todo.completed && 'completed')} >{inputText}</li>
            <button onClick={completeHandler} className="btn--complete">
                <Check />
            </button>
            <button onClick={deleteHandler} className="btn--trash">
                <Delete />
            </button>
        </div>
    );
}
