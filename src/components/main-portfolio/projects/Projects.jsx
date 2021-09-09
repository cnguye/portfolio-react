import React from "react";
import ProjectsMain from "../../projects/ProjectsMain";
// import ProjectsMain from "../../projects/ProjectsMain";
import { Link } from "react-router-dom";

import "./projects.scss";

export default function Projects() {
    // let projectsList = ['Calculator', 'Swipeable News', 'Home'];
    return (
        <div id="projects" className="projects">
            <ProjectsMain />
            <div className="projects--link"><Link to="/projects">See Projects</Link></div>
        </div>
    );
}
