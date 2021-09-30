import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsDesc from "../../projects/ProjectsDesc";

import {
    faReact,
    faJs,
    faSass,
    faHtml5,
} from "@fortawesome/free-brands-svg-icons";

import "./projects.scss";
import Todo from "../../projects/todo/Todo";

export default function Projects({
    activeProject,
    setActiveProject,
    projectDescHovered,
    setProjectDescHovered,
    projectClicked,
    setProjectClicked,
    setMenuOpen,
    menuOpen,
}) {
    const projects = [
        {
            projectKey: "todo",
            title: "ToDo List",
            langs: [faReact, faJs, faSass, faHtml5],
            img: "todo-list.png",
        },
        {
            projectKey: "swipeable-news",
            title: "Swipeable News",
            langs: [faReact, faJs, faSass, faHtml5],
            img: "swipeable-news.png",
        },
    ];

    const handleCloseProject = () => {
        setActiveProject("");
        setProjectClicked(false);
    };

    return (
        <div
            id="section-projects"
            className={`section section__projects`}
            onClick={handleCloseProject}
        >
            <h2 className="section__title section__title--projects">
                Projects
            </h2>
            <div className="projects">
                {projects.map((project) => (
                    <ProjectCard
                        projectClicked={projectClicked}
                        setProjectClicked={setProjectClicked}
                        setProjectDescHovered={setProjectDescHovered}
                        activeProject={activeProject}
                        setActiveProject={setActiveProject}
                        title={project.title}
                        key={project.projectKey}
                        projectKey={project.projectKey}
                        langs={project.langs}
                        img={project.img}
                        setMenuOpen={setMenuOpen}
                        menuOpen={menuOpen}
                    />
                ))}
            </div>
            <ProjectsDesc
                projectDescHovered={projectDescHovered}
                activeProject={activeProject}
            />
        </div>
    );
}
