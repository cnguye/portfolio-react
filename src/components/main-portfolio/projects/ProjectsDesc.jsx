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
}) {
    const [activeProjectProps, setActiveProjectProps] = useState([]);

    const handleStopPropagation = (e) => {
        e.stopPropagation();
    };

    useEffect(() => {
        let projectCodex = [];
        projects.forEach((project) => {
            if (project.projectKey === activeProject) {
                projectCodex = project;
            }
        });
        setActiveProjectProps(projectCodex);
    }, [activeProject, projects]);

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
            <div className="project__overview" onClick={handleStopPropagation}>
                <ActiveDescContainer activeProjectProps={activeProjectProps} />
            </div>
        </div>
    );
}
