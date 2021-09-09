import React from "react";
import Todo from "./todo/TodoMain";
import Calculator from "./calculator/Calculator";
import { Link, useLocation } from "react-router-dom";
import { Card } from "@material-ui/core";

import { ExitToApp } from "@material-ui/icons";
import "./projectsMain.scss";

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
                <div className="projects__link">
                    <Link to="/" className="projects__Link">
                        <span className="projects__Link--item projects_Link--link">Home</span>
                        <ExitToApp className="projects__Link--item" />
                    </Link>
                </div>
            )}
        </div>
    );
}
