import React, { useEffect } from "react";
import Todo from "./todo/TodoMain";
import Calculator from "./calculator/Calculator";
import SwipeableNews from "./swipeable-news/Swipeable-NewsMain";

import { Link, useLocation } from "react-router-dom";
import { Card } from "@material-ui/core";

import "./projectsDesc.scss";

export default function ProjectsDesc({ projectDescHovered, activeProject,  }) {
    const handleStopPropagation = (e) => {
        e.stopPropagation();
    };

    const renderProject = (selectedProject) => {
        switch(selectedProject) {
            case 'todo':
                return <Todo />
            case 'swipeable-news':
                return <SwipeableNews />
            default:
                return null;
        }
    };
    return (
        <div
            id="project-desc"
            className={`project__desc ${activeProject !== '' ? "active" : ''} ${projectDescHovered ? 'hovered' : ''}`}
            onClick={handleStopPropagation}
        >
            
            <Card className="project__card">{renderProject(activeProject)}</Card>
        </div>
    );
}
