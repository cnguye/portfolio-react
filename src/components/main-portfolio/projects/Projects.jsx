import React from "react";
import ProjectsMain from "../../projects/ProjectsMain";
// import ProjectsMain from "../../projects/ProjectsMain";
import { Link } from "react-router-dom";

import { ExitToApp } from "@material-ui/icons";
import "./projects.scss";

export default function Projects() {
    // let projectsList = ['Calculator', 'Swipeable News', 'Home'];
    return (
        <div id="projects" className="section section__projects">
            <h2 className="section__title section__title--projects">
                Projects
            </h2>
            <ProjectsMain />
            {/* <div className="projects__link">
                <Link to="/projects" className="projects__Link">
                    <span className="projects__Link--item projects_Link--link">
                        See Projects
                    </span>
                    <ExitToApp className="projects__Link--item" />
                </Link>
            </div> */}
        </div>
    );
}
