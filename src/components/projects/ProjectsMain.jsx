import React, {  } from "react";
import Todo from "./todo/TodoMain";
import Calculator from "./calculator/Calculator";
import "./projectsMain.scss";
import { Card } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

export default function ProjectsMain({ setNavMenu }) {
    const displayNone = {
        display: "none",
    };

    return (
        <div id="projects" className="projects">
            <Card className="project__item">
                <Todo />
            </Card>
            <div className="project__item" style={displayNone}>
                <Calculator />
            </div>
            {useLocation().pathname === "/projects" && (
                <div className="projects--link">
                    <Link to="/">Home</Link>
                </div>
            )}
        </div>
    );
}
