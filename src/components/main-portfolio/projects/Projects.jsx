import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectsDesc from "./ProjectsDesc";

import {
    faReact,
    faJs,
    faSass,
    faHtml5,
    faNpm,
} from "@fortawesome/free-brands-svg-icons";

import "./projects.scss";

export default function Projects({
    activeProject,
    setActiveProject,
    projectDescHovered,
    setProjectDescHovered,
    projectClicked,
    setProjectClicked,
    setMenuOpen,
    menuOpen,
    windoWidth
}) {
    const projects = [
        {
            projectKey: "todo",
            title: "ToDo List",
            langs: [faReact, faJs, faSass, faHtml5],
            card_img: "todo-list.png",
            desc_img: "",
            desc: {
                features: [
                    "user input",
                    "item deletion",
                    "item status filter",
                    "item status toggle",
                ],
            },
        },
        {
            projectKey: "swipeable-news",
            title: "Swipeable News",
            langs: [faReact, faJs, faSass, faHtml5],
            card_img: "swipeable-news.png",
            desc_img: "",
            desc: {
                features: [
                    "swipe delete items",
                    "interactive news items",
                    "restoring deleted items",
                    "news category selection",
                ],
                technologies: [
                    { name: "News API", url: "https://newsapi.org/" },
                    {
                        name: "Draggable Social Card",
                        url: "https://malcoded.com/posts/react-swipeable-list/",
                    },
                ],
            },
        }, 
        {
            projectKey: "pitim",
            title: "PiTim",
            langs: [faReact, faJs, faSass, faHtml5, faNpm],
            card_img: "pitim_target.png",
            desc_img: "pitim_eg",
            desc: {
                features: [
                    "live updates of models and prices",
                    "send notification through custom API",
                    "save user settings through MySQL database",
                    "Add, edit, delete, and reset changes",
                ],
                technologies: [
                    { name: "PiTim", url: "https://pitim.christopherhnguyen.com" },
                    {
                        name: "NGINX",
                        url: "https://www.nginx.com/",
                    },
                    {
                        name: "Express.js",
                        url: "https://expressjs.com/",
                    },
                ],
            },
        },
    ];

    const handleCloseProject = () => {
        setActiveProject("");
        setProjectClicked(false);
    };

    return (
        <div
            id="projects"
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
                        card_img={project.card_img}
                        desc_img={project.desc_img}
                        setMenuOpen={setMenuOpen}
                        menuOpen={menuOpen}
                    />
                ))}
            </div>
            <ProjectsDesc
                projectDescHovered={projectDescHovered}
                activeProject={activeProject}
                projects={projects}
                windoWidth={windoWidth}
            />
        </div>
    );
}
