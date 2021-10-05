import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectCard({
    projectClicked,
    setProjectClicked,
    setProjectDescHovered,
    activeProject,
    setActiveProject,
    title,
    langs,
    img,
    projectKey,
    setMenuOpen,
    menuOpen,
}) {
    const handleOpenProject = (e) => {
        e.stopPropagation();
        if (activeProject === projectKey) setActiveProject("");
        else setActiveProject(projectKey);
        if (menuOpen) setMenuOpen(!menuOpen);
        setProjectClicked(true);
        setProjectDescHovered(false);
    };

    return (
        <div
            className={`project__item ${activeProject !== "" ? "extend" : ""} ${
                activeProject === projectKey ? "selected" : ""
            }`}
            onClick={handleOpenProject}
            onMouseEnter={
                !projectClicked ? () => setProjectDescHovered(true) : null
            }
            onMouseLeave={
                !projectClicked ? () => setProjectDescHovered(false) : null
            }
        >
            <img
                className="project__img"
                src={"./img/project_images/" + img}
                alt="todo-list img"
            />
            <div className="project__title">{title}</div>
            <div className="project__langs">
                {langs.map((lang) => (
                    <FontAwesomeIcon
                        key={`${projectKey}-${lang.iconName}`}
                        icon={lang}
                        className={`project__lang project__lang--${lang.iconName}`}
                    />
                ))}
            </div>
        </div>
    );
}
