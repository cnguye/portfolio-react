import React from "react";
import Todo from "./todo/TodoMain";
import Calculator from "./calculator/Calculator";
import "./projectsMain.scss";
import { Card } from "@material-ui/core";

export default function ProjectsMain() {
    const displayNone = {
        display: "none",
    };
    return (
        <React.Fragment>
            <Card className="project__item">
                <Todo />
            </Card>
            <div className="project__item" style={displayNone}>
                <Calculator />
            </div>
        </React.Fragment>
    );
}
