import React, { useState, useEffect } from "react";
import ActiveDescContainer from "./ActiveDescContainer";

import Todo from "../../projects/todo/TodoMain";
import SwipeableNews from "../../projects/swipeable-news/Swipeable-NewsMain";

import { Card } from "@material-ui/core";

import "./projectsDesc.scss";

export default function ProjectsDesc({
    projectDescHovered,
    activeProject,
    projects,
    windoWidth,
}) {
    const [activeProjectProps, setActiveProjectProps] = useState([]);
    const [isDescActive, setIsDescActive] = useState(false);
    
    const renderProject = (selectedProject) => {
        switch (selectedProject) {
            case "todo":
                return <Todo />;
            case "swipeable-news":
                return <SwipeableNews />;
            default:
                return null;
        }
    };

    const handleStopPropagation = (e) => {
        e.stopPropagation();
    };

    const handleOpenProjectDesc = (e) => {
        e.stopPropagation();
        setIsDescActive(()=> !isDescActive)
    }
    
    useEffect(() => {
        let projectCodex = [];
        projects.forEach((project) => {
            if (project.projectKey === activeProject) {
                projectCodex = project;
            }
        });
        setActiveProjectProps(projectCodex);
    }, [activeProject, projects]);
    



    return (
        <div
            id="project-desc"
            className={`project__desc ${activeProject !== "" ? "active" : ""} ${
                projectDescHovered ? "hovered" : ""
            }`}
        >
            <Card className="project__card" onClick={handleStopPropagation}>
                {renderProject(activeProject)}
            </Card>
            <div
                className={`project__overview--pseudo-body  ${
                    windoWidth < 800 && "project__overview-m"
                } ${isDescActive ? "project__overview--active" : ''}`}
                onClick={handleStopPropagation}
            >
                <div
                    className={`project__overview--pseudo-container ${isDescActive ? "project__overview--active" : ''}`}
                    onClick={handleOpenProjectDesc}
                    >
                    <div
                        className={`project__overview`}
                        onClick={handleStopPropagation}
                    >
                        <ActiveDescContainer
                            activeProjectProps={activeProjectProps}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
